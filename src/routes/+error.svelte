<script lang="ts">
    import { page } from '$app/stores'
</script>

<main>
    <h2>Error {$page.status}</h2>

    {#if $page.error !== null}
    <p>
        {$page.error.message}
    </p>
    {/if}
</main>
