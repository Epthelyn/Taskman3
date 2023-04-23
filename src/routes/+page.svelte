<script lang="ts">
	import AdminMessage from "$lib/components/panels/AdminMessage.svelte";
    import Unlocks from "$lib/components/panels/Unlocks.svelte";
    import Milestones from "$lib/components/panels/Milestones.svelte";
    import Placeholders from "$lib/components/panels/Placeholders.svelte";
	import RotationsPanel from "$lib/components/panels/rotations-panel.svelte";

	import { findCategory, findTask } from "$lib/example-data/placeholder-functions";
	import TextInput from "$lib/components/ui/text-input.svelte";
	import NumberInput from "$lib/components/ui/number-input.svelte";

    $: currentTask = findTask('3NE3')
    $: categories = currentTask ? currentTask.categories.map(category => findCategory(category)) : []
</script>

<AdminMessage 
    title="Taskman v3 Demo" 
    message="This is an early demo to show off the new features that could make it to Taskman v3." 
    level="warning" />

<div class="split-sections-container">
    <section>
        <h2>Current Task</h2>

        {#if currentTask !== undefined}
            <h3>{currentTask.name}</h3>

            <div class="task-container">
                <img src={currentTask.img} alt="{currentTask.name}" />
                <div class="task-description">{currentTask.description}</div>
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

            <form>
                <div class="task-time-container">
                    <div>
                        <label for="task-time-days">Days</label>
                        <NumberInput id={'task-time-days'} min={0} />
                    </div>
                    <div>
                        <label for="task-time-hours">Hours</label>
                        <NumberInput id={'task-time-hours'} min={0} />
                    </div>
                </div>
                <div class="task-buttons-row">
                    <button class="secondary" type="submit">Regenerate Task</button>
                    <button class="primary" type="submit">Complete Task</button>
                </div>
            </form>
        {:else}
            <h2>No active task</h2>
        {/if}
    </section>

    <RotationsPanel />
</div>

<Placeholders />

<Unlocks />

<Milestones />

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
        height: 128px;
        width: 128px;
        margin-right: 32px;
    }

    .task-description {
        flex: 1 1 0;
    }

    @media screen and (max-width: 500px) {
		.task-container {
			display: block;
            text-align: center;
		}

        .task-container img {
            height: initial;
            width: 100%;
            max-width: 128px;
            margin: 0 0 16px 0;
        }

        .task-container .task-description {
            text-align: left;
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

    form {
        margin: 0 39px;
        margin-left: calc(env(safe-area-inset-left) * -1);
        margin-right: calc(env(safe-area-inset-right) * -1);
        padding-left: calc(env(safe-area-inset-left) + 39px);
        padding-right: calc(env(safe-area-inset-right) + 39px);
    }

    .task-time-container {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
    }

    .task-time-container div {
        flex: 1 1 0;
    }
    
    form label {
        display: block;
        padding: 1px;
        font-weight: 600;
    }

    .task-buttons-row {
        padding: 16px 1px 24px;
        display: flex;
        gap: 16px;
        /* margin-bottom: 16px; */
    }

    .task-buttons-row button {
        box-sizing: border-box;
        flex: 1 1 0;
        height: 40px;
        padding: 8px 16px;
        border-radius: 8px;
        border: none;
        color: white;
        font-weight: 600;
        cursor: pointer;
    }

    button.primary {
        background-color: var(--color-primary-dark);
    }

    button.primary:hover {
        background-color: var(--color-primary);
    }

    button.secondary {
        background-color: var(--color-bg-gray);
    }

    button.secondary:hover {
        background-color: #67696F;
    }

</style>