import type { CategoryDto } from "$lib/types/taskman-api-types"


export type CategoryId = 'COMP' | 'TRIM' | 'MQCA' | 'MMAX' | 'PVMA' | 'BOSL' | 'SLAL' 
    | 'CLUL' | 'COST' | 'SCOR' | 'CRAF' | 'RESO' | 'MIGA'

export const COMP = 'COMP'
export const TRIM = 'TRIM'
export const MQC = 'MQCA'
export const MASTER_MAX = 'MMAX'
export const PVM_ACHIEVEMENTS = 'PVMA'
export const BOSS_LOG = 'BOSL'
export const SLAYER_LOG = 'SLAL'
export const CLUE_LOG = 'CLUL'
export const COSTUME_ROOM = 'COST'
export const RUNESCORE = 'SCOR'
export const CRAFTING = 'CRAF'
export const RESOURCES = 'RESO'
export const MINIGAMES = 'MIGA'

export const CATEGORIES: Map<CategoryId, CategoryDto> = new Map([
    ['COMP', {
        categoryId: 'COMP',
        name: 'Completionist Cape',
        img: '/icons/categories/comp-cape.webp',
        filterable: true,
    }],
    ['TRIM', {
        categoryId: 'TRIM',
        name: 'Completionist Cape (t)',
        img: '/icons/categories/trimmed-comp-cape.webp',
        filterable: true,
    }],
    ['MQCA', {
        categoryId: 'MQCA',
        name: 'Master Quest Cape',
        img: '/icons/categories/quests.webp',
        filterable: true,
    }],
    ['MMAX', {
        categoryId: 'MMAX',
        name: 'Master max cape',
        img: '/icons/categories/master-max-cape.webp',
        filterable: true,
    }],
    ['PVMA', {
        categoryId: 'PVMA',
        name: 'PvM Achievements',
        img: '/icons/categories/placeholder.webp',
        filterable: true,
    }],
    ['BOSL', {
        categoryId: 'BOSL',
        name: 'Boss Log',
        img: '/icons/categories/placeholder.webp',
        filterable: true,
    }],
    ['SLAL', {
        categoryId: 'SLAL',
        name: 'Slayer Log',
        img: '/icons/categories/placeholder.webp',
        filterable: true,
    }],
    ['CLUL', {
        categoryId: 'CLUL',
        name: 'Clue Log',
        img: '/icons/categories/placeholder.webp',
        filterable: true,
    }],
    ['COST', {
        categoryId: 'COST',
        name: 'Costume Room',
        img: '/icons/categories/placeholder.webp',
        filterable: false,
    }],
    ['SCOR', {
        categoryId: 'SCOR',
        name: 'Runescore',
        img: '/icons/categories/placeholder.webp',
        filterable: true,
    }],
    ['CRAF', {
        categoryId: 'CRAF',
        name: 'Crafting',
        img: '/icons/categories/placeholder.webp',
        filterable: false,
    }],
    ['RESO', {
        categoryId: 'RESO',
        name: 'Resources',
        img: '/icons/categories/placeholder.webp',
        filterable: false,
    }],
    ['MIGA', {
        categoryId: 'MIGA',
        name: 'Minigames',
        img: '/icons/categories/minigame-category.webp',
        filterable: false,
    }],
])
