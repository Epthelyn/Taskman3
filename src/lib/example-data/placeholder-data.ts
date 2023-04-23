import type { IUnlockCategory, Milestone, Placeholder } from "$lib/types/taskium-types";
import { MEDIUM_TIER } from "./example-tiers";

export const placeholderData: Placeholder[] = [{
    activity: 'Kalphite King',
    img: '/icons/bosses/kalphite-king-256.webp',
    items: [{
        item: 'Off-hand drygore mace',
        img: '/icons/items/off-hand-drygore-mace.webp',
        completed: false,
        unlocked: true
    }, {
        item: 'Drygore mace',
        img: '/icons/items/drygore-mace.webp',
        completed: false,
        unlocked: true
    }, {
        item: 'Drygore mace',
        img: '/icons/items/drygore-mace.webp',
        completed: false,
        unlocked: true
    }, {
        item: 'Drygore mace',
        img: '/icons/items/drygore-mace.webp',
        completed: false,
        unlocked: true
    }, {
        item: 'Drygore mace',
        img: '/icons/items/drygore-mace.webp',
        completed: false,
        unlocked: false
    }, {
        item: 'Drygore mace',
        img: '/icons/items/drygore-mace.webp',
        completed: false,
        unlocked: false
    }, {
        item: 'Drygore mace',
        img: '/icons/items/drygore-mace.webp',
        completed: false,
        unlocked: false
    }, {
        item: 'Drygore mace',
        img: '/icons/items/drygore-mace.webp',
        completed: false,
        unlocked: false
    }]
}, {
    activity: 'Kerapac',
    img: '/icons/bosses/kerapac-256.webp',
    items: [{
        item: 'Greater Concentrated blast ability codex',
        img: '/icons/items/greater-concentrated-blast-ability-codex.webp',
        completed: true,
        unlocked: true
    },{
        item: 'Fractured Armadyl symbol',
        img: '/icons/items/fractured-armadyl-symbol.webp',
        completed: true,
        unlocked: true
    },{
        item: 'Kerapac\'s wrist wraps',
        img: '/icons/items/kerapacs-wrist-wraps.webp',
        completed: false,
        unlocked: true
    },{
        item: 'Scripture of Jas',
        img: '/icons/items/scripture-of-jas.webp',
        completed: false,
        unlocked: false
    },{
        item: 'Fractured Stabiliation Gem',
        img: '/icons/items/fractured-stabilisation-gem.webp',
        completed: false,
        unlocked: false
    },{
        item: 'Staff of Armadyl\'s fractured shaft',
        img: '/icons/items/staff-of-armadyls-fractured-shaft.webp',
        completed: false,
        unlocked: false
    },{
        item: 'Kerapac\'s mask piece',
        img: '/icons/items/kerapacs-mask-piece.webp',
        completed: false,
        unlocked: false
    }]
}, {
    activity: 'Temple of Aminishi',
    img: '/icons/bosses/seiryu.webp',
    items: [{
        item: 'Fishy Treat',
        img: '/icons/items/fishy-treat.webp',
        completed: true,
        unlocked: true
    }, {
        item: 'Crassian Allegiance',
        img: '/icons/items/fishy-treat.webp',
        completed: false,
        unlocked: false
    }, {
        item: 'Masuta\'s warspear',
        img: '/icons/items/fishy-treat.webp',
        completed: false,
        unlocked: false
    }, {
        item: 'Himiko\'s Vision',
        img: '/icons/items/fishy-treat.webp',
        completed: false,
        unlocked: false
    }, {
        item: 'Ancient scale',
        img: '/icons/items/fishy-treat.webp',
        completed: false,
        unlocked: false
    }, {
        item: 'Kuroryu',
        img: '/icons/items/fishy-treat.webp',
        completed: false,
        unlocked: false
    }]
}]

export const MILESTONES: Milestone[] = [
    {
        milestoneId: 'MSME01',
        name: 'Complete the group PvM requirements for the Medium tier',
        img: '/icons/bosses/arch-glacor.webp',
        description: '1 out of 2 group PvM uniques are required to progress to the Hard tier.',
        tier: MEDIUM_TIER,
        completed: false
    },
    {
        milestoneId: 'MSME02',
        name: 'Complete the 125 passive task requirement for the Medium tier',
        img: '/icons/items/void-knight-book.webp',
        description: 'Completing 125 passive tasks is required to progress to the Hard tier.',
        tier: MEDIUM_TIER,
        completed: true
    }
]

