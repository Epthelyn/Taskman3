import type { CategoryId } from "$lib/example-data/example-categories"
import type { IronmanStatus, TaskmanStatus } from "./taskium-types"

export type Placeholder = {
    activity: string,
    img: string,
    items: PlaceholderItem[]
}

export type PlaceholderItem = {
    item: string,
    img: string,
    completed: boolean,
    unlocked: boolean
}

export type CategoryDto = {
    categoryId: CategoryId,
    name: string,
    img: string,
    filterable: boolean,
}

export type TierDto = {
    position: number,
    name: Tier
}

// export type 
export type TaskStatus = 'inactive' | 'completed' | 'placeholder' | 'skipped'

export type Tier = 'Beginner' | 'Easy' | 'Medium' | 'Hard' | 'Elite' | 'Master' | 'Legendary' | 'God' | 'Passive'

export type TaskDto = {
    taskId: string,
    hrid: string,
    name: string
    description: string,
    img: string,
    categories: CategoryId[],
    tier?: Tier,
    subtasks?: string[],
    parent?: string,
    uniqueSet?: string,
}

export type Milestone = {
    milestoneId: string,
    name: string
    description: string,
    img: string,
    tier: TierDto,
    completed: boolean
}

export type UnlockStatus = 'locked' | 'unlocked' | 'completed'


export type UnlockCategory = {
    name: string,
    unlocks: Unlock[]
}

export type Unlock = {
    unlockId: string,
    startTaskId: string,
    endTaskId?: string,
    shortDescription: string,
    longDescription?: string,
    img: string,
    unlocked: UnlockStatus,
}

export type Unique = {
    uniqueId: string,
    name: string,
    img: string
}

export type UniqueSet = {
    uniqueSetId: string,
    name: string,
    uniques: Unique[]
}

export type ClientUser = {
    userId: number,
    isAdmin: boolean,
    selectedCharacter: number
}

export type Character = {
    characterId: number,
    rsn: string,
    taskmanStatus: TaskmanStatus,
    ironmanStatus: IronmanStatus,
}