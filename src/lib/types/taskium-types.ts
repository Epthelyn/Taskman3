import type { TierDto } from "./taskman-api-types"

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

// export type 
export type TaskStatus = 'inactive' | 'completed' | 'placeholder' | 'skipped'

export type Milestone = {
    milestoneId: string,
    name: string
    description: string,
    img: string,
    tier: TierDto,
    completed: boolean
}

export type UnlockStatus = 'locked' | 'unlocked' | 'completed'

export type Unlock = {
    unlockId: string,
    taskId: string,
    name: string,
    unlocked: boolean,
}

export type IUnlockCategory = {
    name: string,
    // img: string,
    unlocks: IUnlock[]
}

export type IUnlock = {
    unlockId: string,
    startTaskId: string,
    endTaskId?: string,
    shortDescription: string,
    longDescription?: string,
    img: string,
    unlocked: UnlockStatus,
}

export type TaskmanStatus = 'taskman' | 'taskmain'
export type IronmanStatus = 'main' | 'ironman' | 'hardcore'
export const TaskmanStatusEntries: TaskmanStatus[] = ['taskman', 'taskmain']
export const IronmanStatusEntries: IronmanStatus[] = ['main', 'ironman', 'hardcore']

export type Character = {
    rsn: string,
    taskmanStatus: TaskmanStatus,
    ironmanStatus: IronmanStatus,
}
