<script lang="ts">
	import { TIER_LIST } from '$lib/example-data/example-tiers';
    import { createEventDispatcher } from 'svelte'

	const tiers = TIER_LIST;
    const dispatch = createEventDispatcher()
    let selectedTier: string = 'All'

    const selectTier = (event: MouseEvent | KeyboardEvent, tierName: string) => {
        if (event instanceof MouseEvent || event instanceof KeyboardEvent && event.key === 'Enter') {
            selectedTier = tierName
            dispatch('selectTier', selectedTier)
        }
    }
</script>

<div class="tab-section">
    <div class="tab" class:selected={selectedTier=='All'}
        tabindex="0"
        role="button"
        on:keydown={(e) => selectTier(e, 'All')}
        on:click={(e) => selectTier(e, 'All')}>
        All
    </div>
	{#each tiers as tier}
		<div class="tab"
            class:selected={selectedTier==tier.name}
            tabindex="0"
            role="button"
            on:keydown={(e) => selectTier(e, tier.name)}
            on:click={(e) => selectTier(e, tier.name)}>
			{tier.name}
		</div>
	{/each}
</div>

<style>
    .tab-section {
        display: flex;
        height: 50px;
        border-bottom: 2px solid rgba(0,0,0,0.5);
        gap: 1px;
        overflow-x: auto;
        overflow-y: hidden;
        display: relative;
        --webkit-overflow-scrolling: touch
    }

    .tab {
        box-sizing: border-box;
        flex: 1 0 auto;
        min-width: 110px;
        text-align: center;
        line-height: 50px;
        font-weight: bold;
        font-size: 1.1em;
        background-color: var(--color-bg-gray);
        cursor: pointer;
    }

    .tab.selected {
        color: var(--color-primary);
        border-bottom: 2px solid var(--color-primary);
    }

    .tab:hover {
        background-color: var(--color-bg-gray-light);
    }
</style>