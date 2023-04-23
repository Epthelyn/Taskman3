<script lang="ts">
	import ExpandIcon from "./icons/expand-icon.svelte";

    export let elementsPerPage = 50
    export let totalElements : number
    export let currentPage = 1
    let pages: ('...' | number)[]

    $: totalPages = Math.ceil(totalElements / elementsPerPage)
    $: pages = getPageNumbers(totalPages, currentPage)

    function getPageNumbers(totalPages:number, currentPage: number): ('...' | number)[] {
        if (totalPages <= 5) {
            return Array.from({length: totalPages}, (_, i) => i + 1)
        } else {
            if (currentPage <= 3) {
                return [1, 2, 3, 4, '...']
            } else if (currentPage >= totalPages - 2) {
                return ['...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
            } else {
                return ['...', currentPage - 1, currentPage, currentPage + 1, '...']
            }
        }
    }

    function setPage(pageInput: string | number) {
        let page: number
        
        if (typeof pageInput === 'number') {
            page = pageInput
        } else {
            if (pageInput === '...') {
                return
            }
            page = Number.parseInt(pageInput)
        }
        
        if (page >= 1 && page <= totalPages) {
            currentPage = page
        }
    }
</script>


<div class="footer">
    <div class="page-label">
        Showing {(currentPage - 1) * elementsPerPage + 1} to {currentPage * elementsPerPage} of {totalElements} results
    </div>
    <div class="page-buttons">
        <div class="page-button" role="button" class:disabled={currentPage === 1}
                on:click={() => setPage(currentPage - 1)} on:keydown={() => setPage(currentPage - 1)}>
            <ExpandIcon invert={false} horizontal={true} height="16px" />
        </div>
        {#each pages as page}
            {#if page === '...'}
                <div class="page-button disabled" >
                    ...
                </div>
            {:else}
                <div class="page-button" class:active={page === currentPage} role="button"
                        on:click={() => setPage(page)} on:keydown={() => setPage(page)}>
                    {page}
                </div>
            {/if}
        {/each}
        <div class="page-button" role="button" class:disabled={currentPage === totalPages}
                on:click={() => setPage(currentPage + 1)} on:keydown={() => setPage(currentPage + 1)}>
            <ExpandIcon invert={true} horizontal={true} height="16px" />
        </div>
    </div>
</div>

<style>
    .footer {
        display: flex;
        justify-content: space-between;
        margin-left: calc(env(safe-area-inset-left) * -1);
        margin-right: calc(env(safe-area-inset-right) * -1);
        padding-left: calc(env(safe-area-inset-left) + 40px);
        padding-right: calc(env(safe-area-inset-right) + 40px);
        padding-top: 16px;
        padding-bottom: 16px;
        gap: 16px;
        flex-wrap: wrap;
    }

    .page-label {
        line-height: 36px;
        flex: 0 0 auto;
    }

    .page-buttons {
        display: flex;
        height: 36px;
    }

    .page-button {
        padding: 6px 12px;
        background-color: var(--color-bg-light);
        font-weight: 600;
        cursor: pointer;
    }

    .page-button.active {
        background-color: var(--color-primary-darker);
        cursor: default;
    }
    
    .page-button:first-child {
        border-radius: 8px 0 0 8px;
        padding-top: 10px;
    }

    .page-button:last-child {
        border-radius: 0 8px 8px 0;
        padding-top: 10px;
    }

    .disabled {
        color: rgba(255, 255, 255, .25);
        cursor: default;
    }
</style>