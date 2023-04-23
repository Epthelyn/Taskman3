<script lang="ts">
	import { goto, invalidate } from "$app/navigation";
	import { CATEGORIES } from "$lib/example-data/example-categories";
	import { findCategory } from "$lib/example-data/placeholder-functions";
    import "$lib/styles/task-list-styles.css"
    // import { page } from "$app/stores"
	// import { TASKS } from "$lib/example-data/placeholder-data";
	// import { error } from "@sveltejs/kit";
    
    // $: taskflake = $page.params.taskflake


    // const task = TASKS.find(task => task.taskId === taskflake)

    export let data;
    $: task = data.task
    $: parent = data.parent
    $: subtasks = data.subtasks
    $: categories = data.task.categories.map(category => findCategory(category))

    function openTask(taskId: string) {
		goto(`/tasks/${taskId}`)
	}
</script>

<main class="basic-section">
    <h2>Task {task.taskId}</h2>

    <h3>{task.name}</h3>

    <div class="task-container">
        <img src={task.img} alt="{task.name}" />
        <div class="task-description">{task.description}</div>
    </div>
    <div class="category-container">
        <strong>Categories: </strong>
        {#if categories.length === 0}
            <span>None</span>
        {:else}
        {#each categories as category}
            <img src={category.img} alt={category.name} title={category.name} />
        {/each}
        {/if}
    </div>
</main>

{#if subtasks !== undefined && subtasks.length > 0}
<section class="subtasks">
    <h2>Subtasks</h2>
    {#each subtasks as subtask}
		<div class="task-item"
                on:click={() => openTask(subtask.taskId)}
                on:keydown={() => openTask(subtask.taskId)}>
			<img class="task-icon" src={subtask.img} alt={subtask.name} />
			<div class="task-details">
				<div class="task-name">
					{subtask.name}
				</div>
				<div class="task-description">{subtask.description}</div>
			</div>
		</div>
	{/each}
</section>
{/if}

{#if parent !== undefined}
<section class="parent-task">
    <h2>Parent</h2>
    <div class="task-item"
            on:click={() => {if(parent) openTask(parent.taskId)}}
            on:keydown={() => {if(parent) openTask(parent.taskId)}}>
        <img class="task-icon" src={parent.img} alt={parent.name} />
        <div class="task-details">
            <div class="task-name">
                {parent.name}
            </div>
            <div class="task-description">{parent.description}</div>
        </div>
    </div>
</section>
{/if}

<style>
    h3,
    .category-container,
    .task-container {
        margin-top: 24px;
        padding-left: 40px;
        padding-right: 40px;
        align-items: center;
    }

    .task-container {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 24px;
    }

    .task-container img {
        height: 64px;
        width: 64px;
        margin-right: 32px;
    }

    .task-description {
        flex: 1 1 0;
    }

    @media screen and (max-width: 500px) {
		.subtasks .task-description,
        .parent-task .task-description {
			display: none;
		}
	}

    .category-container {
        line-height: 24px;
        margin-top: 8px;
        margin-bottom: 24px;
    }

    .category-container img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-left: 12px;
    }
</style>