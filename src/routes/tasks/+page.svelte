<script lang="ts">
	import { goto } from '$app/navigation';
	import Expand from '$lib/components/common/icons/expand-icon.svelte';
	import TaskComplete from '$lib/components/common/icons/TaskComplete.svelte';
	import PaginationFooter from '$lib/components/common/pagination-footer.svelte';
	import { TASKS } from '$lib/example-data/example-tasks';
	import { filterTasksByCategory, filterTasksByTier, findSubtasks, searchTask } from '$lib/example-data/placeholder-functions';
	import type { TaskDto } from '$lib/types/taskman-api-types';
	import TaskSearch from './task-search.svelte';
	import TierSelector from './tier-selector.svelte';

	let tasks: TaskDto[]
	let searchQuery = '';
	let categoryFilter: string;
	let selectedTier: string = 'All';
	let currentPage = 1
	let unpaginatedTaskCount: number
	const tasksPerPage = 25

	$: ({ tasks, unpaginatedTaskCount, currentPage } = filterTasks(TASKS, selectedTier, searchQuery, categoryFilter, currentPage))

    let expandedTask: string | null = null

	const selectTier = (event: CustomEvent<string>) => {
		currentPage = 1
        expandedTask = null
		selectedTier = event.detail
	};

	function filterTasks(tasks: TaskDto[], tier: string, searchQuery: string, category: string, currentPage: number) {
		let tierFilter = tier === 'All' ? undefined : tier
		let filteredTasks: TaskDto[] = filterTasksByTier(tasks, tierFilter)
		filteredTasks = filterTasksByCategory(filteredTasks, categoryFilter)
		filteredTasks = searchTask(filteredTasks, searchQuery)
		
		if (Math.ceil(filteredTasks.length / tasksPerPage) < currentPage) {
			currentPage = 1
		}

		return {
			currentPage,
			unpaginatedTaskCount: filteredTasks.length,
			tasks: filteredTasks.splice((currentPage - 1) * tasksPerPage, tasksPerPage)
		}
	}

    const unwrapSubtasks = (event: Event, taskId: string) => {
		event.stopPropagation()
        tasks = tasks.filter(task => !task.parent)
        if (expandedTask !== taskId) {
            const parentId = tasks.findIndex(task => task.taskId === taskId)
            const subtasks = findSubtasks(tasks[parentId])
            if (subtasks !== undefined) {
                expandedTask = taskId
                tasks.splice(parentId + 1, 0, ...subtasks)
            }
        } else {
            expandedTask = null
        }
    }

	function openTask(taskId: string) {
		goto(`/tasks/${taskId}`)
	}
</script>

<main>
	<TierSelector on:selectTier={selectTier} />

	<TaskSearch bind:searchQuery={searchQuery} bind:selectedCategory={categoryFilter} />

	{#each tasks as task}
		<div class="task-item" class:subtask-item={task.parent !== undefined} 
				on:click={() => openTask(task.taskId)}
				on:keydown={() => openTask(task.taskId)}>

			<img class="task-icon" src={task.img} alt={task.name} />
			<div class="task-details">
				<div class="task-name">
					{task.name}
					<span class="task-id">({task.taskId})</span>
				</div>
				<div class="task-description">{task.description}</div>
			</div>
			<div class="task-toggle" 
					on:click={(event) => unwrapSubtasks(event, task.taskId)}
					on:keydown={(event) => unwrapSubtasks(event, task.taskId)}>
				{#if task.subtasks}
					<Expand invert={task.taskId === expandedTask}/>
				{:else}
					<TaskComplete />
				{/if}
			</div>
		</div>
	{/each}
	<PaginationFooter totalElements={unpaginatedTaskCount} elementsPerPage={tasksPerPage} bind:currentPage={currentPage} />
</main>

<style>

	.task-item {
		padding: 16px 0;
		display: flex;
		align-items: center;
	}

    .subtask-item {
        background-color: #202736;
    }

	.task-icon {
		height: 48px;
		width: 48px;
		padding: 16px 32px;
	}

	.task-details {
		flex: 1 1 auto;
	}

	.task-name {
		font-size: 1.1em;
		font-weight: 600;
	}

	.task-item:not(:last-child) {
		border-bottom: 1px solid var(--color-bg-gray);
	}

	.task-id {
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.8em;
		padding: 0 8px;
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.4s ease;
	}

	.task-item:hover .task-id {
		visibility: visible;
		opacity: initial;
	}

	.task-toggle {
		flex: 0 0 auto;
		height: 24px;
		margin-left: 32px;
		margin-right: 32px;
		width: 24px;
		padding: 8px 16px;
		border-radius: 8px;
		background-color: var(--color-primary);
		color: var(--color-bg-dark);
		cursor: pointer;
	}

	@media screen and (max-width: 500px) {
		.task-description,
		.task-toggle {
			display: none;
		}

		.task-details {
			padding-right: 32px;
		}

		.task-item .task-id {
			display: none;
		}

		main {
			margin-top: 0;
		}
	}
</style>
