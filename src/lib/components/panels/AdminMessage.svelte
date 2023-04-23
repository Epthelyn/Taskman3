<script lang="ts">
    export let level: 'info' | 'warning' = 'info';
    export let title: string = 'Message';
    export let message: string;
</script>

<section class="basic-section" class:warning={level === 'warning'}>
    <h2>{title}</h2>

    <p>{message}</p>
</section>

<style>
    .warning h2 {
        background-color: var(--color-warning);
        color: black;
    }
</style>
