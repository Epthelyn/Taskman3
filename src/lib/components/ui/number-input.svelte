<script lang="ts">
	import "$lib/styles/text-input.css"
    import Clear from "$lib/components/common/icons/clear-icon.svelte";
    
    export let value: number = 0
    export let defaultValue: number = 0
    export let id: string
    export let min: number | null = null
    export let max: number | null = null

    function clearValue() {
        value = defaultValue
    }
</script>


<div class="select-wrapper">
    <input type="number" id={id} bind:value={value} min={min} max={max} />
    <div class="filter-action" on:click={clearValue} on:keydown={clearValue}>
        <Clear fill="white" height="12px" width="12px" />
    </div>
</div>