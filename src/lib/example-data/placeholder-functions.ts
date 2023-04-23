import type { TaskDto, Tier } from "$lib/types/taskman-api-types"
import { CATEGORIES, type CategoryId } from "./example-categories"
import { TASKS } from "./example-tasks"
import { UNIQUE_SETS } from "./example-uniques"

export function findTask(taskId: string) {
    return TASKS.find(task => {
        if (task.taskId === taskId) {
            return true
        }
    })
}

export function findCategory(categoryId: CategoryId) {
    const category = CATEGORIES.get(categoryId)
    if (category === undefined) {
        throw new Error(`Category ${categoryId} not found`)
    }
    return category
}

export function findUniques(uniqueSetId: string) {
    const uniqueSet = UNIQUE_SETS.get(uniqueSetId)
    if (uniqueSet === undefined) {
        throw new Error(`Unique Set ${uniqueSetId} not found`)
    }
    return uniqueSet.uniques
}

export function findSubtasks(parentTask: TaskDto) {
    if (parentTask.subtasks === undefined) {
        return []
    }
    return parentTask.subtasks
        .map(subtaskId => findTask(subtaskId))
        .filter(task => task !== undefined) as TaskDto[]
}

export function filterTasksByTier(tasks: TaskDto[], tier = 'All'): (TaskDto & { tier: Tier })[] {
    const tieredTasks = tasks.filter(task => task.tier !== undefined) as (TaskDto & { tier: Tier })[]
    if (tier !== 'All') {
        return tieredTasks.filter(task => task.tier === tier)
    }
	return tieredTasks
}

export function filterTasksByCategory(tasks: TaskDto[], category: string): TaskDto[] {
    if (category === 'all') return tasks
    return tasks.filter(task => task.categories.includes(category as CategoryId))
}

export function searchTask(tasks: TaskDto[], query: string) {
    if(query === '') return tasks

    return tasks.map(task => {
        let matchScore = 0

        if (task.name.toLowerCase().includes(query.toLowerCase())) {
            matchScore = 3
        } else if (task.description.toLowerCase().includes(query.toLowerCase())) {
            matchScore = 1
        }

        if (matchScore == 0 && task.uniqueSet) {
            const uniques = findUniques(task.uniqueSet)
            const matchUnique = uniques.find(unique => unique.name.toLowerCase().includes(query.toLowerCase()))
            if (matchUnique) {
                matchScore = 2
            }
        }
        
        return { task, matchScore }
    })
    .filter(task => task.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .map(wrapper => wrapper.task)
}