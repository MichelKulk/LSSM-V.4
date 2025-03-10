const modules = {
    appstore: {
        save: 'Save',
        reset: 'Reset',
        noMapkit:
            'This module does not work with the map type "Mapkit" due to limitations of Mapkit!',
        dev: 'This module is currently still under development. Activating it can lead to incomplete and faulty functions!',
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You made changes in the AppStore that have not yet been saved. Reset them or save them to close the AppStore.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
    },
    settings: {
        name: 'Settings',
        save: 'Save',
        discard: 'Discard changes',
        reset: 'Reset',
        export: 'Export',
        import: 'Import',
        donate: 'donate voluntarily',
        appendableList: {
            unique: {
                title: 'double value',
                text: 'There must be no duplicate values in the **{title}** column. The value **{value}** already exists!',
                confirm: 'OK',
            },
        },
        resetWarning: {
            title: 'Reset the settings',
            text: 'Do you really want to reset settings to their default values? This cannot be undone!',
            close: 'Cancel',
            total: 'All settings',
            module: 'Only from this module',
        },
        resetWarningSetting: {
            title: 'Reset settings',
            text: 'Do you really want to reset this one setting <b>{setting}</b> of the module <b>{module}</b> to its default value?',
            close: 'Cancel',
            reset: 'Reset',
        },
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You have made changes in the settings that are not yet saved. Reset them, discard them or save them to close the settings.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
        locationSelect: {
            location: 'Select position',
            zoom: 'Select position and zoom',
            sync: 'use current position',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    vehicles: {
        0: {
            caption: 'Water Ladder',
            color: '#cc0000',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 9,
            possibleBuildings: [0, 18],
            special: 'A standard pump used for fighting fires.',
        },
        1: {
            caption: 'Light 4X4 Pump (L4P)',
            color: '#bb0000',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 5,
            possibleBuildings: [0, 18],
            special: 'A smaller pump used in rural areas, will act as a pump.',
        },
        2: {
            caption: 'Aerial Appliance',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special:
                'Required once you have built 3 fire stations. An Aerial Asset, very useful for fighting fires in high rises and rescuing people.',
        },
        3: {
            caption: 'Fire Officer',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18, 22],
            special:
                'Required once you have built 6 fire stations. A small car used for transporting Station Managers+ to calls, not uncommon to see 6-8 of these at Major Incidents.',
        },
        4: {
            caption: 'Rescue Support Unit (RSU)',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 5,
            possibleBuildings: [0, 18],
            special:
                'Required once you have built 4 fire stations. A big lorry with specialist rescue equipment, useful for Road Traffic Collisions.',
        },
        5: {
            caption: 'Ambulance',
            color: '#9c871c',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 2, 20, 21, 25],
            special:
                'A standard ambulance for tackling your medical emergencys.',
        },
        6: {
            caption: 'Water Carrier',
            color: '#aa0000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special:
                'Required once you have built 7 fire stations. Used for conveying water to a fire, useful for rural fires.',
        },
        7: {
            caption: 'HazMat Unit',
            color: '#990000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 6,
            possibleBuildings: [0, 18],
            schooling: {
                'Fire Station': {
                    HazMat: {
                        all: true,
                    },
                },
            },
            special:
                'Required once you have built 11 fire stations. A HazMat unit which can be used for a range of hazardous calls. ',
        },
        8: {
            caption: 'Incident response vehicle',
            color: '#188b35',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19, 26],
            special: 'A standard patrol car for tackling your police calls.',
        },
        9: {
            caption: 'HEMS',
            color: '#e68319',
            coins: 30,
            credits: 300_000,
            minPersonnel: 3,
            maxPersonnel: 5,
            possibleBuildings: [5],
            schooling: {
                Rescue: {
                    'Critical care': {
                        all: true,
                    },
                },
            },
            special: 'An Air Ambulance for the most serious cases.',
        },
        10: {
            caption: 'Rapid Response Vehicle',
            color: '#b89d14',
            coins: 20,
            credits: 4000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [0, 2, 5, 20, 21, 22, 25],
            special:
                'A fast and angile ambulance car, very useful when a ambulance has a long response time.',
        },
        11: {
            caption: 'Police Helicopter',
            color: '#0a7c16',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [13],
            schooling: {
                Police: {
                    'Police aviation': {
                        all: true,
                    },
                },
            },
            special:
                'A Police Helicopter, useful for pursuits and firearms attacks.',
        },
        12: {
            caption: 'Dog Support Unit',
            color: '#1f7915',
            coins: 25,
            credits: 7000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19, 22, 26],
            schooling: {
                Police: {
                    'Dog handling': {
                        all: true,
                    },
                },
            },
            special:
                'Required once you have built 6 police stations. Acts as a Dog Support Unit (DSU) and Incident Response Vehicle. A dog for tracking and chasing criminals.',
        },
        13: {
            caption: 'Armed Response Vehicle',
            color: '#438a17',
            coins: 23,
            credits: 7000,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [6, 19, 26],
            schooling: {
                Police: {
                    'Firearms training': {
                        all: true,
                    },
                },
            },
            special:
                'Required once you have built 8 police stations. Acts as a Armed Response Vehicle and Incident Response Vehicle. Firearms unit for the worst calls.',
        },
        14: {
            caption: 'BASU',
            color: '#ca1616',
            credits: 11_680,
            coins: 25,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special:
                'Required from 5 fire stations. Carrys air tanks to a call.',
        },
        15: {
            caption: 'ICCU',
            color: '#791515',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 6,
            possibleBuildings: [0, 18],
            schooling: {
                'Fire Station': {
                    'Mobile command': {
                        all: true,
                    },
                },
            },
            special:
                'Acts as a Incident Command and Control Unit and a Fire Officer. Required once you have built 13 fire stations. A command post for Major Incidents.',
        },
        16: {
            caption: 'Rescue Pump',
            color: '#dc1818',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 9,
            possibleBuildings: [0, 18],
            special:
                'To purchase with credits it requires the rank: Captain or Superintendent, <br>Lower ranked members can purchase the vehicle for 25 Coins. A Pump with extraction tools. Perfect for your Road Traffic Collisions.',
        },
        17: {
            caption: 'CARP',
            color: '#dc1818',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            possibleBuildings: [0, 18],
            special:
                'To purchase with credits it requires the rank: Captain or Superintendent, <br>Lower ranked members can purchase the vehicle for 25 Coins. A Pump with an Aerial Asset on top, perfect for high rise fires and rescuing people form tall buildings.',
        },
        18: {
            caption: 'Co-Responder Vehicle',
            color: '#bb2222',
            coins: 25,
            credits: 4000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [0, 18],
            schooling: {
                'Fire Station': {
                    'Co-Responder Training': {
                        all: true,
                    },
                },
            },
            special:
                'A Rapid Response Vehicle operated by the fire service where there is little to no ambulance coverage.',
        },
        19: {
            caption: 'Joint Response Unit',
            color: '#48832e',
            coins: 30,
            credits: 6000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [2, 6, 19, 20, 25, 26],
            special:
                'Acts as a Rapid Response Vehicle and Incident Response Vehicle. Perfect for calls that need police and alot of ambulances.',
        },
        20: {
            caption: 'Operational Team Leader',
            color: '#997122',
            coins: 25,
            credits: 20_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [2, 20, 21, 22, 25],
            special:
                'Required from 6 ambulance stations. A medical command unit, usefull for co-ordinating scenes.',
        },
        21: {
            caption: 'General Practitioner',
            color: '#99631f',
            coins: 20,
            credits: 4000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [21, 22],
            schooling: {
                Rescue: {
                    'Critical care': {
                        all: true,
                    },
                },
            },
            special:
                'Can only be placed at the Home Response Location and Clinic. A General Practitioner that can respond as a on call doctor and a Rapid Response Vehicle.',
        },
        22: {
            caption: 'Community First Responder',
            color: '#996719',
            coins: 12,
            credits: 2500,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [22],
            special:
                'Can only be placed at the Home Response Location. A Ambulance Rapid Response Vehicle but staffed with volunteers',
        },
        23: {
            caption: 'Crew Carrier',
            color: '#662222',
            coins: 10,
            credits: 8000,
            minPersonnel: 1,
            maxPersonnel: 12,
            possibleBuildings: [0, 2, 18, 20, 25],
            special: 'Transporting many staff to a scene.',
        },
        24: {
            caption: 'Traffic Car',
            color: '#3a5522',
            coins: 35,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19, 26],
            schooling: {
                Police: {
                    'Roads Policing Officer Training': {
                        all: true,
                    },
                },
            },
            special:
                'Acts as a Traffic Car and Incident Response Vehicle. A pursuit vehicle for high speed chases as well as RTCs.',
        },
        25: {
            caption: 'Armed Traffic Car',
            color: '#577529',
            coins: 35,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19, 26],
            schooling: {
                Police: {
                    'Firearms training': {
                        all: true,
                    },
                    'Roads Policing Officer Training': {
                        all: true,
                    },
                },
            },
            special:
                'Requires both, Firearms training and Roads Policing Officer Training. Works as a Traffic Car, Armed Response Vehicle and an Incident Response Vehicle. For highspeed chases and firearms incidents. ',
        },
        26: {
            caption: 'Heavy 4x4 Tanker',
            color: '#aa0000',
            coins: 25,
            credits: 25_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special:
                'Unlocked at Fire Apparatus Operator or Sergeant Rank. Works as a Water Carrier and Water Ladder. Used in rural areas to save money.',
        },
        27: {
            caption: 'PRV',
            color: '#99631f',
            coins: 20,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [25],
            schooling: {
                Rescue: {
                    'HART Training': {
                        all: true,
                    },
                },
            },
            special:
                'Acts as a Rapid Response Vehicle and a Primary Response Vehicle. Responds to the most serious of calls, where lives are in serious danger.',
        },
        28: {
            caption: 'SRV',
            color: '#99631f',
            coins: 20,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [25],
            schooling: {
                Rescue: {
                    'HART Training': {
                        all: true,
                    },
                },
            },
            special:
                'Acts as a Rapid Response Vehicle and a Secondary Response Vehicle. Responds to the most serious of calls, where lives are in serious danger.',
        },
        29: {
            caption: 'Welfare Vehicle',
            color: '#99631f',
            coins: 25,
            credits: 15_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 18, 25],
            special:
                'Acts as a Rapid Response Vehicle and a Welfare Unit. Responds to the most serious of calls, Used for Major Fires.',
        },
        30: {
            caption: 'ATV Carrier',
            color: '#99631f',
            coins: 20,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [25],
            schooling: {
                Rescue: {
                    'HART Training': {
                        all: true,
                    },
                },
            },
            special:
                'Acts as a Rapid Response Vehicle and a ATV Carrier. Responds to the most serious of calls, where lives are in serious danger in ruarl areas.',
        },
        31: {
            caption: 'Ambulance Control Unit',
            color: '#99631f',
            coins: 25,
            credits: 50_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [2, 20, 21, 25],
            schooling: {
                Rescue: {
                    'Tactical Command Course': {
                        all: true,
                    },
                },
            },
            special:
                'Command Post run by the ambulance service for the most serious of calls.',
        },
        32: {
            caption: 'CBRN Vehicle',
            color: '#99631f',
            coins: 25,
            credits: 20_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [2, 20, 21, 25],
            schooling: {
                Rescue: {
                    'SORT Training': {
                        all: true,
                    },
                },
            },
            special: 'A HazMat run by the ambulance service.',
        },
        33: {
            caption: 'Mass Casualty Equipment',
            color: '#99631f',
            coins: 15,
            credits: 15_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [2, 20, 25],
            schooling: {
                Rescue: {
                    'SORT Training': {
                        all: true,
                    },
                },
            },
            special:
                'You can buy 1 Mass Casualty Equipment for every 20 ambulance stations (respectively 15 with premium account). It is required for missions that can spawn with over 30 patients. Requires Mass Casualty Extension.',
        },
        34: {
            caption: 'Ambulance Officer',
            color: '#99631f',
            coins: 15,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [2, 20, 22, 25],
            schooling: {
                Rescue: {
                    'Ambulance Officer': {
                        all: true,
                    },
                },
            },
            special:
                'Acts as a Ambulance Officer and A Rapid Response Vehicle. Required once you have built 15 Rescue stations. It is required for missions that can spawn with over 20 patients to help command the scene. Requires Mass Casualty Extension.',
        },
        35: {
            caption: 'BFU',
            color: '#aa0000',
            coins: 10,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 18],
            special:
                'Bulk Foam Unit, Fufills the foam unit requirement on missions. Used on hazardous fires and electrical fires. Requires Foam Extension.',
        },
        36: {
            caption: 'F/WrC',
            color: '#aa0000',
            coins: 15,
            credits: 45_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 18],
            special:
                'Acts as a Bulk Foam Unit and a Water Carrier. Used on hazardous fires and electrical fires. Requires Foam Extension.',
        },
        37: {
            caption: 'WrL CAFS',
            color: '#aa0000',
            coins: 10,
            credits: 17_300,
            minPersonnel: 2,
            maxPersonnel: 9,
            possibleBuildings: [0, 18],
            special:
                'Acts as a Bulk Foam Unit and a Water Ladder (Pump). Used On any fire but also has the capability to use foam to extinguish a fire. Requires Foam Extension.',
        },
        38: {
            caption: 'RP CAFS',
            color: '#aa0000',
            coins: 10,
            credits: 25_000,
            minPersonnel: 2,
            maxPersonnel: 9,
            possibleBuildings: [0, 18],
            special:
                'Acts as a Bulk Foam Unit, Rescue Support Vehicle and a Pump. Used on any fire, foam capabilty as well as being useful at RTCs. Requires Foam Extension.',
        },
        39: {
            caption: 'OSU',
            color: '#aa0000',
            coins: 15,
            credits: 30_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            schooling: {
                'Fire Station': {
                    HazMat: {
                        all: true,
                    },
                },
            },
            possibleBuildings: [0, 18],
            special:
                'Requires the rank Staff Captain or Chief Superintendent. Acts as a Breathing Appartus Support Unit, HazMat Unit and a Welfare Unit. This unit will supply HazMat Resources, additional air tanks and a welfare location.',
        },
        40: {
            caption: 'PM',
            color: '#aa0000',
            coins: 10,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 18],
            special:
                'Carries Every Pod, which are different types of vehicles on the back of a lorry. Requires Swap Body Parking Space.',
        },
        41: {
            caption: 'Water Pod',
            color: '#aa0000',
            coins: 8,
            credits: 17_300,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
            special:
                'Acts as a Water Carrier. Requires Swap Body Parking Space.',
        },
        42: {
            caption: 'Bulk Foam Pod',
            color: '#aa0000',
            coins: 8,
            credits: 17_300,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
            special:
                'Acts as a Bulk Foam Unit. Used on hazardous fires and electrical fires. Requires Swap Body Parking Space.',
        },
        43: {
            caption: 'Rescue Pod',
            color: '#aa0000',
            coins: 8,
            credits: 12_180,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
            special:
                'Acts as a Rescue Support Unit. Requires Swap Body Parking Space.',
        },
        44: {
            caption: 'Command Pod',
            color: '#aa0000',
            coins: 8,
            credits: 25_500,
            minPersonnel: 0,
            maxPersonnel: 0,
            schooling: {
                'Fire Station': {
                    'Mobile Command': {
                        all: true,
                    },
                },
            },
            special:
                'Requires special education for personnel on Prime Mover (Mobile command). Acts as a Incident Command and Control Unit and a Fire Officer. Requires Swap Body Parking Space.',
            possibleBuildings: [0, 18],
        },
        45: {
            caption: 'Welfare Pod',
            color: '#aa0000',
            coins: 8,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
            special:
                'Acts as a Welfare Unit. Requires Swap Body Parking Space.',
        },
        46: {
            caption: 'BASU Pod',
            color: '#aa0000',
            coins: 8,
            credits: 11_680,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
            special:
                'Acts as a Breathing Appartus Support Unit. Requires Swap Body Parking Space.',
        },
        47: {
            caption: 'Misting Pod',
            color: '#aa0000',
            coins: 8,
            credits: 5000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
            special:
                'Acts as a Light 4x4 Pump Unit. Requires Swap Body Parking Space.',
        },
        48: {
            caption: 'Hazardous Materials Pod',
            color: '#aa0000',
            coins: 8,
            credits: 19_200,
            minPersonnel: 0,
            maxPersonnel: 0,
            schooling: {
                'Fire Station': {
                    HazMat: {
                        all: true,
                    },
                },
            },
            special:
                'Requires special education for personnel on Prime Mover (HazMat). Acts as a HazMat Unit. Requires Swap Body Parking Space.',
            possibleBuildings: [0, 18],
        },
        49: {
            caption: 'OSU Pod',
            color: '#aa0000',
            coins: 8,
            credits: 30_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            schooling: {
                'Fire Station': {
                    HazMat: {
                        all: true,
                    },
                },
            },
            special:
                'Requires special education for personnel in Prime Mover (HazMat). Acts as a Hazmat Unit, Welfare Unit and a Breathing Apparatus Support Unit. Requires Swap Body Parking Space.',
            possibleBuildings: [0, 18],
        },
        50: {
            caption: 'HVP',
            color: '#aa0000',
            coins: 8,
            credits: 20_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            schooling: {
                'Fire Station': {
                    'High Volume Pump Training': {
                        all: true,
                    },
                },
            },
            special:
                'Requires special education for personnel on Prime Mover (High Volume Pump Training). Acts as a Water Carrier. Requires Swap Body Parking Space.',
            possibleBuildings: [0, 18],
        },
        51: {
            caption: 'Police Support Unit Carrier',
            color: '#3a5522',
            coins: 10,
            credits: 8000,
            minPersonnel: 1,
            maxPersonnel: 9,
            possibleBuildings: [6, 19, 26],
            special:
                'Acts as a Incident Response Vehicle. This Police Support Unit, carrys a large amount of officers (usually L1/2 Public Order Trained) to scenes.',
        },
        52: {
            caption: 'Firearms Personnel Carrier',
            color: '#3a5522',
            coins: 15,
            credits: 8000,
            minPersonnel: 1,
            maxPersonnel: 9,
            possibleBuildings: [6, 19, 26],
            schooling: {
                Police: {
                    'Firearms training': {
                        all: true,
                    },
                },
            },
            special:
                'Acts as a Incident Response Vehicle and a Armed Response Vehicle. A Large Van carrying 9 Firearms Officers to scenes and reducing the amount of armed vehicles needed.',
        },
        53: {
            caption: 'Multiple Dog Carrier',
            color: '#3a5522',
            coins: 15,
            credits: 50_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [6, 19, 26],
            schooling: {
                Police: {
                    'Dog handling': {
                        all: true,
                    },
                },
            },
            special:
                'A dog carrier which transports mutiple dogs to a scene. Needs Police and Public Order Extension.',
        },
        54: {
            caption: 'Detention Van',
            color: '#3a5522',
            coins: 15,
            credits: 26_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19, 26],
            special:
                'This is a Large Cell Van used in order to transport multiple suspects to custody at once, 4 prisoners will be transported. Needs Police and Public Order Extension.',
        },
        55: {
            caption: 'Mounted Unit',
            color: '#3a5522',
            coins: 15,
            credits: 15_000,
            minPersonnel: 1,
            maxPersonnel: 8,
            possibleBuildings: [6, 19, 26],
            schooling: {
                Police: {
                    'Mounted Training': {
                        all: true,
                    },
                },
            },
            special:
                'This unit will transport horses from stables to riots in order to get a higher view of what is happening in the crowd. Needs Police and Public Order Extension.',
        },
        56: {
            caption: 'Multi-Role Armoured Vehicle',
            color: '#3a5522',
            coins: 23,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            possibleBuildings: [6, 19, 26],
            schooling: {
                Police: {
                    'Firearms training': {
                        all: true,
                    },
                },
            },
            special:
                'Acts as a Incident Response Vehicle and a Armed Response Vehicle. This is a armoured vehicle transporting 6 firearms officers.',
        },
        57: {
            caption: 'CRV',
            color: '#88ecc4',
            coins: 15,
            credits: 20_000,
            minPersonnel: 1,
            maxPersonnel: 5,
            possibleBuildings: [28],
            special:
                'Coastguard Response Vehicle. Responds to all calls on land.',
        },
        58: {
            caption: 'Coastguard Mud Rescue Unit',
            color: '#88ecc4',
            coins: 15,
            credits: 20_000,
            minPersonnel: 1,
            maxPersonnel: 5,
            possibleBuildings: [28],
            special: 'Rescues those stuck in mud.',
        },
        59: {
            caption: 'Coastguard Rope Rescue Unit',
            color: '#88ecc4',
            coins: 20,
            credits: 35_000,
            minPersonnel: 1,
            maxPersonnel: 5,
            possibleBuildings: [28],
            schooling: {
                'Water Rescue': {
                    'Rope Rescue Training': {
                        all: true,
                    },
                },
            },
        },
        60: {
            caption: 'Coastguard Commander',
            color: '#88ecc4',
            coins: 15,
            credits: 25_000,
            minPersonnel: 1,
            maxPersonnel: 5,
            possibleBuildings: [28],
            special: 'Takes Command of all coastguard related incidents.',
            schooling: {
                'Water Rescue': {
                    'Coastal Command Training': {
                        all: true,
                    },
                },
            },
        },
        61: {
            caption: 'Flood Rescue Unit (Trailer)',
            color: '#88ecc4',
            coins: 20,
            credits: 35_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [27, 28],
            special:
                'Needed towing vehicle (CRV, Coastguard Commander, Coastguard Mud Rescue Unit, Coastguard Rope Rescue Unit, Support Unit, 4x4 Vehicle). Helps to deal with flooding.',
            schooling: {
                'Water Rescue': {
                    'Flood First Responder Training': {
                        all: true,
                    },
                },
            },
        },
        62: {
            caption: 'Mud Decontamination Unit',
            color: '#88ecc4',
            coins: 20,
            credits: 35_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [28],
            special:
                'Needed towing vehicle (Coastguard Mud Rescue Unit). Decontaiminates Hazardous Mud',
            schooling: {
                'Water Rescue': {
                    'Mud Rescue Training': {
                        all: true,
                    },
                },
            },
        },
        63: {
            caption: 'Support Unit',
            color: '#88ecc4',
            coins: 15,
            credits: 25_000,
            minPersonnel: 1,
            maxPersonnel: 8,
            possibleBuildings: [28],
            special: 'Provides extra coastguard staff to a incident.',
        },
        64: {
            caption: 'Coastguard Rescue Helicopter',
            color: '#88ecc4',
            coins: 30,
            credits: 300_000,
            minPersonnel: 4,
            maxPersonnel: 4,
            possibleBuildings: [30],
            special:
                'Can Transport More Paitents to hospital then a Air Ambulance',
            schooling: {
                'Water Rescue': {
                    'Coastal Air Rescue Operarations Training': {
                        all: true,
                    },
                },
            },
        },
        65: {
            caption: 'Coastguard Rescue Helicopter (Large)',
            color: '#88ecc4',
            coins: 35,
            credits: 500_000,
            minPersonnel: 6,
            maxPersonnel: 6,
            possibleBuildings: [30],
            special:
                'Can Transport even more paitents to hospital then the Small One',
            schooling: {
                'Water Rescue': {
                    'Coastal Air Rescue Operarations Training': {
                        all: true,
                    },
                },
            },
        },
        66: {
            caption: '4x4 Vehicle',
            color: '#88ecc4',
            coins: 10,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [27],
            special: 'Transports Lifeguards by road.',
        },
        67: {
            caption: 'Inland Rescue Boat (Trailer)',
            color: '#88ecc4',
            coins: 15,
            credits: 25_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [27],
            special:
                'Needed towing vehicle (4x4 Vehicle). Small Boat run by lifeguards for inland water rescue needs',
            schooling: {
                'Water Rescue': {
                    'Lifeguard Training': {
                        all: true,
                    },
                },
            },
        },
        68: {
            caption: 'ILB',
            color: '#88ecc4',
            coins: 15,
            credits: 25_000,
            minPersonnel: 3,
            maxPersonnel: 4,
            possibleBuildings: [27],
            special:
                'Inshore Lifeboat, Helps those not to far away form the coast line',
            schooling: {
                'Water Rescue': {
                    'Lifeboat Operations Training': {
                        all: true,
                    },
                },
            },
        },
        69: {
            caption: 'ALB',
            color: '#88ecc4',
            coins: 25,
            credits: 40_000,
            minPersonnel: 5,
            maxPersonnel: 7,
            possibleBuildings: [27],
            special:
                'All Weather Lifeboat, Helps everyone stuck in the sea in all weather.',
            schooling: {
                'Water Rescue': {
                    'Lifeboat Operations Training': {
                        all: true,
                    },
                },
            },
        },
        70: {
            caption: 'Rescue Watercraft (Trailer)',
            color: '#88ecc4',
            coins: 10,
            credits: 10_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [27],
            special:
                'Needed towing vehicle (4x4 Vehicle). Jetski helps those who are drowning at the beach',
            schooling: {
                'Water Rescue': {
                    'Jet Ski Handling': {
                        all: true,
                    },
                },
            },
        },
        71: {
            caption: 'Hovercraft (Trailer)',
            color: '#88ecc4',
            coins: 20,
            credits: 35_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [27],
            special:
                'Needed towing vehicle (Hovercraft Transporter), Requires 3 people with special education in towing vehicle (Hovercraft Commander Training). Another type of boat for incidents closer to the shore line.',
        },
        72: {
            caption: 'Hovercraft Transporter',
            color: '#88ecc4',
            coins: 10,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [27],
            special: 'Transports Hovercraft trailer to incidents.',
            schooling: {
                'Water Rescue': {
                    'Hovercraft Commander Training': {
                        all: true,
                    },
                },
            },
        },
        73: {
            caption: 'Light 4x4',
            color: '#88ecc4',
            coins: 10,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [0, 18],
            special: 'Tows the Boat Trailer for the fire service',
        },
        74: {
            caption: 'Boat Trailer',
            color: '#88ecc4',
            coins: 15,
            credits: 25_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
            special: 'Needed towing vehicle (Light 4x4) Fire Service Boat.',
            schooling: {
                'Water Rescue': {
                    'Lifeguard Training': {
                        all: true,
                    },
                },
            },
        },
    },
    buildingCategories: {
        'Fire Department': {
            buildings: [0, 1, 18],
            color: '#ff2d2d',
        },
        'Ambulance Stations': {
            buildings: [2, 3, 5, 20, 21, 25],
            color: '#ffa500',
        },
        'Police Stations': {
            buildings: [6, 8, 13, 19, 26],
            color: '#00ac00',
        },
        'Water Rescue': {
            buildings: [27, 28, 29, 30],
            color: '#88ecc4',
        },
        'Other': {
            buildings: [7, 4, 14, 22, 23, 24],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Fire Fighting Vehicles': {
            vehicles: {
                'Pumps': [0, 1, 16, 26, 17],
                'Special Vehicles': [4, 7, 14, 18, 6, 2, 39],
                'Command Vehicles': [15, 3],
                'Pods and Prime Movers': [
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                ],
                'Foam Vehicles': [35, 36, 37, 38],
                'Water Rescue': [73, 74],
            },
            color: '#ff2d2d',
        },
        'Ambulance Vehicles': {
            vehicles: {
                'Ambulances': [5],
                'HEMS': [9],
                'Rapid Response Vehicles': [10, 19, 20, 21, 22],
                'HART Units': [23, 27, 28, 29, 30, 31, 32, 33, 34],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Police Car': [8],
                'ARV': [13, 56],
                'Police Helicopter': [11],
                'DSU': [12],
                'Traffic Cars': [24, 25],
                'Public Order': [51, 52, 53, 54, 55],
            },
            color: '#00ac00',
        },
        'Search & Rescue': {
            vehicles: {
                'Coastguard': [57, 58, 59, 60, 62, 63],
                'Flood': [61],
                'Coastguard Helicopter': [64, 65],
                'Lifeguard': [66, 67, 68, 69, 70, 71, 72],
            },
            color: '#88ecc4',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    schoolings: {
        'Fire Station': [
            {
                caption: 'HazMat',
                duration: '3 Days',
                staffList: 'HazMat Unit',
                key: 'gw_gefahrgut',
            },
            {
                caption: 'Mobile command',
                duration: '5 Days',
                staffList: 'Level 1 Incident Commander Training',
                key: 'elw2',
            },
            {
                caption: 'ARFF-Training',
                duration: '3 Days',
                key: 'arff',
            },
            {
                caption: 'Lifeguard Training',
                duration: '3 Days',
                key: 'gw_wasserrettung',
            },
            {
                caption: 'Co-Responder Training',
                duration: '3 Days',
                staffList: 'Co-Responder',
                key: 'coresponder',
            },
            {
                caption: 'High Volume Pump Training',
                duration: '3 Days',
                staffList: 'High Volume Pump Training',
                key: 'pump',
            },
        ],
        'Police': [
            {
                caption: 'Police aviation',
                duration: '7 Days',
                staffList: 'Police aviation',
                key: 'polizeihubschrauber',
            },
            {
                caption: 'Firearms training',
                duration: '5 Days',
                staffList: 'Firearms training',
                key: 'swat',
            },
            {
                caption: 'Dog handling',
                duration: '5 Days',
                staffList: 'Dog handling',
                key: 'k9',
            },
            {
                caption: 'Roads Policing Officer Training',
                duration: '3 Days',
                staffList: 'Roads Policing Officer',
                key: 'traffic_police',
            },
            {
                caption: 'Level 1 Public Order Training',
                duration: '5 Days',
                staffList: 'Level 1 Public Order Officer',
                key: 'level_1_public_order',
            },
            {
                caption: 'Level 2 Public Order Training',
                duration: '5 Days',
                staffList: 'Level 2 Public Order Officer',
                key: 'level_2_public_order',
            },
            {
                caption: 'Police Medic Training',
                duration: '4 Days',
                staffList: 'Police Medic',
                key: 'police_medic',
            },
            {
                caption: 'Police Sergeant Training',
                duration: '4 Days',
                staffList: 'Police Sergeant',
                key: 'police_sergeant',
            },
            {
                caption: 'Police Inspector Training',
                duration: '4 Days',
                staffList: 'Police Inspector',
                key: 'police_inspector',
            },
            {
                caption: 'Mounted Training',
                duration: '4 Days',
                staffList: 'Mounted Officers',
                key: 'police_horse',
            },
        ],
        'Rescue': [
            {
                caption: 'Critical care',
                duration: '5 Days',
                staffList: 'Critical care',
                key: 'critical_care',
            },
            {
                caption: 'HART Training',
                duration: '5 Days',
                staffList: 'HART Training',
                key: 'hazard_response_ems',
            },
            {
                caption: 'Tactical Command Course',
                duration: '5 Days',
                staffList: 'Tactical Command Course',
                key: 'elw2_ems',
            },
            {
                caption: 'SORT Training',
                duration: '3 Days',
                staffList: 'SORT',
                key: 'special_operation_response',
            },
            {
                caption: 'Ambulance Officer',
                duration: '5 Days',
                staffList: 'Ambulance Officer',
                key: 'ems_mobile_command',
            },
        ],
        'Water Rescue': [
            {
                caption: 'Coastal Air Rescue Operations Training',
                duration: '5 Days',
                key: 'coastal_rescue_pilot',
            },
            {
                caption: 'Coastal Command Training',
                duration: '5 Days',
                key: 'coastal_command',
            },
            {
                caption: 'Mud Rescue Training',
                duration: '3 Days',
                key: 'coastal_mud_rescue',
            },
            {
                caption: 'Lifeboat Operations Training',
                duration: '5 Days',
                key: 'ocean_navigation',
            },
            {
                caption: 'Rope Rescue Training',
                duration: '3 Days',
                key: 'gw_hoehenrettung',
            },
            {
                caption: 'Flood First Responder Training',
                duration: '3 Days',
                key: 'flood_equipment',
            },
            {
                caption: 'Lifeguard Training',
                duration: '3 Days',
                key: 'gw_wasserrettung',
            },
            {
                caption: 'Jet Ski Handling',
                duration: '3 Days',
                key: 'jetski',
            },
            {
                caption: 'Hovercraft Commander Training',
                duration: '3 Days',
                key: 'hover_boat_elw',
            },
        ],
    },
    amount: 'Quantity',
    search: 'Search',
    mapSearch: 'Location search',
    alliance: 'Alliance',
    premiumNotice:
        'This feature extends a premium feature of the game and is therefore only available for players with a Missionchief game premium account!',
    credits: 'Credits',
    coins: 'Coins',
    close: 'Close',
    fullscreen: {
        expand: 'Activate full screen mode',
        compress: 'Disable full screen mode',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Cars | Car | Cars',
    building: 'Buildings',
    station: 'Stations | Station | Stations',
    distance: 'Distance | Distances',
    vehicleType: 'Vehicle type',
    noOptions: 'Sorry, no matching options.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    pois: [
        'Park',
        'Lake',
        'Hospital',
        'Forest',
        'Bus stop',
        'Tram stop',
        'Train station (regional traffic)',
        'Train station (regional traffic and long-distance travel)',
        'Goods station',
        'Supermarket (small)',
        'Supermarket (big)',
        'Petrol Station',
        'School',
        'Museum',
        'Mall',
        'Car workshop',
        'Highway exit',
        'Christmas market',
        'Storehouse',
        'Nightclub',
        'Stadium',
        'Farm',
        'Office Building',
        'Swimming bath',
        'Railroad Crossing',
        'Theater',
        'Fairground',
        'River',
        'Small Airport (Runway)',
        'Large Airport (Runway)',
        'Airport Terminal',
        'Bank',
        'Warehouse',
        'Bridge',
        'Fast Food Restaurant',
        'Cargo port',
        'Recycling Centre',
        'High Rise',
        'Cruise ship dock',
        'Marina',
        'Rail Crossing',
        'Tunnel',
        'Cold Storage Warehouse',
        'Power Plant',
        'Factory',
        'Scrap yard',
        'Subway station',
        'Small chemical storage tank',
        'Large chemical storage tank',
        'Hotel',
        'Bar',
        'Landfill site',
        'Parking Garage',
        'Silo',
        'Heathland',
        'Intersection with lights',
        'High Rise with Cladding',
        'Major Road Standby Point',
        'Nuclear power station',
        'Munition dump',
        'Restaurant',
        'Market place',
        'Dirt Race Track',
        'Sheltered housing scheme',
        'University',
        'Golf course',
        'Moorland',
        'Theme Park',
        'Abandoned Building',
        'Festival',
        'Allotment',
        'Container Holding Area',
        'Small Fuel Storage Tank',
        'Large Fuel Storage Tank',
        'Fuel Storage Depot',
        'Multi-Storey Car Park',
        'Low Bridge',
        'Care Home',
        'Prison',
        'Fire Station',
        'Library',
        'Estuary',
        'Harbour',
        'Beach',
        'Cliff',
        'Radio Site',
    ],
    only_alliance_missions: [57, 74, 89],
    transfer_missions: [77],
    ranks: {
        missionchief: {
            0: 'Probie',
            200: 'Firefighter',
            10_000: 'Senior Firefighter',
            100_000: 'Fire Apparatus Operator',
            1_000_000: 'Lieutenant',
            5_000_000: 'Captain',
            20_000_000: 'Staff Captain',
            50_000_000: 'Battalion Chief',
            1_000_000_000: 'Division Chief',
            2_000_000_000: 'Deputy Chief',
            5_000_000_000: 'Fire Chief',
        },
        policechief: {
            0: 'Police Community Support Officer',
            200: 'Police Constable',
            10_000: 'Sergeant',
            100_000: 'Inspector',
            1_000_000: 'Chief Inspector',
            5_000_000: 'Superintendent',
            20_000_000: 'Chief Superintendent',
            50_000_000: 'Commander',
            1_000_000_000: 'Assistant Chief Constable',
            2_000_000_000: 'Deputy Chief Constable',
            5_000_000_000: 'Chief Constable',
        },
    },
};
