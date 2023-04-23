<script lang="ts">
	import { MILESTONES } from "$lib/example-data/placeholder-data"
	import "$lib/styles/task-list-styles.css"

    $: milestones = MILESTONES
</script>

<section>
    <h2>Milestones</h2>

    {#each milestones as milestone}
		<div class="task-item" class:task-completed={milestone.completed}>
			<img class="task-icon" src={milestone.img} alt={milestone.name} />
			<div class="task-details">
				<div class="task-name">
					{milestone.name}
				</div>
				<div class="task-description">{milestone.description}</div>
			</div>
		</div>
	{/each}
</section>

