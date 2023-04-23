import type { UniqueSet } from "$lib/types/taskman-api-types";

export const UNIQUE_SETS: Map<string, UniqueSet> = new Map([
    ['AgilityCodex', {
        uniqueSetId: 'AgilityCodex',
        name: 'Agility Codex',
        uniques: [{
            uniqueId: 'DoubleSurge',
            name: 'Double Surge',
            img: '/icons/tasks/double-surge-codex.webp'
        }, {
            uniqueId: 'DoubleEscape',
            name: 'Double Escape',
            img: '/icons/tasks/double-escape-codex.webp'
        }]
    }],
    ['MagisterBlessing', {
        uniqueSetId: 'MagisterBlessing',
        name: 'Magister Blessing',
        uniques: [{
            uniqueId: 'BlessingOfTheSky',
            name: 'Blessing of the Sky',
            img: '/icons/items/blessing-of-the-sky.webp'
        }, {
            uniqueId: 'BlessingOfTheSea',
            name: 'Blessing of the Sea',
            img: '/icons/items/blessing-of-the-sea.webp'
        }, {
            uniqueId: 'BlessingOfTheSand',
            name: 'Blessing of the Sand',
            img: '/icons/items/blessing-of-the-sand.webp'
        }]
    }]
])