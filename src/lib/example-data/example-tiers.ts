import type { TierDto } from "$lib/types/taskman-api-types"

export const BEGINNER_TIER: TierDto = {
    position: 1,
    name: 'Beginner'
}

export const EASY_TIER: TierDto = {
    position: 2,
    name: 'Easy'
}

export const MEDIUM_TIER: TierDto = {
    position: 3,
    name: 'Medium'
}

export const HARD_TIER: TierDto = {
    position: 4,
    name: 'Hard' 
}

export const ELITE_TIER: TierDto = {
    position: 5,
    name: 'Elite'
}

export const MASTER_TIER: TierDto = {
    position: 6,
    name: 'Master'
}

export const LEGENDARY_TIER: TierDto = {
    position: 7,
    name: 'Legendary'
}

export const GOD_TIER: TierDto = {
    position: 7,
    name: 'God'
}

export const PASSIVE_TIER: TierDto = {
    position: 8,
    name: 'Passive'
}


export const TIER_LIST: TierDto[] = [
    BEGINNER_TIER,
    EASY_TIER,
    MEDIUM_TIER,
    HARD_TIER,
    ELITE_TIER,
    MASTER_TIER,
    LEGENDARY_TIER,
    GOD_TIER,
    PASSIVE_TIER
]