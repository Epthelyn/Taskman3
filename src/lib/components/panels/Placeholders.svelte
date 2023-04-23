<script lang="ts">
	import { placeholderData } from '$lib/example-data/placeholder-data';
	import Expand from '../common/icons/expand-icon.svelte';
	import PanelTabs from '../common/panel-tabs.svelte';
	import '$lib/styles/task-list-styles.css';
	import TaskComplete from '../common/icons/TaskComplete.svelte';
	import { findTask } from '$lib/example-data/placeholder-functions';
	import { goto } from '$app/navigation';
	import type { TaskDto } from '$lib/types/taskman-api-types';

	const placeholders = placeholderData;
	const tabs = ['Group PvM', 'Timegated Tasks', 'Other Placeholders'];

	let openActivities: string[] = [];
	$: selectedTab = tabs[0];

	function toggleCategory(activity: string) {
		if (openActivities.includes(activity)) {
			openActivities = openActivities.filter((a) => a !== activity);
		} else {
			openActivities = [...openActivities, activity];
		}
	}

	const selectTab = (tabSwitchEvent: CustomEvent<string>) => {
		selectedTab = tabSwitchEvent.detail;
	}

	const timegatedTasks = ['MRG6'].map(taskId => findTask(taskId)).filter(task => task !== undefined) as TaskDto[]

	function openTask(taskId: string) {
		goto(`/tasks/${taskId}`)
	}
</script>

<section class="basic-section">
	<PanelTabs {tabs} on:selectTab={selectTab} />

	{#if selectedTab === 'Group PvM'}
		<div class="placeholder-container">
			{#each placeholders as placeholder}
				<div class="activity-head">
					<div
						class="activity-toggle"
						on:click={() => toggleCategory(placeholder.activity)}
						on:keydown={() => toggleCategory(placeholder.activity)}
					>
						<Expand invert={openActivities.includes(placeholder.activity)} />
					</div>
					<div class="placeholder-title">
						<a href="#">{placeholder.activity}</a>
					</div>
				</div>
				{#if openActivities.includes(placeholder.activity)}
					<div class="placeholder-row">
						<img src={placeholder.img} alt={placeholder.activity} class="placeholder-img" />
						{#each placeholder.items as item}
							<div
								class="placeholder"
								class:disabled={!item.unlocked}
								class:completed={item.completed}
							>
								<img 
									src={item.img} 
									alt={item.item}
									title="{item.item}" /> <!-- TODO: If obtained add: obtained at X KC -->
							</div>
						{/each}
					</div>
				{/if}
			{/each}
		</div>
	{:else if selectedTab === 'Timegated Tasks'}
		{#each timegatedTasks as task}
		<div class="task-item" 
				on:click={() => openTask(task.taskId)}
				on:keydown={() => openTask(task.taskId)}>
			
				<img class="task-icon" src={task.img} alt={task.name} />
			<div class="task-details">
				<div class="task-name">{task.name}</div>
				<div class="task-description">{task.description}</div>
			</div>
            <div class="task-toggle">
                <TaskComplete />
            </div>
		</div>
		{/each}
	{:else if selectedTab === 'Other Placeholders'}
		... TODO ...
	{/if}
</section>

<style>
	.placeholder-title {
		display: block;
		font-size: 1.25rem;
		font-weight: 600;
	}

	.placeholder-title a,
	.placeholder-title a:hover,
	.placeholder-title a:visited {
		color: var(--color-primary);
		text-decoration: none;
	}

	.placeholder-container {
		margin-bottom: 24px;
		padding: 0 40px;
	}

	.placeholder-row {
		display: flex;
		gap: 16px;
	}

	.placeholder-img {
		display: block;
		height: 64px;
		width: 64px;
	}

	.placeholder {
		background-color: var(--color-bg-gray);
		height: 64px;
		width: 64px;
		border-radius: 8px;
	}

	.placeholder.disabled {
		opacity: 25%;
	}

	.placeholder.completed {
		background-color: var(--color-completed);
	}

	.placeholder img {
		height: 40px;
		widows: 40px;
		margin: 12px;
	}

	.placeholder:not(.completed) img {
		filter: grayscale(100%);
	}

	.activity-head {
		display: flex;
		padding-bottom: 4px;
		margin-top: 24px;
		margin-bottom: 16px;
	}

	.activity-toggle {
		height: 16px;
		width: 16px;
		margin: 4px 8px 4px 0;
		flex: 0 0 auto;
		cursor: pointer;
	}
</style>
