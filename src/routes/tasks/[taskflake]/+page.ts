
import { TASKS } from "$lib/example-data/example-tasks"
import { findSubtasks, findTask } from "$lib/example-data/placeholder-functions"
import { error } from "@sveltejs/kit"

export function load({ params }) {
    const task = findTask(params.taskflake)
    
    if (task === undefined) {
        throw error(404, {
            message: 'Not found'
        })
    }

    const parent = task.parent ? TASKS.find(t => t.taskId === task.parent) : undefined

    const subtasks = findSubtasks(task)

    return { task, parent, subtasks }
}