<script lang="ts">
    export let tabs: string[]
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
    $: selectedTab = tabs[0]

    const selectTab = (event: MouseEvent | KeyboardEvent, tabName: string) => {
        if (tabName !== selectedTab && 
                (event instanceof MouseEvent || event instanceof KeyboardEvent && event.key === 'Enter')) {
            selectedTab = tabName
            dispatch('selectTab', tabName)
        }
    }
</script>

<div class="tab-section">
	{#each tabs as tab}
		<div class="tab"
            class:selected={selectedTab==tab}
            tabindex="0"
            role="button"
            on:keydown={(e) => selectTab(e, tab)}
            on:click={(e) => selectTab(e, tab)}>
			<div class="tab-text">{tab}</div>
		</div>
	{/each}
</div>

<style>
    .tab-section {
        display: flex;
        height: 50px;
        border-bottom: 2px solid rgba(0,0,0,0.5);
        gap: 1px;
    }

    .tab {
        box-sizing: border-box;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        text-align: center;
        font-weight: bold;
        font-size: 1.1em;
        background-color: var(--color-bg-gray);
        cursor: pointer;
    }

    .tab-text {
        flex: 1 1 auto;
        text-align: center;
    }

    .tab.selected {
        color: var(--color-primary);
        border-bottom: 2px solid var(--color-primary);
    }

    .tab:hover {
        background-color: var(--color-bg-gray-light);
    }
</style>