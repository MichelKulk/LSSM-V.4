import type { InternalBuilding } from 'typings/Building';

type Extension = InternalBuilding['extensions'][0];

const multiplyExtension = (
    extension: Extension | ((index: number) => Extension),
    amount: number
): Extension[] =>
    typeof extension === 'function'
        ? new Array(amount).fill('0').map((_, index) => extension(index))
        : new Array(amount).fill(extension);

export default {
    0: {
        caption: 'Centre de secours',
        color: '#bb0000',
        coins: 30,
        credits: 100_000,
        extensions: [
            {
                caption: 'Service de Santé et de Secours Médical',
                credits: 100_000,
                coins: 20,
                duration: '7 jours',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [25, 26],
            },
            {
                caption: 'Unité nautique',
                credits: 100_000,
                coins: 20,
                duration: '7 jours',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [16, 17],
            },
            {
                caption: 'Extension de soutien à incendie',
                credits: 75_000,
                coins: 15,
                duration: '3 jours',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [35, 36, 37, 38],
            },
        ],
        levelcost: ['1. 10 000', '2. 50 000', '3-24. 100 000'],
        maxBuildings: '6 000',
        maxLevel: 24,
        special:
            'Le prix de vos postes augmente lorsque vous en possédez 25. Ainsi, le rythme de progression est constant une fois que vous possédez un grand flux de revenus à ces niveaux de jeu. La formule actuelle pour calculer le prix des postes est la suivante : <code>100 000+(200 000*LOG<sub>2</sub>(Number of existing fire stations − 22))</code>.',
        startPersonnel: 10,
        startVehicles: ['FPT', 'FPTL', 'FPTSR', 'CCRL', 'CCRM', 'CCRSR'],
        schoolingTypes: ['Centre de secours'],
        startParkingLots: 1,
        maxBuildingsFunction: (): number => 6000,
        icon: 'fire-flame-curved',
    },
    1: {
        caption: 'Centre de Formation Départemental',
        color: '#992222',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            index => ({
                caption: 'Plus de salles de cours',
                credits: 400_000,
                coins: 40,
                duration: '7 jours',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Aucune limite',
        maxLevel: 0,
        special:
            "Le chef des finances et les administrateurs peuvent améliorer le bâtiment grâce à la banque d'alliance.Les chefs de formation et les administrateurs peuvent lancer des formations.",
        startClassrooms: 1,
        icon: 'graduation-cap',
    },
    2: {
        caption: 'Poste Ambulancier',
        color: '#ffa500',
        coins: 35,
        credits: 200_000,
        extensions: [],
        levelcost: ['1. 10 000', '2. 50 000', '3-14. 100 000'],
        maxBuildings: 'Aucune limite',
        maxLevel: 14,
        special: '',
        startPersonnel: 3,
        startVehicles: ['ASSU'],
        schoolingTypes: ['Secours'],
        startParkingLots: 1,
        icon: 'house-medical',
    },
    3: {
        caption: 'École de médecine',
        color: '#ffa500',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            index => ({
                caption: 'Plus de salles de cours',
                credits: 400_000,
                coins: 40,
                duration: '7 jours',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Aucune limite',
        maxLevel: 0,
        special:
            "Le chef des finances et les administrateurs peuvent améliorer le bâtiment grâce à la banque d'alliance.Les chefs de formation et les administrateurs peuvent lancer des formations.",
        startClassrooms: 1,
        icon: 'graduation-cap',
    },
    4: {
        caption: 'Centre Hospitalier',
        color: '#bbe944',
        coins: 35,
        credits: 200_000,
        extensions: [
            {
                caption: 'Interne général',
                credits: 10_000,
                coins: 10,
                duration: '7 jours',
                cannotDisable: true,
            },
            {
                caption: 'Chirurgien général',
                credits: 10_000,
                coins: 10,
                duration: '7 jours',
                cannotDisable: true,
            },
            {
                caption: 'Gynécologie',
                credits: 70_000,
                coins: 15,
                duration: '7 jours',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Urologie',
                credits: 70_000,
                coins: 15,
                duration: '7 jours',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Traumatologie',
                credits: 70_000,
                coins: 15,
                duration: '7 jours',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Neurologie',
                credits: 70_000,
                coins: 15,
                duration: '7 jours',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Neurochirurgie',
                credits: 70_000,
                coins: 15,
                duration: '7 jours',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Cardiologie',
                credits: 70_000,
                coins: 15,
                duration: '7 jours',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Chirurgie cardiaque',
                credits: 70_000,
                coins: 15,
                duration: '7 jours',
                requiredExtensions: [1],
                cannotDisable: true,
            },
        ],
        levelcost: ['1-20. 19 000 crédits / 11 pièces'],
        maxBuildings: 'Aucune limite',
        maxLevel: 20,
        special:
            "Le chef des finances et les administrateurs peuvent construire et agrandir les hôpitaux grance à la banque de l'alliance",
        startBeds: 10,
        icon: 'hospital',
    },
    5: {
        caption: 'Base Hélicoptère du SAMU',
        color: '#e7ad2f',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: [],
        maxBuildings: 'Voir particularités',
        maxLevel: 0,
        special: 'Nombre de stations max : nombre de bâtiments divisé par 25 avec un minimum de 4 bâtiments.',
        startPersonnel: 0,
        startVehicles: [],
        schoolingTypes: ['Secours'],
        startParkingLots: 1,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
        icon: 'circle-h',
    },
    6: {
        caption: 'Poste de police',
        color: '#007700',
        coins: 35,
        credits: 100_000,
        extensions: [
            {
                caption: 'Cellule de prison',
                credits: 25_000,
                coins: 5,
                duration: '7 jours',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Plus de cellules',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 jours',
                    newCells: 1,
                    cannotDisable: true,
                    requiredExtensions: [0],
                },
                9
            ),
        ],
        levelcost: ['1. 10 000', '2. 50 000', '3-14. 100 000'],
        maxBuildings: '1 700 postes de police/gendarmerie',
        maxLevel: 14,
        startPersonnel: 2,
        startVehicles: ['Véhicule de patrouille'],
        schoolingTypes: ['Poste de police'],
        startParkingLots: 1,
        startCells: 0,
        maxBuildingsFunction: (): number => 1700,
        special: '',
        icon: 'building-shield',
    },
    7: {
        caption: 'Centre de Traitement des Appels',
        color: '#24c3ae',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: 'Un CTA tous les 25 batiments',
        maxLevel: 0,
        special: 'Le CTA est le centre administratif.',
        isDispatchCenter: true,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            Math.floor(buildingsAmountTotal / 25) + 1,
        icon: 'tower-broadcast',
    },
    8: {
        caption: 'École de Gendarmerie',
        color: '#225522',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            index => ({
                caption: 'Plus de salles de cours',
                credits: 400_000,
                coins: 40,
                duration: '7 jours',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Aucune limite',
        maxLevel: 0,
        special:
            "Le chef des finances et les administrateurs peuvent améliorer le bâtiment grâce à la banque d'alliance.Les chefs de formation et les administrateurs peuvent lancer des formations.",
        startClassrooms: 1,
        icon: 'graduation-cap',
    },
    11: {
        caption: 'Compagnie de CRS',
        color: '#225522',
        coins: 50,
        credits: 500_000,
        extensions: [
            {
                caption: 'Section des Moyens Spécialisés n°1',
                credits: 150_000,
                coins: 15,
                duration: '5 jours',
                isVehicleExtension: true,
                givesParkingLots: 6,
                parkingLotReservations: [[39], [39], [39], [43], [44], [44]],
                unlocksVehicleTypes: [43, 44],
            },
            {
                caption: 'Section des Moyens Spécialisés n°2',
                credits: 150_000,
                coins: 15,
                duration: '5 jours',
                isVehicleExtension: true,
                givesParkingLots: 6,
                parkingLotReservations: [[39], [39], [39], [43], [44], [44]],
                requiredExtensions: [0],
            },
            {
                caption: "Section d'Appui et de Manoeuvre n°2",
                credits: 50_000,
                coins: 10,
                duration: '3 jours',
                isVehicleExtension: true,
                givesParkingLots: 3,
                parkingLotReservations: [[39], [39], [39]],
                cannotDisable: true,
            },
            {
                caption: "Section de Protection et d'Intervention n°2",
                credits: 50_000,
                coins: 10,
                duration: '3 jours',
                isVehicleExtension: true,
                givesParkingLots: 3,
                parkingLotReservations: [[39], [39], [39]],
                requiredExtensions: [2],
                cannotDisable: true,
            },
            {
                caption: 'Surveillance de plage',
                credits: 100_000,
                coins: 15,
                duration: '5 jours',
                isVehicleExtension: true,
                givesParkingLots: 2,
                parkingLotReservations: [[46], [47]],
                unlocksVehicleTypes: [46, 47],
            },
        ],
        levelcost: [],
        maxBuildings: 'Aucune limite',
        maxLevel: 0,
        startPersonnel: 25,
        startVehicles: [],
        startParkingLots: 13,
        startParkingLotReservations: [
            [39],
            [39],
            [39],
            [39],
            [39],
            [39],
            [39],
            [39],
            [39],
            [40],
            [41],
            [42],
            [45],
        ],
        schoolingTypes: ['Poste de police'],
        special: '',
        icon: 'shield-halved',
    },
    13: {
        caption: 'Forces aériennes de la Gendarmerie nationale',
        color: '#148423',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: ['1. 1 000 000 crédits / 50 pièces'],
        maxBuildings: 'Voir particularités',
        maxLevel: 1,
        special:
            "Attention : Vous ne pouvez construire un maximum de 25 héliports de Gendarmerie. Il n'y a pas de différence si vous construisez un nouveau bâtiment ou une nouvelle extension. (Plus vous construisez de bâtiments et plus vous pourrez construire d'héliports).",
        startPersonnel: 3,
        startVehicles: [],
        schoolingTypes: ['Poste de police'],
        startParkingLots: 1,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
        icon: 'helicopter',
    },
    14: {
        caption: 'Centre de Regroupement des Moyens',
        color: '#c259b5',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: 1,
        maxLevel: 0,
        special:
            'Vous pouvez construire la zone intermédiaire gratuitement. Celle-ci agit comme une plateforme et vous permet de stationner et déployer temporairement vos unités. Elle disparaît après 24 heures. Veuillez sélectionner la ou les unités que vous souhaitez déployer ici.',
        isStagingArea: true,
        maxBuildingsFunction: (): number => 1,
        icon: 'warehouse',
    },
    16: {
        caption: 'Prison',
        color: '#00ff00',
        coins: -1,
        credits: 100_000,
        extensions: [
            {
                caption: 'Cellule de prison',
                credits: 25_000,
                coins: 5,
                duration: '7 jours',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Plus de cellules',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 jours',
                    newCells: 1,
                    cannotDisable: true,
                    requiredExtensions: [0],
                },
                9
            ),
            ...multiplyExtension(
                {
                    caption: 'Plus de cellules',
                    credits: 50_000,
                    coins: 5,
                    duration: '7 jours',
                    newCells: 1,
                    cannotDisable: true,
                    requiredExtensions: [0],
                },
                10
            ),
        ],
        levelcost: [],
        maxBuildings: 'Aucune limite',
        maxLevel: 0,
        special:
            "Ce bâtiment ne peut être construit que par le chef des finances ou des administateurs avec les crédits de la banque d'alliance. Les cellules sont disponibles pour tous les membres de l'alliance.",
        startCells: 1,
        icon: 'border-all',
    },
    18: {
        caption: 'Centre de Première Intervention',
        color: '#aa1111',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Service de Santé et de Secours Médical',
                credits: 100_000,
                coins: 20,
                duration: '7 jours',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [25, 26],
            },
            {
                caption: 'Unité nautique',
                credits: 100_000,
                coins: 20,
                duration: '7 jours',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [16, 17],
            },
            {
                caption: 'Extension de soutien à incendie',
                credits: 75_000,
                coins: 15,
                duration: '3 jours',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [35, 36, 37, 38],
            },
        ],
        levelcost: [
            '1. 10 000',
            '2. 50 000',
            '3-5. 100 000',
            "Ceci est une petite caserne. Si vous souhaitez construire des extensions ou augmenter le nombre d'emplacements de véhicules, vous devez l'améliorer pour en faire une caserne ordinaire. Ce processus prend 24 heures.",
        ],
        maxBuildings: '6 000 casernes de pompiers',
        maxLevel: 5,
        special:
            'Le prix de vos postes augmente lorsque vous en possédez 25. Ainsi, le rythme de progression est constant une fois que vous possédez un grand flux de revenus à ces niveaux de jeu. La formule actuelle pour calculer le prix des postes est la suivante : <code>(50 000+100 000*LOG<sub>2</sub>(Number of existing fire stations − 22))</code>.',
        startPersonnel: 10,
        startVehicles: ['FPT', 'FPTL', 'FPTSR', 'CCRL', 'CCRM', 'CCRSR'],
        schoolingTypes: ['Centre de secours'],
        startParkingLots: 1,
        maxBuildingsFunction: (): number => 6000,
        icon: 'fire-flame-curved',
    },
    19: {
        caption: 'Poste de police (petit)',
        color: '#116611',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Cellule de prison',
                credits: 25_000,
                coins: 5,
                duration: '7 jours',
                newCells: 1,
                cannotDisable: true,
            },
            {
                caption: 'Plus de cellules',
                credits: 25_000,
                coins: 5,
                duration: '7 jours',
                newCells: 1,
                cannotDisable: true,
                requiredExtensions: [0],
            },
        ],
        levelcost: [
            '1. 10 000',
            '2. 50 000',
            '3-4. 100 000',
            'Ceci est un petit poste de police. Si vous souhaitez l’agrandir ou bâtir davantage d’extensions, vous devez le reconstruire pour en faire un poste de police ordinaire. Ce processus prend 24 heures.',
        ],
        maxBuildings: '1 700 postes de police/gendarmerie',
        maxLevel: 4,
        special:
            'Le prix de vos postes augmente lorsque vous en possédez 25. Ainsi, le rythme de progression est constant une fois que vous possédez un grand flux de revenus à ces niveaux de jeu. La formule actuelle pour calculer le prix des postes est la suivante : <code>(50 000+100 000*LOG<sub>2</sub>(Number of existing fire stations − 22))</code>.',
        startPersonnel: 2,
        startParkingLots: 1,
        startCells: 0,
        startVehicles: ['Véhicule de patrouille'],
        schoolingTypes: ['Poste de police'],
        maxBuildingsFunction: (): number => 1700,
        icon: 'building-shield',
    },
    20: {
        caption: 'Poste Ambulancier (petit)',
        color: '#eeb611',
        coins: 25,
        credits: 100_000,
        extensions: [],
        levelcost: [
            '1. 10 000',
            '2. 50 000',
            '3-5. 100 000',
            'Ceci est un petit Poste Ambulancier. Si vous souhaitez l’agrandir ou bâtir davantage d’extensions, vous devez le reconstruire pour en faire un Poste Ambulancier ordinaire. Ce processus prend 24 heures.',
        ],
        maxBuildings: 'Aucune limite',
        maxLevel: 5,
        special: '',
        startPersonnel: 3,
        startVehicles: ['ASSU'],
        schoolingTypes: ['Secours'],
        startParkingLots: 1,
        icon: 'house-medical',
    },
    21: {
        caption: 'Grand complexe',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        extensions: [],
        levelcost: ['Trop cher'],
        maxBuildings: 'Aucune limite',
        maxLevel: 5,
        special: "TROP CHER, NE PAS L'ACHETER, NE PAS L'ÉTENDRE",
        startPersonnel: 0,
        startVehicles: [''],
        schoolingTypes: [],
        startParkingLots: 0,
        icon: 'poo',
    },
    22: {
        caption: 'Petit complexe',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        extensions: [],
        levelcost: ['Trop cher'],
        maxBuildings: 'Aucune limite',
        maxLevel: 5,
        special: "TROP CHER, NE PAS L'ACHETER, NE PAS L'ÉTENDRE",
        startPersonnel: 0,
        startVehicles: [''],
        schoolingTypes: [],
        startParkingLots: 0,
        icon: 'poo',
    },
    23: {
        caption: 'Station de Sauvetage',
        color: '#116611',
        coins: 50,
        credits: 500_000,
        extensions: [],
        levelcost: [
            '1. 10 000',
            '2. 20 000',
            '3. 75 000',
            '4-9. 100 000',
            '10-14. 150 000',
            '15-20. 200 000',
        ],
        maxBuildings: 'Aucune limite',
        maxLevel: 20,
        special: '',
        startPersonnel: 5,
        startParkingLots: 1,
        startVehicles: [''],
        schoolingTypes: ["Secours nautique"],
        icon: 'building-shield',
    },
    24: {
        caption: 'Compagnie de Gendarmerie Maritime',
        color: '#116611',
        coins: 30,
        credits: 500_000,
        extensions: [],
        levelcost: [
            '1. 10 000',
            '2. 25 000',
            '3. 45 000',
            '4. 75 000',
            '5-9. 100 000',
            '10. 150 000',
        ],
        maxBuildings: 'Aucune limite',
        maxLevel: 10,
        special:'',
        startPersonnel: 4,
        startParkingLots: 1,
        startVehicles: [''],
        schoolingTypes: ["Secours nautique"],
        icon: 'building-shield',
    },
    25: {
        caption: "Centre de Formation et d'Intervention",
        color: '#116611',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            index => ({
                caption: 'Plus de salles de cours',
                credits: 400_000,
                coins: 40,
                duration: '7 jours',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Aucune limite',
        maxLevel: 0,
        startClassrooms: 1,
        special: '',
        icon: 'building-shield',
    },
    26: {
        caption: 'Héliport de la Sécurité Civile',
        color: '#116611',
        coins: 50,
        credits: 1_000_000,
        extensions: [
            {
                caption: 'Hangar pour hélicoptère',
                credits: 10_000,
                coins: 1,
                duration: '',
                isVehicleExtension: true,
                givesParkingLots: 1,
            },
            {
                caption: 'Hangar pour hélicoptère additionnel',
                credits: 200_000,
                coins: 15,
                duration: '4 jours',
                isVehicleExtension: true,
                givesParkingLots: 1,
                requiredExtensions: [0],
            },
            {
                caption: 'Hangar pour hélicoptère additionnel',
                credits: 200_000,
                coins: 15,
                duration: '4 jours',
                isVehicleExtension: true,
                givesParkingLots: 1,
                requiredExtensions: [1],
            },
            {
                caption: 'Hangar pour hélicoptère additionnel',
                credits: 200_000,
                coins: 15,
                duration: '4 jours',
                isVehicleExtension: true,
                givesParkingLots: 1,
                requiredExtensions: [2],
            },
            {
                caption: 'Hangar pour hélicoptère additionnel',
                credits: 200_000,
                coins: 15,
                duration: '4 jours',
                isVehicleExtension: true,
                givesParkingLots: 1,
                requiredExtensions: [3],
            },
        ],
        levelcost: [],
        maxBuildings: 'Aucune limite',
        maxLevel: 0,
        special:'',
        startPersonnel: 2,
        startParkingLots: 0,
        startVehicles: [''],
        schoolingTypes: ["Secours nautique"],
        icon: 'building-shield',
    },
} as Record<number, InternalBuilding>;
