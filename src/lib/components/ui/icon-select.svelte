<script lang="ts">
    import Expand from "$lib/components/common/icons/expand-icon.svelte";
	import type { SelectOption } from "$lib/types/ui-types";
	import { clickOutside } from "$lib/util/ui/click-outside";

    export let label: string
    export let options: SelectOption[]
    export let enableIcons = true
    export let name: string | null = null

    let selectedIndex = 0
    export let selectedOption: SelectOption
    $: selectedOption = options[selectedIndex]

    let inputWidth: number;

    let selectMenuVisible = false

    function toggleSelect(event: Event) {
        event.preventDefault()
        selectMenuVisible = !selectMenuVisible
    }

    function clickOutsideSelect() {
        selectMenuVisible = false
    }

    function selectOption(index: number) {
        selectedIndex = index
        selectMenuVisible = false
    }


</script>

<div class="filter-wrapper">
    <div>
        <span class="label">{label}:</span>
        <div class="select-wrapper" use:clickOutside={clickOutsideSelect} class:active={selectMenuVisible}>
            <div class="select-picker" 
                    on:click={toggleSelect} on:keydown={toggleSelect}
                    bind:clientWidth={inputWidth}>
                {#if enableIcons}
                    {#if selectedOption.icon}
                        <img src={selectedOption.icon} alt={selectedOption.label}>
                    {:else}
                        <div class="empty-icon"></div>
                    {/if}
                {/if}
                <span>{selectedOption.label}</span>
            </div>
            <input type="hidden" name={name} value={selectedOption.id}>
            <div class="filter-action" on:click={toggleSelect} on:keydown={toggleSelect}>
                <Expand invert={false} height="12px" width="12px" />
            </div>
            {#if selectMenuVisible}
            <div class="filter-dropdown">
                {#each options as option, i(i)}
                    <div class="filter-option"
                            style:width={(inputWidth + 3) + "px"}
                            on:click={() => selectOption(i)} 
                            on:keydown={() => selectOption(i)}>
                        {#if enableIcons}
                            {#if option.icon}
                                <img src={option.icon} alt={option.label}>
                            {:else}
                                <div class="empty-icon"></div>
                            {/if}
                        {/if}
                        <span>{option.label}</span>
                    </div>
                {/each}
            </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .filter-wrapper {
        display: flex;
        justify-content: space-around;
    }

    .filter-wrapper > div {
        flex: 1 1 0;
    }

    .select-wrapper {
        display: flex;
        position: relative;
    }

    .filter-action {
        flex: 0 0 auto;
        box-sizing: border-box;
        height: 30px;
        width: 30px;
        border-radius: 0 4px 4px 0;
        background-color: #10131B;
        padding: 9px;
        cursor: pointer;
    }

    .filter-dropdown {
        position: absolute;
        top: 28px;
        z-index: 1;
    }

    .label {
        display: block;
        font-weight: bold;
        font-size: 0.9em;
        text-transform: uppercase;
        margin-bottom: 2px;
    }

    .select-picker,
    .filter-option {
        box-sizing: border-box;
        background-color: #C2C5CA;
        color: black;
        /* width: 250px; */
        height: 30px;
        border: 2px solid #10131B;
        padding: 1px 2px;
        cursor: pointer;
    }

    .select-picker {
        border-radius: 4px 0 0 4px;
        flex: 1 1 0;
    }

    .select-wrapper.active {
        outline: solid 2px var(--color-primary-dark);
        border-radius: 4px;
    }

    .filter-option {
        border-bottom: 0;
    }
    
    .filter-option:first-of-type {
        border-radius: 4px 4px 0 0;
    }

    .select-picker:hover,
    .filter-option:hover {
        background-color: #FAFAFB;
    }

    .filter-option:last-child {
        border-radius: 0 0 4px 4px;
        border-bottom: 2px solid #10131B;
    }

    .empty-icon,
    .filter-option img,
    .select-picker img {
        height: 24px;
        width: 24px;
        display: inline;
        vertical-align: bottom;
        margin-right: 4px;
    }

    .empty-icon {
        display: inline-block;
    }
</style>