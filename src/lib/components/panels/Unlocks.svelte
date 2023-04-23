<script lang="ts">
	import { UNLOCKS } from "$lib/example-data/placeholder-data";

    $: unlockCategories = UNLOCKS

</script>

<section>
    <h2>Unlocks</h2>
    <div class="unlocks-container">
        {#each unlockCategories as category}
            <div class="unlock-category">
                <div class="unlock-category-head">
                    <div class="category-title">
                        {category.name}
                    </div>
                </div>
                <div class="unlock-row">
                    {#each category.unlocks as unlock}
                        <a href="/unlocks#{unlock.unlockId}">
                            <img src={unlock.img} alt={unlock.shortDescription} title={unlock.shortDescription} />
                        </a>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>

<style>

    .unlocks-container {
        padding: 24px 40px;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        justify-content: left;
    }

    .unlock-category {
        min-width: calc(33.33% - 6px);
        flex: 0 1 auto;
    }

    .category-title {
        display: block;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .unlock-row {
        margin-top: 2px;
        margin-bottom: 8px;
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }

    .unlock-row img {
        height: 40px;
        width: 40px;
        margin: 8px 8px 0;
        cursor: pointer;
    }

    /* .unlock-row.locked {
        opacity: 0.5;
    } */

    /* .unlocks ul {
        margin-top: 8px;
    } */
</style>