export const UNLOCKS: IUnlockCategory[] = ([
    {
        name: 'Archeology',
        unlocks: [
            {
                unlockId: 'UNLZ7YJ',
                startTaskId: 'Z7YJ',
                img: '/icons/items/pylon-battery.webp',
                // img: '/icons/unlocks/arch-hand-in.webp',
                shortDescription: 'You are now allowed to study complete tomes, contribute to the Rex skeleton restoration and charge the Pylon whenever.',
                unlocked: 'locked'
            },
            {
                unlockId: 'UNLJKKR',
                startTaskId: 'JKKR',
                img: '/icons/unlocks/chronotes-20k2.webp',
                shortDescription: 'You are now allowed to keep 20,000 chronotes to be used for switching active relic powers.',
                longDescription: 'You are now allowed to keep 20,000 chronotes to be used for switching active relic powers. You may gather artifacts and relevant materials to restore these. You can only hand in previously completed collections.',
                unlocked: 'locked'
            }
        ]
    },
    {
        name: 'Crafting',
        unlocks: [
            {
                unlockId: 'UNLPVDY',
                startTaskId: 'PVDY',
                img: '/icons/unlocks/daves-spellbook2.webp',
                shortDescription: 'You are now allowed to restock teleports in Dave\'s spellbook (up to 100) whenever a tablet is running low.',
                unlocked: 'unlocked'
            }
        ]
    },
    {
        name: 'Cooking',
        unlocks: [
            {
                unlockId: 'UNL133J',
                startTaskId: '133J',
                img: '/icons/unlocks/food-300.webp',
                shortDescription: 'You are now allowed to cook 300 fish, whenever you have run out.',
                longDescription: 'You are now allowed to cook 300 fish, whenever you have run out. You can only cook fish you already meet the level requirements (Fishing/Cooking) for.',
                unlocked: 'unlocked'
            }
        ]
    },
    {
        name: 'Runecrafting',
        unlocks: [
            {
                unlockId: 'UNLNJWN',
                startTaskId: 'NJWN',
                img: '/icons/items/wicked-hood.webp',
                shortDescription: 'You are allowed to craft runes using the daily essence from the Wicked hood. You must use up all the essence in a single trip. You can enter the abyss for it, and you may bring a Demonic skull as well as full pouches, skilling outfits and familiars.',
                unlocked: 'unlocked'
            },
            {
                unlockId: 'UNLY379',
                startTaskId: 'Y379',
                img: '/icons/items/soul-rune.webp',
                shortDescription: 'You are now allowed to maintain a stack of 2000, 5000 and 10000 soul, blood and elemental runes, respectively. You may craft runes after exhaustion of stores.',
                unlocked: 'locked'	
            }
        ]
    },
    {
        name: 'Divination',
        unlocks: [
            {
                unlockId: 'UNLLB2G',
                startTaskId: 'LB2G',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'Chronicles can now be caught during Divination tasks',
                longDescription: 'Chronicles can now be caught during Divination tasks, even if your task does not require experience gains.',
                unlocked: 'locked'
            },
            {
                unlockId: 'UNL1X82',
                startTaskId: '1X82',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'Energies can now be gathered, if creation and/or transmutation of items will benefit your activities.',
                unlocked: 'locked'
            },
            {
                unlockId: 'UNLQ877',
                startTaskId: 'Q877',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'You may now participate in Guthixian caches whenever, until you have obtained the full Diviner\'s outfit',
                unlocked: 'locked'
            }
        ]
    },
    {
        name: 'Fletching',
        unlocks: [
            {
                unlockId: 'UNL67GK',
                startTaskId: '67GK',
                img: '/icons/items/bloodwood-logs.webp',
                shortDescription: 'You are allowed to chop bloodwood logs and fletch them into bakriminel bolts on a daily basis.',
                unlocked: 'locked'
            }
        ]
    },
    {
        name: 'Hunter',
        unlocks: [
            {
                unlockId: 'UNLP3N6',
                startTaskId: 'P3N6',
                img: '/icons/items/goblin-book.webp',
                shortDescription: '/implings and kamis found outside Puro-Puro can now be caught whenever.',
                unlocked: 'locked'
            },
            {
                unlockId: 'UNL794Z',
                startTaskId: '794Z',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'You are now allowed to keep a stack of 150 of each plain, gliding, swift, hasty and speedy whirligig shell, as well as a stack of 10 dazzling shells.',
                unlocked: 'locked'
            }
        ]
    },
    {
        name: 'Mining',
        unlocks: [
            {
                unlockId: 'UNLK4KD',
                startTaskId: 'K4KD',
                img: '/icons/items/red-sandstone.webp',
                // img: '/icons/unlocks/sandstone.webp',
                shortDescription: 'You are now allowed to mine the daily red and crystal sandstone when you meet their respective requirements.',
                unlocked: 'unlocked'
            },
            {
                unlockId: 'UNLK4KD',
                startTaskId: 'K4KD',
                img: '/icons/items/dark-animica-stone-spirit.webp',
                // img: '/icons/unlocks/stone-spirit.webp',
                shortDescription: 'You are now allowed to dig into your stone spirit storage at will.',
                longDescription: 'You are now allowed to dig into your stone spirit storage at will. You can continue mining a specific ore until you have run out of the respective stone spirit.',
                unlocked: 'unlocked'
            }
        ]
    },
    {
        name: 'Woodcutting',
        unlocks: [
            {
                unlockId: 'UNLKGGY',
                startTaskId: 'KGGY',
                img: '/icons/unlocks/overgrown-idol.webp',
                shortDescription: 'Overgrown idols can now be used as viable training method, if your activity requires Woodcutting experience.',
                unlocked: 'unlocked'
            }
        ]
    },
    {
        name: 'Passives',
        unlocks: [
            {
                unlockId: 'UNLD8KE',
                startTaskId: 'D8KE',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'You are now allowed to work on the passive task to "build a memorial for the Myreque".',
                unlocked: 'completed'
            },
            {
                unlockId: 'UNL4VJD',
                startTaskId: '4VJD',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'You are now allowed to work towards any material you are missing for the Blessed flask at will.',
                longDescription: 'You are now allowed to work towards any material you are missing for the Blessed flask at will. Chosen methods must adhere to §2, B. Once you own the required materials, you are allowed to craft the flask.',
                unlocked: 'locked'
            },
            {
                unlockId: 'UNL5R77',
                startTaskId: '5R77',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'You are now allowed to skill at the stations within the dream of Iaia until completion of the "To Dream, Perchance to Keep" achievement and its associated passive task.',
                unlocked: 'locked'	
            },
            {
                unlockId: 'UNL89W3',
                startTaskId: '89W3',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'You are now allowed to exhaust the Nexus of any remaining experience.',
                unlocked: 'completed'
            },
            {
                unlockId: 'UNLYDZZ',
                startTaskId: 'YDZZ',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'You are now allowed to attract and catch one of each of the 10 jadinko species each week, until you have received both the top and legs of the Witchdoctor outfit. You may also claim Mambo\'s potion from Pauline Polaris.',
                unlocked: 'locked'
            },
            {
                unlockId: 'UNLV45G',
                startTaskId: 'V45G',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'You are now allowed to actively work towards the task to Hand in dust to a RuneSphere 25 times, until you have completed the task',
                unlocked: 'locked'
            },
            {
                unlockId: 'UNLMZ72',
                startTaskId: 'MZ72',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'You are now allowed to actively work towards the task to Balance on a Serenity post 25 times, until you have completed the task.',
                unlocked: 'locked'
            },
            {
                unlockId: 'UNL94ZN',
                startTaskId: '94ZN',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'You are now allowed to actively work towards the tasks to buy various items from the Herby Werby shop, until you have completed the tasks.',
                unlocked: 'locked'
            },
            {
                unlockId: 'UNL4VD4',
                startTaskId: '4VD4',
                img: '/icons/items/goblin-book.webp',
                shortDescription: 'You are now allowed to actively work towards the task to obtain all five god chisels, until you have completed the task.',
                unlocked: 'locked'
            }
        ]
    }
] satisfies IUnlockCategory[])
.sort((a, b) => a.name.localeCompare(b.name))
