<script lang="ts">
	import IconSelect from "$lib/components/ui/icon-select.svelte";
	import TextInput from "$lib/components/ui/text-input.svelte";
	import { CATEGORIES } from "$lib/example-data/example-categories";
	import type { SelectOption } from "$lib/types/ui-types";

    let searchAreaWidth: number
    let filtersHidden = true
    let filterLabel = "More filters"
    
    let categoryOptions: SelectOption[] = [
        { icon: "/icons/categories/placeholder.webp", label: "All tasks", id: 'all'}
    ]
    for (let category of CATEGORIES.values()) {
        if (category.filterable) {
            categoryOptions.push({
                id: category.categoryId,
                icon: category.img,
                label: category.name
            })
        }
    }

    let statusOptions: SelectOption[] = [
        { label: "All tasks", id: 'all' },
        { label: "Completed", id: 'completed' },
        { label: "Incomplete", id: 'incomplete' }
    ]

    let difficultyOptions: SelectOption[] = [
        { label: "All tasks", id: 'all' },
        { label: "★☆☆☆☆", id: '1' },
        { label: "★★☆☆☆", id: '2' },
        { label: "★★★☆☆", id: '3' },
        { label: "★★★★☆", id: '4' },
        { label: "★★★★★", id: '5' }
    ]

    let selectedCategoryOption: SelectOption  = categoryOptions[0]
    let selectedDifficultyOption: SelectOption = difficultyOptions[0]
    let selectedStatusOption: SelectOption = statusOptions[0]

    export let searchQuery: string = ''
    export let selectedCategory: string = 'all'
    export let selectedDifficulty: string = 'all'
    export let selectedStatus: string = 'all'
    $: selectedCategory = selectedCategoryOption.id
    $: selectedDifficulty = selectedDifficultyOption.id
    $: selectedStatus = selectedStatusOption.id

    function toggleFilters() {
        filtersHidden = !filtersHidden
        filterLabel = filtersHidden ? "More filters" : "Hide filters"
    }
    
</script>

<div class="tab-section" class:wrapped={filtersHidden} bind:clientWidth={searchAreaWidth}>
    <div class="filter-wrapper">
        <div class="text-input-wrapper">
            <label for="task-name-field">Task Name: </label>
            <TextInput bind:value={searchQuery} id="task-name-field" />
        </div>
    </div> 
    {#if searchAreaWidth >= 680 || !filtersHidden}
        <div class="filter-wrapper">
            <IconSelect label="Categories" options={categoryOptions} bind:selectedOption={selectedCategoryOption} />
        </div>
    {/if}
    {#if !filtersHidden}
        <div class="filter-wrapper">
            <IconSelect label="Status" 
                options={statusOptions} 
                enableIcons={false} 
                bind:selectedOption={selectedStatusOption} />
        </div>

        <div class="filter-wrapper">
            <IconSelect label="Difficulty" 
                options={difficultyOptions} 
                enableIcons={false} 
                bind:selectedOption={selectedDifficultyOption} />
        </div>
    {/if}
</div>
<div class="expand-button-container">
    <div class="expand-button" on:click={toggleFilters} on:keydown={toggleFilters}>
        {filterLabel}
    </div>
</div>

<style>

    .tab-section {
        border-bottom: 2px solid rgba(0,0,0,0.5);
        padding: 12px 12px;
        padding-left: calc(env(safe-area-inset-right) + 12px);
        padding-right: calc(env(safe-area-inset-right) + 12px);
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
        grid-template-rows: auto;
        justify-content: space-around;
        gap: 16px;
        background-color: #202736;
    }

    .tab-section.wrapped {
        max-height: 56px;
    }



    label {
        display: block;
        font-weight: bold;
        font-size: 0.9em;
        text-transform: uppercase;
        margin-bottom: 2px;
    }

    .expand-button-container {
        display: flex;
        justify-content: space-around;
    }

    .expand-button {
        flex: 0 0 auto;
        height: 20px;
        padding: 5px 8px 3px;
        font-size: 16px;
        line-height: 16px;
        border-radius: 0 0 4px 4px;
        background-color: #10131B;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
    }
</style>