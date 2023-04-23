<script lang="ts">
	import "$lib/styles/text-input.css"
    import Clear from "$lib/components/common/icons/clear-icon.svelte";
    
    export let value: string = ''
    export let id: string
    export let required: boolean = false

    function clearSearch() {
        value = ""
    }
</script>


<div class="select-wrapper fixed-size">
    <input type="password" id={id} bind:value={value} name={id} required={required} />
    <div class="filter-action" on:click={clearSearch} on:keydown={clearSearch}>
        <Clear fill="white" height="12px" width="12px" />
    </div>
</div>
