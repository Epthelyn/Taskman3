<script lang="ts">
	import "$lib/styles/text-input.css"
    import Clear from "$lib/components/common/icons/clear-icon.svelte";
    
    export let value: string = ''
    export let id: string

    function clearSearch() {
        value = ""
    }
</script>

<!-- Maybe we want autocomplate later, but for development we keep this off -->

<div class="select-wrapper fixed-size">
    <input type="text" id={id} name={id} bind:value={value} autocomplete="off" />
    <div class="filter-action" on:click={clearSearch} on:keydown={clearSearch}>
        <Clear fill="white" height="12px" width="12px" />
    </div>
</div>
