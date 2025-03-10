<template>
    <div>
        <h1>{{ lightbox.$sm('title') }}</h1>
        <enhanced-table
            :head="head"
            :table-attrs="{ class: 'table table-striped' }"
            :search="search"
            @search="s => (search = s)"
            :sort="sort"
            :sort-dir="sortDir"
            @sort="setSort"
        >
            <template v-slot:head>
                <div class="form-group">
                    <label>{{ lightbox.$sm('select_dispatchcenter') }}</label>
                    <settings-select
                        name="dispatchcenter-choose"
                        :placeholder="lightbox.$sm('select_dispatchcenter')"
                        v-model="selectedDispatchCenter"
                        :options="[
                            {
                                value: '0',
                                label: lightbox.$sm('no_dispatchcenter'),
                            },
                            ...dispatchCenters.map(({ id, caption }) => ({
                                label: caption,
                                value: id.toString(),
                            })),
                        ]"
                    ></settings-select>
                </div>
                <span>{{
                    lightbox.$smc('amount', missionsFiltered.length)
                }}</span>
            </template>
            <tr
                v-for="mission in missionsSorted"
                :key="mission.id"
                :class="{ success: !mission.unfullfilled_prerequisites.length }"
                :disabled="mission.date_not_fitting"
            >
                <td
                    v-for="(col, index) in cols"
                    :key="`${mission.id}_${index}_${col}`"
                >
                    <img
                        v-if="col === 'id'"
                        :src="mission.icons[2]"
                        alt=""
                        loading="lazy"
                    />
                    <template v-else-if="col === 'name'">
                        {{ mission.name }}
                        <small class="pull-right">
                            [{{ mission.id.toLocaleString() }}]
                        </small>
                    </template>
                    <template v-else-if="col === 'generated_by'">
                        {{ mission.generated_by }}
                        <template v-if="mission.main_building_extensions">
                            {{ lightbox.$sm('main_building_extensions.text') }}:
                            <ul>
                                <li
                                    v-for="extension in mission.main_building_extensions"
                                    :key="`${mission.id}_${index}_generatedby_extensions_${extension}`"
                                >
                                    {{
                                        $t(
                                            `buildings.${mission.main_building}.extensions.${extension}.caption`
                                        )
                                    }}
                                </li>
                            </ul>
                        </template>
                    </template>
                    <template v-else-if="col === 'average_credits'">
                        ~
                        {{
                            mission.average_credits
                                ? mission.average_credits.toLocaleString()
                                : '–'
                        }}
                    </template>
                    <ul v-else-if="col === 'place'">
                        <li
                            v-for="(place, pindex) in mission.place_array"
                            :key="`${mission.id}_${index}_${col}_places_${pindex}_${place}`"
                        >
                            {{ place }}
                        </li>
                    </ul>
                    <ul v-else-if="col === 'prerequisites'">
                        <li
                            v-for="(amount, req) in mission.prerequisites"
                            :key="`${mission.id}_${index}_${col}_prerequisites_${req}`"
                        >
                            {{ amount.toLocaleString() }}
                            {{
                                lightbox.$smc(
                                    `prerequisites_short.${req}`,
                                    amount
                                )
                            }}
                        </li>
                    </ul>
                    <template v-else-if="col === 'duration'">
                        {{ mission.additional.duration_text }}
                    </template>
                    <template v-else-if="col === 'missing'">
                        <b v-if="mission.date_not_fitting">
                            {{
                                lightbox.$sm('missing.date', {
                                    date_start: moment(
                                        mission.additional.date_start
                                    ).format('llll'),
                                    date_end: moment(
                                        mission.additional.date_end
                                    ).format('llll'),
                                })
                            }}
                        </b>
                        <table
                            v-if="mission.unfullfilled_prerequisites.length"
                            class="table table-striped"
                        >
                            <thead>
                                <tr>
                                    <th>{{ lightbox.$sm('missing.req') }}</th>
                                    <th>{{ lightbox.$sm('missing.have') }}</th>
                                    <th>{{ lightbox.$sm('missing.need') }}</th>
                                    <th>{{ lightbox.$sm('missing.diff') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="[
                                        req,
                                        { have, need, diff },
                                    ] in mission.unfullfilled_prerequisites"
                                    :key="`${mission.id}_${index}_${col}_unfullfilled_${req}`"
                                >
                                    <td>
                                        <template
                                            v-if="
                                                req.match(
                                                    /^\d+\.\d+(,\d+\.\d+)*$/
                                                )
                                            "
                                        >
                                            <b>
                                                {{ mission.generated_by }}
                                            </b>
                                            {{
                                                lightbox.$sm(
                                                    'main_building_extensions.text'
                                                )
                                            }}:
                                            <ul>
                                                <li
                                                    v-for="extension in mission.main_building_extensions"
                                                    :key="`${mission.id}_${index}_generatedby_extensions_${extension}`"
                                                >
                                                    {{
                                                        $t(
                                                            `buildings.${mission.main_building}.extensions.${extension}.caption`
                                                        )
                                                    }}
                                                </li>
                                            </ul>
                                        </template>
                                        <b v-else>
                                            {{
                                                lightbox.$smc(
                                                    `prerequisites_short.${req}`,
                                                    need
                                                )
                                            }}
                                        </b>
                                    </td>
                                    <td>{{ have.toLocaleString() }}</td>
                                    <td>{{ need.toLocaleString() }}</td>
                                    <td>
                                        <b>{{ diff.toLocaleString() }}</b>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </template>
                    <pre v-else>{{ col }}{{ '\n' }}{{ mission }}</pre>
                </td>
                <td>
                    <button
                        lightbox-open
                        :href="`/einsaetze/${mission.id}`"
                        class="btn btn-default"
                    >
                        Details
                    </button>
                </td>
            </tr>
        </enhanced-table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { defineAPIStore } from '@stores/api';
import { mapState } from 'pinia';
import moment from 'moment';

import type { Building } from 'typings/Building';
import type { Mission } from 'typings/Mission';
import type { RedesignComponent } from 'typings/modules/Redesign';

type MissionEntry = Omit<Mission, 'prerequisites'> & {
    prerequisites: Record<string, number>;
    main_building: number;
    main_building_extensions: Mission['prerequisites']['main_building_extensions'];
    unfullfilled_prerequisites: [
        string,
        Record<'diff' | 'have' | 'need', number>
    ][];
    date_not_fitting: boolean;
};

type cols =
    | 'average_credits'
    | 'duration'
    | 'generated_by'
    | 'id'
    | 'missing'
    | 'name'
    | 'place'
    | 'prerequisites';

type sort = Exclude<cols, 'missing' | 'prerequisites'>;

type Component = RedesignComponent<
    'window',
    'einsaetze',
    {
        moment: typeof moment;
        cols: cols[];
        selectedDispatchCenter: string;
        search: string;
        sort: sort;
        sortDir: 'asc' | 'desc';
    },
    {
        setSort(type: sort): void;
    },
    {
        buildings: Record<string, Building[]>;
        dispatchCenters: Building[];
        prerequisites: Record<string, Record<string, number>>;
        missions: MissionEntry[];
        missionsFiltered: MissionEntry[];
        missionsSorted: MissionEntry[];
        head: Record<string, { title: string; noSort?: boolean }>;
    }
>;

export default Vue.extend<
    Component['Data'],
    Component['Methods'],
    Component['Computed'],
    Component['Props']
>({
    name: 'lssmv4-redesign-einsaetze',
    components: {
        EnhancedTable: () =>
            import(
                /* webpackChunkName: "components/enhanced-table" */ '../../../components/enhanced-table.vue'
            ),
        SettingsSelect: () =>
            import(
                /* webpackChunkName: "components/settings/select" */ '../../../components/setting/select.vue'
            ),
    },
    data() {
        moment.locale(this.lightbox.rootStore.locale);

        return {
            moment,
            cols: [
                'id',
                'name',
                'place',
                'average_credits',
                'generated_by',
                'prerequisites',
                'duration',
                'missing',
            ],
            selectedDispatchCenter: '0',
            search: '',
            sort: 'id',
            sortDir: 'asc',
        };
    },
    methods: {
        setSort(type) {
            if (this.sort === type) {
                this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
            } else {
                this.sort = type;
                this.sortDir = 'asc';
            }
        },
    },
    computed: {
        ...mapState(defineAPIStore, { buildings: 'buildingsByType' }),
        dispatchCenters() {
            return this.lightbox.translationStore.dispatchCenterBuildings
                .flatMap(type => this.buildings[type])
                .filter(d => d?.generate_own_missions);
        },
        prerequisites() {
            const calcs = this.lightbox.$sm(
                'prerequisite_calculations'
            ) as unknown as Record<string, Record<number, number | string>>;
            const dispatches: Record<string, Record<string, number>> = {
                '0': {},
                ...Object.fromEntries(
                    this.dispatchCenters.map(({ id }) => [id.toString(), {}])
                ),
            };
            Object.values(this.buildings)
                .flat()
                .forEach(building => {
                    const addTo: string[] = [building.building_type.toString()];
                    Object.entries(calcs).forEach(([req, stations]) =>
                        Object.values(stations).forEach(station => {
                            if (typeof station === 'number') {
                                return (
                                    building.building_type === station &&
                                    addTo.push(req)
                                );
                            }
                            const [type, extension] = station.split('.');
                            if (building.building_type !== parseInt(type))
                                return;
                            if (extension === 'level') {
                                return addTo.push(
                                    ...new Array(building.level + 1).fill(req)
                                );
                            }
                            if (
                                building.extensions[parseInt(extension)]
                                    ?.enabled
                            )
                                return addTo.push(req);
                        })
                    );

                    building.extensions.forEach(({ enabled }, index) => {
                        if (enabled)
                            addTo.push(`${building.building_type}.${index}`);
                    });

                    const dispatch =
                        building.leitstelle_building_id?.toString() ?? '-1';
                    const addToDispatch = dispatches.hasOwnProperty(dispatch);
                    addTo.forEach(req => {
                        if (!dispatches['0'].hasOwnProperty(req))
                            dispatches['0'][req] = 0;
                        dispatches['0'][req]++;
                        if (addToDispatch) {
                            if (!dispatches[dispatch].hasOwnProperty(req))
                                dispatches[dispatch][req] = 0;
                            dispatches[dispatch][req]++;
                        }
                    });
                });
            return dispatches;
        },
        missions() {
            return this.lightbox.apiStore.missionsArray.map(mission => {
                const prerequisites = Object.fromEntries(
                    Object.entries(mission.prerequisites ?? {}).filter(
                        ([req, amount]) =>
                            typeof amount === 'number' &&
                            ![
                                'main_building',
                                'main_building_extensions',
                            ].includes(req)
                    )
                ) as unknown as Record<string, number>;
                return {
                    ...mission,
                    prerequisites,
                    main_building_extensions:
                        mission.prerequisites.main_building_extensions,
                    main_building: mission.prerequisites.main_building,
                    unfullfilled_prerequisites: (
                        [
                            ...Object.entries(prerequisites),
                            ...(mission.prerequisites.main_building_extensions
                                ? [
                                      [
                                          Object.values(
                                              mission.prerequisites
                                                  .main_building_extensions ??
                                                  {}
                                          )
                                              .map(
                                                  extension =>
                                                      `${mission.prerequisites.main_building}.${extension}`
                                              )
                                              .join(','),
                                          1,
                                      ],
                                  ]
                                : []),
                        ] as [string, number][]
                    )
                        .map<
                            [string, Record<'diff' | 'have' | 'need', number>]
                        >(([req, amount]) => {
                            const have = req.match(/\d+\.\d+/u)
                                ? this.buildings[
                                      mission.prerequisites.main_building
                                  ]?.find(
                                      b =>
                                          (this.selectedDispatchCenter ===
                                              '0' ||
                                              b.leitstelle_building_id?.toString() ===
                                                  this
                                                      .selectedDispatchCenter) &&
                                          req
                                              .split(',')
                                              .every(
                                                  ex =>
                                                      b.extensions.find(
                                                          e =>
                                                              e.type_id ===
                                                              parseInt(
                                                                  ex.split(
                                                                      '.'
                                                                  )[1]
                                                              )
                                                      )?.enabled
                                              )
                                  )
                                    ? 1
                                    : 0
                                : this.prerequisites[
                                      this.selectedDispatchCenter
                                  ][req.replace(/^max_/u, '')] ?? 0;
                            return [
                                req,
                                {
                                    have,
                                    need: amount,
                                    diff: amount - have,
                                },
                            ];
                        })
                        .filter(([req, { diff }]) =>
                            req.startsWith('max_') ? diff < 0 : diff > 0
                        ),
                    date_not_fitting: !!(
                        mission.additional.date_start &&
                        mission.additional.date_end &&
                        (new Date() < new Date(mission.additional.date_start) ||
                            new Date() > new Date(mission.additional.date_end))
                    ),
                };
            });
        },
        missionsFiltered() {
            return this.search.trim().length
                ? this.missions.filter(
                      ({
                          name,
                          place_array,
                          average_credits,
                          generated_by,
                          additional: { duration_text },
                          prerequisites,
                      }) =>
                          [
                              name,
                              ...place_array,
                              average_credits?.toString() ?? '',
                              generated_by,
                              duration_text ?? '',
                              ...Object.entries(prerequisites).map(
                                  ([req, amount]) =>
                                      `${amount} ${this.lightbox.$sm(
                                          `prerequisites_long.${req}`
                                      )}`
                              ),
                          ].filter(attr =>
                              attr
                                  .toLowerCase()
                                  .match(this.search.trim().toLowerCase())
                          ).length
                  )
                : this.missions;
        },
        missionsSorted() {
            if (this.sort === 'id') {
                if (this.sortDir === 'asc') return this.missionsFiltered;
                return [...this.missionsFiltered].reverse();
            }
            const modifier = this.sortDir === 'desc' ? -1 : 1;
            return [...this.missionsFiltered].sort((a, b) => {
                const f =
                    (this.sort === 'duration'
                        ? a.additional.duration
                        : a[this.sort]) ?? '';
                const s =
                    (this.sort === 'duration'
                        ? b.additional.duration
                        : b[this.sort]) ?? '';
                return f < s ? -1 * modifier : f > s ? modifier : 0;
            });
        },
        head() {
            return Object.fromEntries(
                [...this.cols, 'details'].map(col => [
                    col,
                    {
                        title: this.lightbox.$sm(`columns.${col}`).toString(),
                        noSort: [
                            'missing',
                            'prerequisites',
                            'details',
                        ].includes(col),
                    },
                ])
            );
        },
    },
    props: {
        window: {
            type: Object,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        lightbox: {
            type: Object,
            required: true,
        },
        getSetting: {
            type: Function,
            required: true,
        },
        setSetting: {
            type: Function,
            required: true,
        },
    },
    watch: {
        window() {
            this.lightbox.finishLoading('einsaetze-updated');
        },
    },
    mounted() {
        this.lightbox.finishLoading('einsaetze-mounted');
    },
});
</script>

<style scoped lang="sass">
tr[disabled]
    opacity: .65
</style>
