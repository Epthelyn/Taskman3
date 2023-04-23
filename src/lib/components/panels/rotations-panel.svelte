<script>
	import SettingsIcon from "../common/icons/settings-icon.svelte";

</script>
<section>
    <div class="section-header">
        <h2>Rotations</h2>
        <div class="options">
            <div class="option-icon">
                <SettingsIcon width="24px" height="24px" fill="var(--color-title)" />
            </div>
        </div>
    </div>

    <p><strong>Minigame Spotlight: </strong>Heist</p>
</section>

<style>
    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
        font-size: 1.3rem;
        line-height: 46px;
        color: var(--color-title);
        text-transform: uppercase;
        letter-spacing: .025em;
        border-bottom: 2px solid rgba(0, 0, 0, 0.5);
        padding: 2px 40px 0;
        background-color: #202736;
        margin: 0;
        margin-left: calc(env(safe-area-inset-left) * -1);
        margin-right: calc(env(safe-area-inset-right) * -1);
        padding-left: calc(env(safe-area-inset-left) + 40px);
        padding-right: calc(env(safe-area-inset-right) + 40px);
    }

    h2 {
        display: block;
        font-weight: 700;
        font-size: 1.3rem;
        line-height: 46px;
        color: var(--color-title);
        text-transform: uppercase;
        letter-spacing: .025em;
        border-bottom: 0;
        padding: 0;
        background-color: unset;
        margin: 0;
    }

    .options {
        display: flex;
        gap: 16px;
        justify-content: right;
    }

    .option-icon {
        display: flex;
        cursor: pointer;
    }
</style>