<script lang="ts">
	import { UNLOCKS } from '$lib/example-data/placeholder-data'

	$: unlocks = UNLOCKS.map(category => {
        return category.unlocks.map(unlock => {
            return {
                ...unlock,
                category: category.name
            }
        })
    }).flat();

</script>

<main>
	{#each unlocks as unlock}
		<div class="task-item" class:unlock-active={unlock.unlocked === 'unlocked'}
                class:unlock-completed={unlock.unlocked === 'completed'}
				id={unlock.unlockId}>
			<img class="task-icon" src={unlock.img} alt={unlock.shortDescription} />
			<div class="task-details">
				<div class="unlock-description">
					{unlock.longDescription ? unlock.longDescription : unlock.shortDescription}
					<!-- <span class="task-id">({unlock.unlockId})</span> -->
                    <div class="unlock-category">Category: {unlock.category}</div>
				</div>
                
			</div>
		</div>
	{/each}
</main>

<style>
	.task-item {
		padding: 16px 0;
		display: flex;
		align-items: center;
	}

	.task-icon {
		height: 48px;
		width: 48px;
		padding: 16px 32px;
	}

	.task-details {
		flex: 1 1 auto;
	}

	.unlock-description {
		padding-right: 16px;
	}

	.task-item:not(:last-child) {
		border-bottom: 1px solid var(--color-bg-gray);
	}

    .unlock-category {
        font-weight: bold;
    }

    .task-item.unlock-active {
        background-color: var(--color-completed);
    }

    .task-item.unlock-completed {
        background-color: var(--color-warning-dark);
    }
</style>