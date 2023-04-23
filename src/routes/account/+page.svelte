<script lang="ts">
	import { goto } from "$app/navigation";
	import { characterStore } from "$lib/stores";
	import type { Character } from "$lib/types/taskman-api-types";

    let characer: Character

    characterStore.subscribe((c) => {
        if (c !== null) {
            characer = c 
        } else {
            goto('/login')
        }
    })

</script>
<main class="basic-section">
    <h2>{characer.rsn}</h2>

    <p>Welcome {characer.rsn}!</p>
</main>