import type { TaskDto } from "$lib/types/taskman-api-types";
import { BOSS_LOG, CLUE_LOG, COMP, CRAFTING, MASTER_MAX, MINIGAMES, MQC, RESOURCES, RUNESCORE, TRIM } from "./example-categories";

export const TASKS: TaskDto[] = ([
    {
        taskId: 'Z001',
        hrid: 'woodcutting 30',
        name: 'Obtain Woodcutting lvl 30',
        img: '/icons/skills/woodcutting.webp',
        description: 'You can use any training method that awards the relevant experience to complete this task.',
        tier: 'Easy',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'Z002',
        hrid: 'mining 30',
        name: 'Obtain Mining lvl 30',
        img: '/icons/skills/mining.webp',
        description: 'You can use any training method that awards the relevant experience to complete this task.',
        tier: 'Easy',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'YEBJ',
        hrid: 'goblin village boss',
        name: 'Defeat one of the Goblin bosses',
        img: '/icons/tasks/brokeface.webp',
        description: 'A Goblin boss spawns every 15 goblins killed inside the Goblin Village.',
        tier: 'Beginner',
        categories: [RUNESCORE]
    },
    {
        taskId: '79NW',
        hrid: 'steel pickaxe',
        name: 'Whack a rock with a decent pickaxe',
        img: '/icons/skills/mining.webp',
        description: 'Upgrade your pickaxe to steel (or beyond, if you can!) and mine anything with it.',
        tier: 'Beginner',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'P5X3',
        hrid: 'wicked hood obtain',
        name: 'Obtain the Wicked hood',
        img: '/icons/items/wicked-hood.webp',
        description: 'Obtained for free from Tam McGrubor in Burthorpe.',
        tier: 'Beginner',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'MK5J',
        hrid: 'wicked hood upgrade',
        name: 'Fully upgrade your Wicked hood',
        img: '/icons/items/wicked-hood.webp',
        description: 'An Omni-Talisman can be obtained from Wizard Elriss after showing a wicked hood with every talisman in it, or by showing one of each of the talismans to her. The elemental talisman can be obtained as drop from monsters in the Abyss.',
        tier: 'Medium',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'LYJ4',
        hrid: 'ancient seed',
        name: 'Obtain an Ancient seed',
        img: '/icons/items/ancient-seed.webp',
        description: 'The Ancient seed can be bought from the Herby Werby reward shop, a weekly Herblore D&D located on Anachronia, costing 50 points. You are allowed to obtain the full 100 points for the week if you don\'t already have the required points.',
        tier: 'Beginner',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'D4B6',
        hrid: 'crab equipment',
        name: 'Craft a Crab claw and helmet',
        img: '/icons/items/crab-helmet.webp',
        description: 'Requires partial completion of the Recipe for Disaster: Pirate Pete section. A Fishbowl is required to go diving, and can be obtained as a drop from Waterfiends inside of the Chaos tunnels.',
        tier: 'Easy',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Z003',
        hrid: 'goblin book',
        name: 'Obtain a Goblin Book',
        img: '/icons/items/goblin-book.webp',
        description: 'The goblin book is an item that is commonly dropped by goblins.',
        tier: 'Easy',
        categories: [MQC]
    },
    {
        taskId: 'Q3G2',
        hrid: 'kalphite king 1',
        name: 'Register a total of 1 unique item in the Kalphite King section of your Boss collection log',
        img: '/icons/bosses/kalphite-king-256.webp',
        description: 'The Keris in combination with the Desert amulet 3 or 4 is very effective. He changes styles and with that colours, orange means he will attack with melee, green will be ranged and blue leaves mage. This task is considered group PvM.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'DW87',
        hrid: 'kalphite king 2',
        name: 'Register a total of 2 unique items in the Kalphite King section of your Boss collection log',
        img: '/icons/bosses/kalphite-king-256.webp',
        description: 'The Keris in combination with the Desert amulet 3 or 4 is very effective. He changes styles and with that colours, orange means he will attack with melee, green will be ranged and blue leaves mage. This task is considered group PvM.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'W3B3',
        hrid: 'kalphite king 3',
        name: 'Register a total of 3 unique items in the Kalphite King section of your Boss collection log',
        img: '/icons/bosses/kalphite-king-256.webp',
        description: 'The Keris in combination with the Desert amulet 3 or 4 is very effective. He changes styles and with that colours, orange means he will attack with melee, green will be ranged and blue leaves mage. This task is considered group PvM.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: '27GY',
        hrid: 'kerapac 1',
        name: 'Register a total of 1 unique item in the Kerapac section of your Boss collection log',
        img: '/icons/bosses/kerapac-256.webp',
        description: 'Owning a charged Pontifex ring makes you immune to the stuns otherwise applied when Kerapac jumps at you. The staff pieces are only obtainable in hardmode. This task is considered group PvM.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: '6ZBM',
        hrid: 'kerapac 2',
        name: 'Register a total of 2 unique item in the Kerapac section of your Boss collection log',
        img: '/icons/bosses/kerapac-256.webp',
        description: 'Owning a charged Pontifex ring makes you immune to the stuns otherwise applied when Kerapac jumps at you. The staff pieces are only obtainable in hardmode. This task is considered group PvM.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'QJKG',
        hrid: 'kerapac 3',
        name: 'Register a total of 3 unique item in the Kerapac section of your Boss collection log',
        img: '/icons/bosses/kerapac-256.webp',
        description: 'Owning a charged Pontifex ring makes you immune to the stuns otherwise applied when Kerapac jumps at you. The staff pieces are only obtainable in hardmode. This task is considered group PvM.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'DV74',
        hrid: 'kerapac 4',
        name: 'Register a total of 4 unique item in the Kerapac section of your Boss collection log',
        img: '/icons/bosses/kerapac-256.webp',
        description: 'Owning a charged Pontifex ring makes you immune to the stuns otherwise applied when Kerapac jumps at you. The staff pieces are only obtainable in hardmode. This task is considered group PvM.',
        tier: 'Master',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'WZEV',
        hrid: 'kerapac 5',
        name: 'Register a total of 5 unique item in the Kerapac section of your Boss collection log',
        img: '/icons/bosses/kerapac-256.webp',
        description: 'Owning a charged Pontifex ring makes you immune to the stuns otherwise applied when Kerapac jumps at you. The staff pieces are only obtainable in hardmode. This task is considered group PvM.',
        tier: 'Master',
        categories: [BOSS_LOG]
    },
    {
        taskId: '5MKW',
        hrid: 'kerapac 6',
        name: 'Register a total of 6 unique item in the Kerapac section of your Boss collection log',
        img: '/icons/bosses/kerapac-256.webp',
        description: 'Owning a charged Pontifex ring makes you immune to the stuns otherwise applied when Kerapac jumps at you. The staff pieces are only obtainable in hardmode. This task is considered group PvM.',
        tier: 'Master',
        categories: [BOSS_LOG]
    },
    {
        taskId: '3KR5',
        hrid: 'kerapac 7',
        name: 'Register a total of 7 unique items in the Kerapac section of your Boss collection log and unlock the \'Timeweaver\' title',
        img: '/icons/bosses/kerapac-256.webp',
        description: 'Owning a charged Pontifex ring makes you immune to the stuns otherwise applied when Kerapac jumps at you. The staff pieces are only obtainable in hardmode. This task is considered group PvM.',
        tier: 'Legendary',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'ZBQY',
        hrid: 'king black dragon 1',
        name: 'Register a total of 1 unique item in the King Black Dragon section of your Boss collection log',
        img: '/icons/bosses/king-black-dragon.webp',
        description: 'There are two artefacts that can be used to enter his Lair. One north-west of the Edgeville lodestone and another at level 42 in the Wilderness. Using the one in level 42 Wilderness grants you a 10% damage boost. The King Black Dragonling does not count as a unique until is has been registered in the in-game log by claiming the pet. This requires a Summoning level of 99, which cannot be trained for.',
        tier: 'Medium',
        categories: [BOSS_LOG]
    },
    {
        taskId: '5KDJ',
        hrid: 'king black dragon 2',
        name: 'Register a total of 2 unique items in the King Black Dragon section of your Boss collection log',
        img: '/icons/bosses/king-black-dragon.webp',
        description: 'There are two artefacts that can be used to enter his Lair. One north-west of the Edgeville lodestone and another at level 42 in the Wilderness. Using the one in level 42 Wilderness grants you a 10% damage boost. The King Black Dragonling does not count as a unique until is has been registered in the in-game log by claiming the pet. This requires a Summoning level of 99, which cannot be trained for.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: '3R22',
        hrid: 'king black dragon 3',
        name: 'Register a total of 3 unique items in the King Black Dragon section of your Boss collection log',
        img: '/icons/bosses/king-black-dragon.webp',
        description: 'There are two artefacts that can be used to enter his Lair. One north-west of the Edgeville lodestone and another at level 42 in the Wilderness. Using the one in level 42 Wilderness grants you a 10% damage boost. The King Black Dragonling does not count as a unique until is has been registered in the in-game log by claiming the pet. This requires a Summoning level of 99, which cannot be trained for.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'DDZG',
        hrid: 'king black dragon 4',
        name: 'Register a total of 4 unique items in the King Black Dragon section of your Boss collection log',
        img: '/icons/bosses/king-black-dragon.webp',
        description: 'There are two artefacts that can be used to enter his Lair. One north-west of the Edgeville lodestone and another at level 42 in the Wilderness. Using the one in level 42 Wilderness grants you a 10% damage boost. The King Black Dragonling does not count as a unique until is has been registered in the in-game log by claiming the pet. This requires a Summoning level of 99, which cannot be trained for.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'K2GV',
        hrid: 'king black dragon 5',
        name: 'Register a total of 5 unique items in the King Black Dragon section of your Boss collection log',
        img: '/icons/bosses/king-black-dragon.webp',
        description: 'There are two artefacts that can be used to enter his Lair. One north-west of the Edgeville lodestone and another at level 42 in the Wilderness. Using the one in level 42 Wilderness grants you a 10% damage boost. The King Black Dragonling does not count as a unique until is has been registered in the in-game log by claiming the pet. This requires a Summoning level of 99, which cannot be trained for.',
        tier: 'Elite',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'DDZG',
        hrid: 'king black dragon 6',
        name: 'Register a total of 6 unique items in the King Black Dragon section of your Boss collection log',
        img: '/icons/bosses/king-black-dragon.webp',
        description: 'There are two artefacts that can be used to enter his Lair. One north-west of the Edgeville lodestone and another at level 42 in the Wilderness. Using the one in level 42 Wilderness grants you a 10% damage boost. The King Black Dragonling does not count as a unique until is has been registered in the in-game log by claiming the pet. This requires a Summoning level of 99, which cannot be trained for.',
        tier: 'Elite',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'BJQX',
        hrid: 'king black dragon 7',
        name: 'Register a total of 7 unique items in the King Black Dragon section of your Boss collection log',
        img: '/icons/bosses/king-black-dragon.webp',
        description: 'There are two artefacts that can be used to enter his Lair. One north-west of the Edgeville lodestone and another at level 42 in the Wilderness. Using the one in level 42 Wilderness grants you a 10% damage boost. The King Black Dragonling does not count as a unique until is has been registered in the in-game log by claiming the pet. This requires a Summoning level of 99, which cannot be trained for.',
        tier: 'Master',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'K2VJ',
        hrid: 'king black dragon 8',
        name: 'Register a total of 8 unique items in the King Black Dragon section of your Boss collection log and unlock the \'the Last Rider\' title',
        img: '/icons/bosses/king-black-dragon.webp',
        description: 'There are two artefacts that can be used to enter his Lair. If you do not already meet the level 99 Summoning requirement of unlocking the pet, you are allowed to train your Summoning to 99 upon rolling this task to claim the pet.',
        tier: 'Master',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'BJNV',
        hrid: 'king black dragon mole shield',
        name: 'Get the King Black Dragon to fully degrade a mole anti-dragon shield',
        img: '/icons/bosses/king-black-dragon.webp',
        description: 'The shield is created by attaching a Clingy mole obtained from the Giant mole onto an anti-dragon shield. The shield must degrade fully from the King\'s fiery attacks. This achievement can only be completed in a solo instance.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: '6NBY',
        hrid: 'king black dragon dhide',
        name: 'Defeat the King black dragon while wearing Black d\'hide in 6 equipment slots',
        img: '/icons/bosses/king-black-dragon.webp',
        description: 'You can get away with switching into the equipment at the end of the fight if you need to. This task can only be completed in a solo instance.',
        tier: 'Elite',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'XEYQ',
        hrid: 'plank box unlock',
        name: 'Unlock the Plank box',
        img: '/icons/items/plank-box.webp',
        description: 'A Construction level of 40 is required. The Plank box can be bought for 50 Contract credits from the Estate Agents Shop. It has storage for up to 25 of each type of plank.',
        tier: 'Medium',
        categories: [COMP]
    },
    {
        taskId: '7V6N',
        hrid: 'plank box upgrade 1',
        name: 'Purchase the first plank box upgrade',
        img: '/icons/items/plank-box.webp',
        description: 'Plank box upgrade 1 can be bought for 150 Contract credits from the Estate Agents Shop. It has storage for up to 50 of each type of plank.',
        tier: 'Hard',
        categories: [COMP]
    },
    {
        taskId: 'K7EJ',
        hrid: 'plank box upgrade 2',
        name: 'Purchase the second plank box upgrade',
        img: '/icons/items/plank-box.webp',
        description: 'Plank box upgrade 2 can be bought for 300 Contract credits from the Estate Agents Shop. It has storage for up to 100 of each type of plank.',
        tier: 'Hard',
        categories: [COMP]
    },
    {
        taskId: 'R7XD',
        hrid: 'super invention',
        name: 'Create a Super invention potion and take a sip, they taste surprisingly good!',
        img: '/icons/items/super-invention.webp',
        description: 'Super invention potions can be created by mixing a spider fang, with an invention potion. This requires a Herblore level of 87.',
        tier: 'Hard',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'QGBX',
        hrid: 'clarence funeral',
        name: 'Give Clarence the funeral he deserves',
        img: '/icons/items/hand-of-clarence.webp',
        description: 'Complete the One Foot in the Grave miniquest. The quest Back to my Roots must have been started.',
        tier: 'Hard',
        categories: [MQC]
    },
    {
        taskId: 'EDBY',
        hrid: 'a void dance',
        name: 'Complete the A Void Dance quest',
        img: '/icons/items/void-knight-book.webp',
        description: 'The quest can be started by talking to Commander Tyr. It unlocks the Black Knight guardian in the Dominion Tower.',
        tier: 'Medium',
        categories: [MQC]
    },
    {
        taskId: 'QG2Q',
        hrid: 'dw helmet',
        name: 'Obtain the Dwarven Helmet',
        img: '/icons/items/dwarven-helmet.webp',
        description: 'The Dwarven Helmet can be obtained by completing the Grim Tales quest.',
        tier: 'Hard',
        categories: [MQC]
    },
    {
        taskId: 'MJNV',
        hrid: 'dragonfire shield special',
        name: 'Use the special attack of the Dragonfire shield against a dragon',
        img: '/icons/items/draconic-visage.webp',
        description: 'The Visage is dropped by most dragons and can be made into a Dragonfire shield by paying Oziach in Edgeville 1,250,000 GP.',
        tier: 'Hard',
        categories: [MQC]
    },
    {
        taskId: 'QYDJ',
        hrid: 'crystal pickaxe',
        name: 'Create a Crystal pickaxe',
        img: '/icons/items/crystal-pickaxe.webp',
        description: 'Upgrade a Dragon pickaxe with 4,000 harmonic dust.',
        tier: 'Hard',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'D6NK',
        hrid: 'crystal hatchet',
        name: 'Create a Crystal hatchet',
        img: '/icons/items/crystal-hatchet.webp',
        description: 'Upgrade a Dragon hatchet with 4,000 harmonic dust.',
        tier: 'Hard',
        categories: [MASTER_MAX]
    },
    {
        taskId: '6G87',
        hrid: 'crystal mattock',
        name: 'Create a Crystal mattock',
        img: '/icons/items/crystal-mattock.webp',
        description: 'Upgrade a Dragon mattock with 4,000 harmonic dust.',
        tier: 'Hard',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'NG4V',
        hrid: 'soul-in-a-box',
        name: 'Create the Soul-in-a-box',
        img: '/icons/items/soul-in-a-box.webp',
        description: 'Completion of the quest Nomad\'s Elegy and an Invention level of 24 are required.',
        tier: 'Hard',
        categories: [MQC]
    },
    {
        taskId: 'NGRN',
        hrid: 'pouch spirit phoenix',
        name: 'Create 5 Spirit Phoenix pouches',
        img: '/icons/tasks/phoenix-familiar.webp',
        description: 'Spirit Phoenix\' are made by using a Summoning pouch on a Summoning obelisk with 165 spirit shards, a crimson charm and a phoenix quill. This requires a Summoning level of 72.',
        tier: 'Hard',
        categories: [RESOURCES]
    },
    {
        taskId: '2N5N',
        hrid: 'pouch adamant minotaur',
        name: 'Create 10 Adamant minotaur pouches',
        img: '/icons/tasks/adamant-minotaur.webp',
        description: 'Adamant minotaurs are made by using a Summoning pouch on a Summoning obelisk with 144 spirit shards, a blue charm, an adamant bar and a Summoning level of 76.',
        tier: 'Hard',
        categories: [RESOURCES]
    },
    {
        taskId: 'EYQX',
        hrid: 'pouch moss titan',
        name: 'Create 10 Moss titan pouches',
        img: '/icons/tasks/moss-titan.webp',
        description: 'Moss titans are made by using a Summoning pouch on a Summoning obelisk with 202 spirit shards, a blue charm, an earth talisman and a Summoning level of 79.',
        tier: 'Hard',
        categories: [RESOURCES]
    },
    {
        taskId: 'Y018',
        parent: '47DG',
        hrid: 'subtask',
        name: 'Register a total of 1 unique item in the hard tier of your Treasure Trail collection log',
        img: '/icons/items/sealed-clue-scroll-hard.webp',
        description: 'Refer to your Treasure Trail collection log to see your total.',
        categories: [CLUE_LOG]
    },{
        taskId: 'Y019',
        parent: '47DG',
        hrid: 'subtask',
        name: 'Register a total of 2 unique items in the hard tier of your Treasure Trail collection log',
        img: '/icons/items/sealed-clue-scroll-hard.webp',
        description: 'Refer to your Treasure Trail collection log to see your total.',
        categories: [CLUE_LOG]
    },{
        taskId: 'Y020',
        parent: '47DG',
        hrid: 'subtask',
        name: 'Register a total of 3 unique items in the hard tier of your Treasure Trail collection log',
        img: '/icons/items/sealed-clue-scroll-hard.webp',
        description: 'Refer to your Treasure Trail collection log to see your total.',
        categories: [CLUE_LOG]
    },
    {
        taskId: '47DG',
        hrid: 'hard clue log 1',
        name: 'Register a total of 3 unique items in the hard tier of your Treasure Trail collection log',
        img: '/icons/items/sealed-clue-scroll-hard.webp',
        description: 'Hard clue scrolls can be obtained from several sources. The most widely used is killing Hellhounds. Refer to your Treasure Trail collection log to see your total.',
        tier: 'Medium',
        categories: [CLUE_LOG],
        subtasks: ['Y018', 'Y019', 'Y020']
    },
    {
        taskId: 'VM24',
        hrid: 'dragon platebody',
        name: 'Create the dragon platebody',
        img: '/icons/items/dragon-platebody.webp',
        description: 'The dragon platebody can be created by combining the 3 armour pieces which are dropped by Tormented Demons.',
        tier: 'Passive',
        categories: [CRAFTING]
    },
    {
        taskId: 'Y015',
        parent: 'RM53',
        hrid: 'subtask',
        name: 'Create a Sirenic mask',
        img: '/icons/items/sirenic-mask.webp',
        description: 'Creating a Serenic mask requires 14 Sirenic scales, 1 Algarum thread and a Crafting level of 91.',
        categories: [CRAFTING]
    },
    {
        taskId: 'Y016',
        parent: 'RM53',
        hrid: 'subtask',
        name: 'Create a Sirenic hauberk',
        img: '/icons/items/sirenic-hauberk.webp',
        description: 'Creating a Sirenic hauberk requires 42 Sirenic scales, 3 Algarum thread and a Crafting level of 93.',
        categories: [CRAFTING]
    },
    {
        taskId: 'Y017',
        parent: 'RM53',
        hrid: 'subtask',
        name: 'Create a pair of Serenic chaps',
        img: '/icons/items/sirenic-chaps.webp',
        description: 'Creating a pair of Sirenic chaps requires 28 Sirenic scales, 2 Algarum thread and a Crafting level of 92.',
        categories: [CRAFTING]
    },
    {
        taskId: 'RM53',
        hrid: 'sirenic armour',
        name: 'Create a set of Sirenic armour',
        img: '/icons/items/sirenic-mask.webp',
        description: 'Creating the set requires 84 Sirenic scales, 6 Algarum thread and a Crafting level of 93.',
        tier: 'Passive',
        categories: [CRAFTING],
        subtasks: ['Y015', 'Y016', 'Y017']
    },
    {
        taskId: 'DQZZ',
        hrid: 'polypore staff',
        name: 'Create the Polypore staff',
        img: '/icons/items/polypore-staff.webp',
        description: 'A Farming level of 80 (can be boosted) is required to create the staff. A Polypore stick (obtainable at 95 Slayer) can be combined together with 3,000 polypore spores and 15,000 fire runes.',
        tier: 'Passive',
        categories: [CRAFTING]
    },
    {
        taskId: 'N4KZ',
        hrid: 'fractured staff of armadyl',
        name: 'Create the fractured staff of Armadyl',
        img: '/icons/items/fractured-staff-of-armadyl.webp',
        description: 'The staff is assembled from three pieces, all of which are dropped by Hard Mode Kerapac. This also requires a Crafting level of 95.',
        tier: 'Passive',
        categories: [CRAFTING]
    },
    {
        taskId: '45NR',
        hrid: 'unique blessing 1',
        name: 'Create a unique blessing',
        img: '/icons/items/phylactery.webp',
        description: 'Blessings are made from Scraps of scripture, which can be obtained by breaking open Phylacteries, an uncommon drop from the Magister. 100 scraps are required to create a blessing. You may gather enough keys to be able to do 1 hour of consecutive kills. The number of keys you can gather is therefore calculated as follows: 3,600 seconds / PB kill time in seconds. If your PB is 120 seconds, you are allowed to gather up to a total of 30 keys before you have to face the boss.',
        tier: 'Passive',
        categories: [CRAFTING],
        uniqueSet: 'MagisterBlessing'
    },
    {
        taskId: 'XDB6',
        hrid: 'unique blessing 2',
        name: 'Create a unique blessing',
        img: '/icons/items/phylactery.webp',
        description: 'Blessings are made from Scraps of scripture, which can be obtained by breaking open Phylacteries, an uncommon drop from the Magister. 100 scraps are required to create a blessing. You may gather enough keys to be able to do 1 hour of consecutive kills. The number of keys you can gather is therefore calculated as follows: 3,600 seconds / PB kill time in seconds. If your PB is 120 seconds, you are allowed to gather up to a total of 30 keys before you have to face the boss.',
        tier: 'Passive',
        categories: [CRAFTING],
        uniqueSet: 'MagisterBlessing'
    },
    {
        taskId: 'N6VD',
        hrid: 'unique blessing 3',
        name: 'Create a unique blessing',
        img: '/icons/items/phylactery.webp',
        description: 'Blessings are made from Scraps of scripture, which can be obtained by breaking open Phylacteries, an uncommon drop from the Magister. 100 scraps are required to create a blessing. You may gather enough keys to be able to do 1 hour of consecutive kills. The number of keys you can gather is therefore calculated as follows: 3,600 seconds / PB kill time in seconds. If your PB is 120 seconds, you are allowed to gather up to a total of 30 keys before you have to face the boss.',
        tier: 'Passive',
        categories: [CRAFTING],
        uniqueSet: 'MagisterBlessing'
    },
    {
        taskId: 'DDMG',
        hrid: 'giant mole 1',
        name: 'Register a total of 1 unique item in the Giant mole section of your Boss collection log',
        img: '/icons/bosses/giant-mole.webp',
        description: 'The Giant mole can be found underneath the Falador Park.',
        tier: 'Easy',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'W2KK',
        hrid: 'giant mole 2',
        name: 'Register a total of 2 unique items in the Giant mole section of your Boss collection log',
        img: '/icons/bosses/giant-mole.webp',
        description: 'The Giant mole can be found underneath the Falador Park.',
        tier: 'Medium',
        categories: [BOSS_LOG]
    },
    {
        taskId: '5WJD',
        hrid: 'giant mole 3',
        name: 'Register a total of 3 unique items in the Giant mole section of your Boss collection log and unlock the \'of the Underground\' title',
        img: '/icons/bosses/giant-mole.webp',
        description: 'The Giant mole can be found underneath the Falador Park.',
        tier: 'Elite',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y001',
        parent: '4VNQ',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y002',
        parent: '4VNQ',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y003',
        parent: 'XEBE',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y004',
        parent: 'XEBE',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y005',
        parent: 'NMV6',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y006',
        parent: 'NMV6',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y007',
        parent: 'JDJB',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y008',
        parent: 'JDJB',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y009',
        parent: 'Y2MG',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y010',
        parent: 'Y2MG',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y011',
        parent: '8V8W',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y012',
        parent: '8V8W',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y013',
        parent: 'VR7W',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y014',
        parent: 'VR7W',
        hrid: 'subtask',
        name: 'Register a unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        categories: [BOSS_LOG]
    },
    {
        taskId: '4VNQ',
        hrid: 'general graardor 1',
        name: 'Register a total of 2 unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'Accessing the God Wars Dungeon requires partial completion of the Troll Stronghold quest. Furthermore, A Strength or Agility level of 60 is required to enter the dungeon. You may only level up your Strength to 60 for this purpose. A Strength level of 70 is required to enter Bandos\' Stronghold, however the Warpriest pieces can also be obtained from the Bandos followers in the main section of the dungeon.',
        tier: 'Easy',
        subtasks: ['Y001', 'Y002'],
        categories: [BOSS_LOG]
    },
    {
        taskId: 'XEBE',
        hrid: 'general graardor 2',
        name: 'Register a total of 4 unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold, however, the Warpriest pieces can also be obtained from the Bandos followers in the main section of the dungeon.',
        tier: 'Easy',
        subtasks: ['Y003', 'Y004'],
        categories: [BOSS_LOG]
    },
    {
        taskId: 'NMV6',
        hrid: 'general graardor 3',
        name: 'Register a total of 6 unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold, however, the Warpriest pieces can also be obtained from the Bandos followers in the main section of the dungeon.',
        tier: 'Easy',
        subtasks: ['Y005', 'Y006'],
        categories: [BOSS_LOG]
    },
    {
        taskId: 'JDJB',
        hrid: 'general graardor 4',
        name: 'Register a total of 8 unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold, however, the Warpriest pieces can also be obtained from the Bandos followers in the main section of the dungeon.',
        tier: 'Easy',
        subtasks: ['Y007', 'Y008'],
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y2MG',
        hrid: 'general graardor 5',
        name: 'Register a total of 10 unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold, however, the Warpriest pieces can also be obtained from the Bandos followers in the main section of the dungeon.',
        tier: 'Medium',
        subtasks: ['Y009', 'Y010'],
        categories: [BOSS_LOG]
    },
    {
        taskId: '8V8W',
        hrid: 'general graardor 6',
        name: 'Register a total of 12 unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold, however, the Warpriest pieces can also be obtained from the Bandos followers in the main section of the dungeon.',
        tier: 'Medium',
        subtasks: ['Y011', 'Y012'],
        categories: [BOSS_LOG]
    },
    {
        taskId: 'VR7W',
        hrid: 'general graardor 7',
        name: 'Register a total of 14 unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold, however, the Warpriest pieces can also be obtained from the Bandos followers in the main section of the dungeon.',
        tier: 'Medium',
        subtasks: ['Y013', 'Y014'],
        categories: [BOSS_LOG]
    },
    {
        taskId: '2V4K',
        hrid: 'general graardor 8',
        name: 'Register a total of 15 unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'EDZ5',
        hrid: 'general graardor 9',
        name: 'Register a total of 16 unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: '6VR4',
        hrid: 'general graardor 10',
        name: 'Register a total of 17 unique items in the General Graardor section of your Boss collection log',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Q46M',
        hrid: 'general graardor 11',
        name: 'Register a total of 18 unique items in the General Graardor section of your Boss collection log and unlock the \'Strength of Ourgs\' title',
        img: '/icons/bosses/general-graardor.webp',
        description: 'A Strength level of 70 is required to enter Bandos\' Stronghold.',
        tier: 'Elite',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Q46M',
        hrid: 'general graardor fast',
        name: 'Graardone fast!',
        img: '/icons/bosses/general-graardor.webp',
        description: 'Defeat General Graardor in under 15 seconds.',
        tier: 'Elite',
        categories: [BOSS_LOG]
    },
    {
        taskId: '9GGJ',
        hrid: 'general graardor fist',
        name: 'Defeat General Graardor using only your fists',
        img: '/icons/bosses/general-graardor.webp',
        description: 'The only requirement is that no weapon or shield can be equipped at any point in the kill. Other damage sources such as familiars and Invention perks do not prevent the achievement.',
        tier: 'Elite',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y021',
        parent: '8V3W',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y022',
        parent: '8V3W',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y023',
        parent: 'VRBW',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y024',
        parent: 'VRBW',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y025',
        parent: '2V3K',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y026',
        parent: '2V3K',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y027',
        parent: 'ED95',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y028',
        parent: 'ED95',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y029',
        parent: '6V34',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y030',
        parent: '6V34',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y031',
        parent: 'Q4QM',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y032',
        parent: 'Q4QM',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y033',
        parent: 'Q4QM',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'Y034',
        parent: 'Q4QM',
        hrid: 'subtask',
        name: 'Register a unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        categories: [BOSS_LOG]
    },
    {
        taskId: '8V3W',
        hrid: 'commander zilyana 1',
        name: 'Register a total of 2 unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment, however, the Warpriest pieces can also be obtained from Saradomin followers in the main section of the dungeon.',
        tier: 'Medium',
        categories: [BOSS_LOG],
        subtasks: ['Y021', 'Y022']
    },
    {
        taskId: 'VRBW',
        hrid: 'commander zilyana 2',
        name: 'Register a total of 4 unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment, however, the Warpriest pieces can also be obtained from Saradomin followers in the main section of the dungeon.',
        tier: 'Medium',
        categories: [BOSS_LOG],
        subtasks: ['Y023', 'Y024']
    },
    {
        taskId: '2V3K',
        hrid: 'commander zilyana 3',
        name: 'Register a total of 6 unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment, however, the Warpriest pieces can also be obtained from Saradomin followers in the main section of the dungeon.',
        tier: 'Medium',
        categories: [BOSS_LOG],
        subtasks: ['Y025', 'Y026']
    },
    {
        taskId: 'ED95',
        hrid: 'commander zilyana 4',
        name: 'Register a total of 8 unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment, however, the Warpriest pieces can also be obtained from Saradomin followers in the main section of the dungeon.',
        tier: 'Medium',
        categories: [BOSS_LOG],
        subtasks: ['Y027', 'Y028']
    },
    {
        taskId: '6V34',
        hrid: 'commander zilyana 5',
        name: 'Register a total of 10 unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment, however, the Warpriest pieces can also be obtained from Saradomin followers in the main section of the dungeon.',
        tier: 'Medium',
        categories: [BOSS_LOG],
        subtasks: ['Y029', 'Y030']
    },
    {
        taskId: 'Q4QM',
        hrid: 'commander zilyana 6',
        name: 'Register a total of 12 unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        tier: 'Hard',
        categories: [BOSS_LOG],
        subtasks: ['Y031', 'Y032']
    },
    {
        taskId: 'DDGG',
        hrid: 'commander zilyana 7',
        name: 'Register a total of 14 unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        tier: 'Hard',
        categories: [BOSS_LOG],
        subtasks: ['Y033', 'Y034']
    },
    {
        taskId: 'M9NK',
        hrid: 'commander zilyana 8',
        name: 'Register a total of 15 unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'W2MK',
        hrid: 'commander zilyana 9',
        name: 'Register a total of 16 unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: '5W3D',
        hrid: 'commander zilyana 10',
        name: 'Register a total of 17 unique items in the Commander Zilyana section of your Boss collection log',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        tier: 'Elite',
        categories: [BOSS_LOG]
    },
    {
        taskId: '3VX8',
        hrid: 'commander zilyana 11',
        name: 'Register a total of 18 unique items in the Commander Zilyana section of your Boss collection log and unlock the \'Finesse of the Icyene\' title',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'An Agility level of 70 is required to enter Saradomin\'s Encampment.',
        tier: 'Elite',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'JM8Z',
        hrid: 'commander zilyana weather',
        name: 'Defeat Commander Zilyana while being under the weather',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'Defeat Hard Mode Commander Zilyana whilst under the effects of her cloud attack and the Sunshine ability.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'ZEYZ',
        hrid: 'commander zilyana proselyte',
        name: 'Defeat Commander Zilyana whilst wearing a full set of Proselyte armour',
        img: '/icons/bosses/commander-zilyana.webp',
        description: 'You can use any weapon. This task can only be completed in a solo instance.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'X34V',
        hrid: 'temple of aminishi 1',
        name: 'Register a total of 1 unique item in the Temple of Aminishi section of your Boss collection log',
        img: '/icons/bosses/seiryu.webp',
        description: 'You can receive the books in story mode. You can use the group system to get there, or teleport there with the chest from on of the other dungeons. This task is considered group PvM.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'NNRM',
        hrid: 'temple of aminishi 2',
        name: 'Register a total of 2 unique items in the Temple of Aminishi section of your Boss collection log',
        img: '/icons/bosses/seiryu.webp',
        description: 'You can receive the books in story mode. You can use the group system to get there, or teleport there with the chest from on of the other dungeons. This task is considered group PvM.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'BJ8X',
        hrid: 'temple of aminishi 3',
        name: 'Register a total of 3 unique items in the Temple of Aminishi section of your Boss collection log',
        img: '/icons/bosses/seiryu.webp',
        description: 'You can receive the books in story mode. You can use the group system to get there, or teleport there with the chest from on of the other dungeons. This task is considered group PvM.',
        tier: 'Elite',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'EJE5',
        hrid: 'temple of aminishi 4',
        name: 'Register a total of 4 unique items in the Temple of Aminishi section of your Boss collection log',
        img: '/icons/bosses/seiryu.webp',
        description: 'You can receive the books in story mode. You can use the group system to get there, or teleport there with the chest from on of the other dungeons. This task is considered group PvM.',
        tier: 'Elite',
        categories: [BOSS_LOG]
    },
    {
        taskId: '6M64',
        hrid: 'temple of aminishi 5',
        name: 'Register a total of 5 unique items in the Temple of Aminishi section of your Boss collection log',
        img: '/icons/bosses/seiryu.webp',
        description: 'You can receive the books in story mode. You can use the group system to get there, or teleport there with the chest from on of the other dungeons. This task is considered group PvM.',
        tier: 'Master',
        categories: [BOSS_LOG]
    },
    {
        taskId: '7ZEK',
        hrid: 'temple of aminishi 6',
        name: 'Register a total of 6 unique items in the Temple of Aminishi section of your Boss collection log and unlock the \'Acolyte of Seiryu\' title',
        img: '/icons/bosses/seiryu.webp',
        description: 'You can receive the books in story mode. You can use the group system to get there, or teleport there with the chest from on of the other dungeons. This task is considered group PvM.',
        tier: 'Legendary',
        categories: [BOSS_LOG]
    },
    {
        taskId: '272Y',
        hrid: 'arch glacor 1',
        name: 'Register a total of 1 unique item in the Arch-Glacor section of your Boss collection log',
        img: '/icons/bosses/arch-glacor.webp',
        description: 'The more mechanics turned on, the better your loot gets. Some items can only be obtained from Hardmode. You are allowed to craft a task-completing unique if you have the required levels to do so. From the Master tier onwards, you can also level up your skills to craft a task-completing unique.',
        tier: 'Easy',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'EV8K',
        hrid: 'arch glacor 2',
        name: 'Register a total of 2 unique items in the Arch-Glacor section of your Boss collection log',
        img: '/icons/bosses/arch-glacor.webp',
        description: 'The more mechanics turned on, the better your loot gets. Some items can only be obtained from Hardmode. You are allowed to craft a task-completing unique if you have the required levels to do so. From the Master tier onwards, you can also level up your skills to craft a task-completing unique.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: '6ZWM',
        hrid: 'arch glacor 3',
        name: 'Register a total of 3 unique items in the Arch-Glacor section of your Boss collection log',
        img: '/icons/bosses/arch-glacor.webp',
        description: 'The more mechanics turned on, the better your loot gets. Some items can only be obtained from Hardmode. You are allowed to craft a task-completing unique if you have the required levels to do so. From the Master tier onwards, you can also level up your skills to craft a task-completing unique.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: 'GQ99',
        hrid: 'katarina',
        name: 'Find Katarina',
        img: '/icons/tasks/katarina.webp',
        description: 'Katarina appears randomly in the Sophanem Slayer Dungeon while killing Corrupted creatures or Soul devourers. You do not need a Slayer assignment for her to spawn. A Slayer level of 88 is required.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: '2W6Y',
        hrid: 'tefimhet',
        name: 'Find Tefimhet',
        img: '/icons/tasks/tefimhet.webp',
        description: 'Tefimhet can be found at the Soul Altar. Accessing the altar requires the completion the \'Phite Club quest and T9 overall Menaphos reputation.',
        tier: 'Hard',
        categories: [BOSS_LOG]
    },
    {
        taskId: '528Q ',
        hrid: 'inquisitor staff 1',
        name: 'Obtain a unique piece of the Inquisitor staff',
        img: '/icons/items/inquisitor-staff.webp',
        description: 'An Archaeology level of 114 is required to obtain the last part of the staff. Duplicate pieces can be exchanged for a unique piece by Soran, Emissary of Zaros for 10,000,000 coins.',
        tier: 'Master',
        categories: [MASTER_MAX]
    },
    {
        taskId: '3GJV',
        hrid: 'inquisitor staff 2',
        name: 'Obtain a unique piece of the Inquisitor staff',
        img: '/icons/items/inquisitor-staff.webp',
        description: 'An Archaeology level of 114 is required to obtain the last part of the staff. Duplicate pieces can be exchanged for a unique piece by Soran, Emissary of Zaros for 10,000,000 coins.',
        tier: 'Master',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'GWBQ',
        hrid: 'inquisitor staff 3',
        name: 'Obtain a unique piece of the Inquisitor staff',
        img: '/icons/items/inquisitor-staff.webp',
        description: 'An Archaeology level of 114 is required to obtain the last part of the staff. Duplicate pieces can be exchanged for a unique piece by Soran, Emissary of Zaros for 10,000,000 coins.',
        tier: 'Master',
        categories: [MASTER_MAX]
    },
    {
        taskId: '3K6W',
        hrid: 'inquisitor staff complete',
        name: 'Create the Inquisitor Staff',
        img: '/icons/items/inquisitor-staff.webp',
        description: 'The inquisitor staff requires you to find three incredibly rare pieces while excavating at Kharid-et, then assemble them (along with a praetorian staff) with a Runecrafting level of 93.',
        tier: 'Passive',
        categories: [CRAFTING]
    },
    {
        taskId: 'ZRB4',
        hrid: 'abyssal minion',
        name: 'Obtain the Abyssal minion pet',
        img: '/icons/tasks/abyssal-minion.webp',
        description: 'The pet can be bought from Zimberfizz for 85 Zeals, or from Stanley Limelight for 1,020 Thaler after obtaining an Abyssal head drop.',
        tier: 'Passive',
        categories: [MINIGAMES]
    },
    {
        taskId: '3RBG',
        hrid: 'big swordfish',
        name: 'Catch an abnormally Big swordfish and mount it in your house',
        img: '/icons/items/big-swordfish.webp',
        description: 'Obtained as a rare catch when fishing for Swordfish, requiring a Fishing level of 50. The swordfish can be mounted in a Skill Hall, requiring a Construction level of 56, a stuffed big swordfish and 2 Teak planks.',
        tier: 'Medium',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'KGXN',
        hrid: 'fish 500 shark',
        name: 'Successfully cook 500 Shark',
        img: '/icons/items/shark.webp',
        description: 'A Fishing level of 76 and a Cooking level of 80 are required.',
        tier: 'Hard',
        categories: [RESOURCES]
    },
    {
        taskId: 'D7ZJ',
        hrid: 'big shark',
        name: 'Catch an abnormally Big shark and mount it in your house',
        img: '/icons/items/big-shark.webp',
        description: 'Obtained rarely when catching sharks. A fishing level of 76 is required. Having the options to catch Great white and Baron sharks active lowers chance of the big shark. The shark can be mounted in a Skill Hall requiring a Construction level of 76, a stuffed big shark and 2 Mahogany planks.',
        tier: 'Hard',
        categories: [MASTER_MAX]
    },
    {
        taskId: 'ZERV',
        hrid: 'eagle transport',
        name: 'Unlock all Eagle transport routes and build the 3 Rope racks found next to them',
        img: '/icons/tasks/giant-eagle.webp',
        description: 'Requires completion of the Eagles\' Peak quest and the Back to my Roots quest. A Teasing stick is required to unlock the Feldip route.',
        tier: 'Hard',
        categories: [TRIM, MQC]
    },
    {
        taskId: '3NE3',
        hrid: 'crux eqal favour',
        name: 'Start gaining Crux Eqal favour from the Garden of Kharid',
        img: '/icons/tasks/polletix.webp',
        description: 'Talk to Polletix and Sydekix at the Garden of Kharid and go through all dialogue options to gain access to Sydekix\'s Shop of Balance and start gaining favour from growing herbs.',
        tier: 'Easy',
        categories: [RUNESCORE, COMP]
    },
    {
        taskId: 'V2J7',
        hrid: 'master runecrafter robes 1',
        name: 'Buy a unique piece of the Master runecrafter robes',
        img: '/icons/tasks/master-runecrafter-robes.webp',
        description: 'Bought with Runespan points or Thaler.',
        tier: 'Medium',
        categories: [MINIGAMES]
    },
    {
        taskId: '2G68',
        hrid: 'master runecrafter robes 2',
        name: 'Buy a unique piece of the Master runecrafter robes',
        img: '/icons/tasks/master-runecrafter-robes.webp',
        description: 'Bought with Runespan points or Thaler.',
        tier: 'Medium',
        categories: [MINIGAMES]
    },
    {
        taskId: '898E',
        hrid: 'master runecrafter robes 3',
        name: 'Buy a unique piece of the Master runecrafter robes',
        img: '/icons/tasks/master-runecrafter-robes.webp',
        description: 'Bought with Runespan points or Thaler.',
        tier: 'Hard',
        categories: [MINIGAMES]
    },
    {
        taskId: 'EJKY',
        hrid: 'master runecrafter robes 4',
        name: 'Buy a unique piece of the Master runecrafter robes',
        img: '/icons/tasks/master-runecrafter-robes.webp',
        description: 'Bought with Runespan points or Thaler.',
        tier: 'Hard',
        categories: [MINIGAMES]
    },
    {
        taskId: '7Z55',
        hrid: 'agility codex 1',
        name: 'Unlock Double surge or Double escape',
        img: '/icons/tasks/lectern-anachronia.webp',
        description: 'The ability codex can be made from 500 codex pages obtained from the Anachronia Agility Course.',
        tier: 'Hard',
        categories: [RUNESCORE]
    },
    {
        taskId: 'DW77',
        hrid: 'agility codex 2',
        name: 'Unlock Double surge or Double escape',
        img: '/icons/tasks/lectern-anachronia.webp',
        description: 'The ability codex can be made from 500 codex pages obtained from the Anachronia Agility Course.',
        tier: 'Elite',
        categories: [RUNESCORE],
        uniqueSet: 'AgilityCodex'
    },
    {
        taskId: 'MRG6',
        hrid: 'civil war miniquests',
        name: 'Complete the Civil War miniquests',
        img: '/icons/items/infernal-puzzle-box.webp',
        description: 'The first miniquest requires completion of the "Gross Misconduct" achievement. The second requires completion of 4 Wilderness Flash Events. The third requires 50 Farming and 250 Crux Eqal favour.',
        tier: 'Medium',
        categories: [MQC, COMP],
    },
    {
        taskId: 'YA01',
        hrid: 'miasma gem',
        name: 'Unlock the abiity use Miasma spells',
        img: '/icons/tasks/gem-of-miasma.webp',
        description: 'To unlock the ability to create miasma gems you will need to have Necromancy level 40 and complete the "Dangerous Substance" achievement. You can use the gems to create miasma spell scrolls.',
        tier: 'Medium',
        categories: [COMP, RUNESCORE],
    }, 
    {
        taskId: 'YA02',
        hrid: 'scripture of necromacy - complete',
        name: 'Complete the scripture of necromacy',
        img: '/icons/tasks/book-of-necromancy.webp',
        description: 'Find and restore all pages of the scripture of necromacy and unlock the "Sinister Knoladge" achievement. You will need level 87 Necromancy and access to Freneskae.',
        tier: 'Elite',
        categories: [COMP, RUNESCORE],
    }, 
    {
        taskId: 'YA03',
        hrid: 'necrotic ward',
        name: 'Unlock a basic necrotic warding spell',
        img: '/icons/tasks/ward-of-necromancy.webp',
        description: 'Necrotic warding spells can be unlocked by finding the page, restoring it and adding it to your scripture of necromacy.',
        tier: 'Beginner',
        categories: [COMP],
    }, 
    {
        taskId: 'VX9B',
        hrid: 'fort forinthry town hall 1',
        name: 'Construct the first tier of the Fort Forinthry Town Hall',
        img: '/icons/items/refined-planks.webp',
        description: 'A Construction level of 10 is required.',
        tier: 'Easy',
        categories: [MQC, COMP, RUNESCORE],
    },
    {
        taskId: 'WNG9',
        hrid: 'fort forinthry town hall 2',
        name: 'Construct the second tier of the Fort Forinthry Town Hall',
        img: '/icons/items/refined-teak-planks.webp',
        description: 'A Construction level of 50 is required.',
        tier: 'Easy',
        categories: [COMP, RUNESCORE],
    },
    {
        taskId: 'KNJZ',
        hrid: 'fort forinthry town hall 3',
        name: 'Construct the third tier of the Fort Forinthry Town Hall',
        img: '/icons/items/refined-mahogany-planks.webp',
        description: 'A Construction level of 90 is required.',
        tier: 'Elite',
        categories: [COMP, RUNESCORE],
    },
    {
        taskId: 'DKBY',
        hrid: 'fort forinthry workshop 2',
        name: 'Construct the second tier of the Fort Forinthry Workshop',
        img: '/icons/items/refined-teak-planks.webp',
        description: 'A Construction level of 40 is required.',
        tier: 'Easy',
        categories: [COMP, RUNESCORE],
    },
    {
        taskId: '7GXQ',
        hrid: 'fort forinthry workshop 3',
        name: 'Construct the third tier of the Fort Forinthry Workshop',
        img: '/icons/items/refined-mahogany-planks.webp',
        description: 'A Construction level of 80 is required.',
        tier: 'Hard',
        categories: [COMP, RUNESCORE],
    },
    {
        taskId: '2XM4',
        hrid: 'fort forinthry chapel 1',
        name: 'Construct the first tier of the Fort Forinthry Chapel',
        img: '/icons/items/refined-oak-planks.webp',
        description: 'A Construction level of 20 is required.',
        tier: 'Easy',
        categories: [MQC, COMP, RUNESCORE],
    },
    {
        taskId: '5R9K',
        hrid: 'fort forinthry chapel 2',
        name: 'Construct the second tier of the Fort Forinthry Chapel',
        img: '/icons/items/refined-teak-planks.webp',
        description: 'A Construction level of 60 is required.',
        tier: 'Medium',
        categories: [COMP, RUNESCORE],
    },
    {
        taskId: 'KNJZ',
        hrid: 'fort forinthry chapel 3',
        name: 'Construct the third tier of the Fort Forinthry Chapel',
        img: '/icons/items/refined-mahogany-planks.webp',
        description: 'A Construction level of 95 is required.',
        tier: 'Master',
        categories: [COMP, RUNESCORE],
    },
    {
        taskId: 'QBEY',
        hrid: 'fort forinthry command centre 1',
        name: 'Construct the first tier of the Fort Command Centre',
        img: '/icons/items/refined-oak-planks.webp',
        description: 'A Construction level of 30 is required.',
        tier: 'Easy',
        categories: [MQC, COMP, RUNESCORE],
    },
    {
        taskId: '3NM7',
        hrid: 'fort forinthry command centre 2',
        name: 'Construct the second tier of the Fort Command Centre',
        img: '/icons/items/refined-teak-planks.webp',
        description: 'A Construction level of 70 is required.',
        tier: 'Medium',
        categories: [COMP, RUNESCORE],
    },
    {
        taskId: 'MRYQ',
        hrid: 'fort forinthry command centre 3',
        name: 'Construct the third tier of the Fort Forinthry Command Centre',
        img: '/icons/items/refined-mahogany-planks.webp',
        description: 'A Construction level of 99 is required.',
        tier: 'Master',
        categories: [COMP, RUNESCORE],
    },
    {
        taskId: 'MMEE',
        hrid: 'fort forinthry kitchen 1',
        name: 'Construct the first tier of the Fort Forinthry Kitchen',
        img: '/icons/items/kitchen-knife.webp',
        description: 'Requires partial completion of the "Murder On The Border" quest. It requires 24 limestone bricks and 72 oak planks.',
        tier: 'Easy',
        categories: [MQC, COMP, RUNESCORE],
    },
    {
        taskId: 'ZMKB',
        hrid: 'fort forinthry kitchen 2',
        name: 'Construct the second tier of the Fort Forinthry Kitchen',
        img: '/icons/items/kitchen-knife.webp',
        description: 'A Construction level of 55 is required.',
        tier: 'Medium',
        categories: [COMP, RUNESCORE],
    },
    {
        taskId: '7GXQ',
        hrid: 'fort forinthry kitchen 3',
        name: 'Construct the third tier of the Fort Forinthry Kitchen',
        img: '/icons/items/kitchen-knife.webp',
        description: 'A Construction level of 80 is required.',
        tier: 'Elite',
        categories: [COMP, RUNESCORE],
    },

    {
        taskId: 'YA04',
        hrid: 'fort forinthry guardhouse 1',
        name: 'Construct the first tier of the Fort Forinthry Guardhouse',
        img: '/icons/items/refined-teak-planks.webp',
        description: 'Requires partial completion of the "Unwelcome Guests" quest.',
        tier: 'Easy',
        categories: [MQC, COMP, RUNESCORE],
    },
    {
        taskId: 'YA05',
        hrid: 'fort forinthry guardhouse 2',
        name: 'Construct the second tier of the Fort Forinthry Guardhouse',
        img: '/icons/items/refined-teak-planks.webp',
        description: 'A Construction level of 77 is required.',
        tier: 'Hard',
        categories: [COMP, RUNESCORE],
    },
    {
        taskId: 'YA06',
        hrid: 'fort forinthry guardhouse 3',
        name: 'Construct the third tier of the Fort Forinthry Guardhouse',
        img: '/icons/items/refined-mahogany-planks.webp',
        description: 'A Construction level of 97 is required.',
        tier: 'Master',
        categories: [COMP, RUNESCORE],
    },
] satisfies TaskDto[])
.sort((a, b) => a.hrid.localeCompare(b.hrid));

