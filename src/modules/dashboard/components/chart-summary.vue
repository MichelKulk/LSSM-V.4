<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <b>
                    {{ $sm('buildings.title') }}:
                    {{
                        Object.values(buildings)
                            .reduce((a, b) => (a += b.length), 0)
                            .toLocaleString()
                    }}
                </b>
                <span class="glyphicon glyphicon-info-sign tip-btn"></span>
                <div class="alert alert-info">
                    {{ $sm('buildings.tip') }}
                </div>
                |
                <b>
                    {{ $sm('buildings.personal_count') }}:
                    {{ personalCount.toLocaleString() }}
                </b>
                |
                <b>
                    {{ $sm('maxMissions.title') }}:
                    {{ maxMissions.toLocaleString() }}
                </b>
                <label class="pull-right">
                    <input
                        type="checkbox"
                        @change="changeBuildingChart"
                        v-model="buildingsAsColumn"
                    />
                    {{ $sm('buildings.columnchart') }}
                </label>
            </div>
            <div class="panel-body">
                <div :id="buildingsId" style="max-height: 400px"></div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <b>
                    {{ $sm('vehicles.title') }}:
                    {{
                        Object.values(vehicles)
                            .reduce((a, b) => a + b.length, 0)
                            .toLocaleString()
                    }}
                </b>
                <span class="glyphicon glyphicon-info-sign tip-btn"></span>
                <div class="alert alert-info">
                    {{ $sm('vehicles.tip') }}
                </div>
            </div>
            <div class="panel-body sunburst-grid">
                <div
                    v-for="(_, category) in vehicleCategories"
                    :key="category"
                    class="sunburst-chart"
                    :id="`${vehiclesId}_${category}`"
                    :style="`flex: 1 0 min(100%, max(250px, calc(100%/${
                        Object.keys(vehicleCategories).length
                    })))`"
                >
                    <div class="alert alert-danger">
                        {{
                            $t(
                                'modules.dashboard.chart-summaries.vehicles.empty',
                                { category }
                            )
                        }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Highcharts from 'highcharts';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsOfflineExporting from 'highcharts/modules/offline-exporting';
import HighchartsSunburst from 'highcharts/modules/sunburst';
import { mapState } from 'pinia';
import { useRootStore } from '@stores/index';
import { useSettingsStore } from '@stores/settings';
import { useTranslationStore } from '@stores/translationUtilities';
import { defineAPIStore, useAPIStore } from '@stores/api';

import type { BuildingCategory } from 'typings/Building';
import type { DefaultProps } from 'vue/types/options';
import type { TranslateResult } from 'vue-i18n';
import type { VehicleCategory } from 'typings/Vehicle';
import type {
    ChartSummary,
    ChartSummaryComputed,
    ChartSummaryMethods,
} from 'typings/modules/Dashboard/ChartSummary';
// to separate types
// eslint-disable-next-line no-duplicate-imports
import type {
    DrilldownOptions,
    Options,
    PointOptionsObject,
    SeriesSunburstOptions,
} from 'highcharts';

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
HighchartsSunburst(Highcharts);
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsOfflineExporting(Highcharts);

const exportingDefault = {
    fallbackToExportServer: false,
};

export default Vue.extend<
    ChartSummary,
    ChartSummaryMethods,
    ChartSummaryComputed,
    DefaultProps
>({
    name: 'lssmv4-dashboard-chart-summary',
    data() {
        const apiStore = useAPIStore();
        const rootStore = useRootStore();
        const translationStore = useTranslationStore();
        const internalBuildingTypes = translationStore.buildings;
        const internalVehicleTypes = translationStore.vehicles;
        return {
            buildingsId: rootStore.nodeAttribute(
                'chart-summary-buildings',
                true
            ),
            buildings: apiStore.buildingsByCategory,
            buildingCategories: this.$t(
                'buildingCategories'
            ) as unknown as Record<string, BuildingCategory>,
            buildingTypeNames: Object.fromEntries(
                Object.entries(internalBuildingTypes).map(
                    ([index, { caption }]) => [index, caption]
                )
            ),
            buildingTypeColors: Object.fromEntries(
                Object.entries(internalBuildingTypes).map(
                    ([index, { color }]) => [index, color]
                )
            ),
            vehiclesId: rootStore.nodeAttribute('chart-summary-vehicles', true),
            vehicles: apiStore.vehiclesByType,
            vehicleCategories: this.$t(
                'vehicleCategories'
            ) as unknown as Record<string, VehicleCategory>,
            vehicleTypeNames: Object.fromEntries(
                Object.entries(internalVehicleTypes).map(
                    ([index, { caption }]) => [index, caption]
                )
            ),
            vehicleTypeColors: Object.fromEntries(
                Object.entries(internalVehicleTypes).map(
                    ([index, { color }]) => [index, color]
                )
            ),
            vehiclesByBuilding: apiStore.vehiclesByBuilding,
            buildingsAsColumn: false,
            settingsStore: useSettingsStore(),
        } as ChartSummary;
    },
    computed: {
        ...mapState(defineAPIStore, {
            personalCount: store =>
                store.buildings
                    .map(b => b.personal_count)
                    .reduce((a, b) => a + b, 0),
        }),
        maxMissions() {
            return window.mission_count_max;
        },
    },
    mounted() {
        if (useRootStore().isDarkMode)
            Highcharts.setOptions(this.$utils.highChartsDarkMode);
        Highcharts.setOptions({
            lang: {
                ...(this.$t('highcharts') as Record<string, TranslateResult>),
            },
        });
        this.settingsStore
            .getSetting<boolean>({
                moduleId: 'dashboard',
                settingId: 'buildings_column_chart',
                defaultValue: false,
            })
            .then(column => {
                this.buildingsAsColumn = column ?? false;
                this.mountBuildingChart();
            });

        Highcharts.getOptions().colors?.splice(0, 0, 'transparent');
        Object.keys(this.vehicleCategories).forEach(category => {
            const groups = Object.keys(
                this.vehicleCategories[category].vehicles
            );
            const data = [
                {
                    id: category,
                },
            ] as PointOptionsObject[];
            let sum = 0;
            if (groups.length > 1) {
                groups.forEach(group => {
                    const types = [] as PointOptionsObject[];
                    let groupColor = 0;
                    Object.values(
                        this.vehicleCategories[category].vehicles[group]
                    ).forEach(type => {
                        const value = (this.vehicles[type] || []).length;
                        sum += value;
                        const color = this.vehicleTypeColors[type];
                        groupColor += parseInt(color.replace(/^#/u, ''), 16);
                        types.push({
                            id: `${category}_${group}_${type}`,
                            name: this.vehicleTypeNames[type],
                            parent: `${category}_${group}`,
                            value,
                            color,
                        });
                    });
                    const color = Math.floor(
                        groupColor / types.length
                    ).toString(16);
                    data.push({
                        id: `${category}_${group}`,
                        name: group,
                        parent: category,
                        color: `#${
                            '00000'.substring(0, 6 - color.length) + color
                        }`,
                    });
                    types.forEach(type => data.push(type));
                });
            } else {
                Object.values(
                    this.vehicleCategories[category].vehicles[groups[0]]
                ).forEach(type => {
                    const value = (this.vehicles[type] || []).length;
                    sum += value;
                    data.push({
                        id: `${category}_${type}`,
                        name: this.vehicleTypeNames[type],
                        value,
                        parent: category,
                        color: this.vehicleTypeColors[type],
                    });
                });
            }
            if (!sum) return;
            Highcharts.chart(`${this.vehiclesId}_${category}`, {
                chart: {
                    height: '100%',
                    type: 'sunburst',
                },
                exporting: {
                    ...exportingDefault,
                    filename: `lssm_vehicle_chart_${category}`,
                },
                title: {
                    text: `${category}: ${sum.toLocaleString()}`,
                },
                series: [
                    {
                        data: data.filter(
                            d => !d.hasOwnProperty('value') || d.value
                        ),
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        allowDrillToNode: true,
                        cursor: 'pointer',
                        levelIsConstant: false,
                        traverseUpButton: {
                            text:
                                Highcharts.getOptions().lang?.drillUpText ??
                                'Back',
                        },
                        breadcrumbs: {
                            buttonTheme: {
                                'fill': '#f7f7f7',
                                'padding': 8,
                                'stroke': '#cccccc',
                                'stroke-width': 1,
                            },
                            floating: true,
                            position: {
                                align: 'right',
                            },
                            showFullPath: false,
                        },
                    },
                ] as SeriesSunburstOptions[],
            } as Options);
        });
    },
    methods: {
        $m(key, args) {
            return this.$t(`modules.dashboard.${key}`, args);
        },
        $sm(key, args) {
            return this.$m(`chart-summaries.${key}`, args);
        },
        changeBuildingChart() {
            this.settingsStore.setSetting({
                moduleId: 'dashboard',
                settingId: 'buildings_column_chart',
                value: this.buildingsAsColumn,
            });
            this.mountBuildingChart();
        },
        mountBuildingChart() {
            const buildingVehicleDrilldowns = [] as DrilldownOptions[];
            Highcharts.chart(this.buildingsId, {
                chart: {
                    type: this.buildingsAsColumn ? 'column' : 'waterfall',
                },
                title: null,
                legend: {
                    enabled: false,
                },
                xAxis: {
                    type: 'category',
                },
                yAxis: {
                    title: {
                        text: this.$t('amount'),
                    },
                },
                tooltip: {
                    headerFormat:
                        '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat:
                        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>',
                },
                exporting: {
                    ...exportingDefault,
                    filename: 'lssm_building_chart',
                },
                plotOptions: {
                    waterfall: {
                        pointPadding: 0,
                        groupPadding: 0,
                    },
                },
                series: Object.keys(this.buildingCategories).map(category => {
                    const types = Object.values(
                        this.buildingCategories[category].buildings
                    );
                    return {
                        name: category,
                        data: [
                            ...types.map(type => {
                                return {
                                    name: this.buildingTypeNames[type],
                                    y: (this.buildings[category] || []).filter(
                                        building =>
                                            building.building_type === type
                                    ).length,
                                    color: this.buildingTypeColors[type],
                                };
                            }),
                            {
                                name: category,
                                isSum: !this.buildingsAsColumn,
                                color: this.buildingCategories[category].color,
                                drilldown: category,
                                y: this.buildings[category]?.length ?? 0,
                            },
                        ],
                    };
                }),
                drilldown: {
                    breadcrumbs: {
                        buttonTheme: {
                            'fill': '#f7f7f7',
                            'padding': 8,
                            'stroke': '#cccccc',
                            'stroke-width': 1,
                        },
                        floating: true,
                        position: {
                            align: 'right',
                        },
                        showFullPath: false,
                    },
                    series: [
                        ...Object.keys(this.buildingCategories).map(
                            category => {
                                const types = Object.values(
                                    this.buildingCategories[category].buildings
                                );
                                return {
                                    name: category,
                                    id: category,
                                    type: 'column',
                                    data: types.map(building_type => {
                                        const buildings = (
                                            this.buildings[category] || []
                                        ).filter(
                                            building =>
                                                building.building_type ===
                                                building_type
                                        );
                                        const vehicle_types = {} as Record<
                                            string,
                                            number
                                        >;
                                        buildings.forEach(building => {
                                            if (
                                                !this.vehiclesByBuilding.hasOwnProperty(
                                                    building.id
                                                )
                                            )
                                                return;
                                            this.vehiclesByBuilding[
                                                building.id
                                            ].forEach(vehicle => {
                                                if (
                                                    !vehicle_types.hasOwnProperty(
                                                        vehicle.vehicle_type
                                                    )
                                                ) {
                                                    vehicle_types[
                                                        vehicle.vehicle_type
                                                    ] = 0;
                                                }
                                                vehicle_types[
                                                    vehicle.vehicle_type
                                                ]++;
                                            });
                                        });
                                        if (Object.keys(vehicle_types).length) {
                                            const drilldown = {
                                                id: `${category}_${building_type}`,
                                                name: this.buildingTypeNames[
                                                    building_type
                                                ],
                                                type: 'column',
                                                data: Object.keys(
                                                    vehicle_types
                                                ).map(vehicle_type => ({
                                                    id: `${category}_${building_type}_${vehicle_type}`,
                                                    name: this.vehicleTypeNames[
                                                        parseInt(vehicle_type)
                                                    ],
                                                    y: vehicle_types[
                                                        vehicle_type
                                                    ],
                                                    color: this
                                                        .vehicleTypeColors[
                                                        parseInt(vehicle_type)
                                                    ],
                                                })),
                                            } as DrilldownOptions;
                                            buildingVehicleDrilldowns.push(
                                                drilldown
                                            );
                                        }
                                        return {
                                            name: this.buildingTypeNames[
                                                building_type
                                            ],
                                            y: buildings.length,
                                            color: this.buildingTypeColors[
                                                building_type
                                            ],
                                            drilldown:
                                                Object.keys(vehicle_types)
                                                    .length &&
                                                `${category}_${building_type}`,
                                        };
                                    }),
                                };
                            }
                        ),
                        ...buildingVehicleDrilldowns,
                    ],
                },
            } as unknown as Options);
        },
    },
});
</script>

<style scoped lang="sass">
.tip-btn
    cursor: pointer

    &:hover
        & + .alert
            display: block

    & + .alert
        display: none
        position: absolute
        z-index: 1

.sunburst-grid
    display: flex
    flex-flow: row wrap
    justify-content: space-evenly
    align-items: center

    &::before,
    &::after
        display: none

    .sunburst-chart
        max-width: 500px

        .alert.alert-danger
            margin: 4rem
</style>
