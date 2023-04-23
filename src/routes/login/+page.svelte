<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { PUBLIC_ENABLE_HCAPTCHA, PUBLIC_HCAPTCHA_SITE_KEY } from '$env/static/public';
	import PasswordInput from '$lib/components/ui/password-input.svelte';
    import TextInput from '$lib/components/ui/text-input.svelte';
	import { characterStore, taskmanUserStore } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';
	import type { SubmitFunction } from './$types';
    import HCaptcha from 'svelte-hcaptcha'
	import type { LoginResponse } from './+page.server';

    let errorMessage: string | null = null
    let mounted = false
    let captchaRendered = false

    // function fakeLogin() {
    //     taskmanUserStore.set({
    //         userId: 1,
    //         isAdmin: false
    //     })

    //     characterStore.set({
    //         rsn: 'Taskman Bob',
    //         taskmanStatus: 'taskman'
    //     })
    // }

    const login: SubmitFunction = () => {
        return ({result}) => {
            if (result.type === 'failure') {
                errorMessage = result.data?.error ?? null
            } else if (result.type === 'success' && result.data !== undefined) {
                const data = result.data as LoginResponse
                taskmanUserStore.set(data.user)
                
                const characer = data.characters.find(c => c.characterId === data.user.selectedCharacter)
                if (characer) {
                    characterStore.set(characer)
                } else {
                    console.error('No character found for ID ' + data.user.selectedCharacter)
                }
                goto('/')
            }
        }
    }

</script>

<main>
    <h2>Login</h2>
    <div class="form-wrapper">
        <form method="POST" action="?/login" use:enhance={login}>
            <h3>Sign in</h3>
            {#if errorMessage !== null }
                <div>
                    {errorMessage}
                </div>
                {/if}
            <div class="task-time-container">
                <div>
                    <label for="email">Email</label>
                    <TextInput id="email" />
                </div>
                <div>
                    <label for="password">Password</label>
                    <PasswordInput id="password" />
                </div>
            </div>
            {#if PUBLIC_ENABLE_HCAPTCHA !== ''}
            <div class="captcha-row">
                <HCaptcha sitekey={PUBLIC_HCAPTCHA_SITE_KEY} size="compact" theme="dark" />
            </div>
            {/if}
            <div class="task-buttons-row">
                <button class="primary" type="submit">Sign In</button>
            </div>
        </form>

        <form method="POST" action="?/taskmanBob" use:enhance={login}>
            <h3>Or sign in with</h3>
            <div class="task-buttons-row">
                <button class="discord" type="submit">
                    <img src="/icons/buttons/discord-logo.svg" alt="Discord" />
                    Login with Discord
                </button>
            </div>
        </form>
    </div>
</main>

<style>
    .form-wrapper {
        margin: 40px;
        display: flex;
        justify-content: space-around;
        padding-bottom: 40px;
        flex-wrap: wrap;
        gap: 32px;
    }

    form {
        max-width: 320px;
        flex: 1 1 auto;
    }

    form label {
        display: block;
        padding: 1px;
        font-weight: 600;
    }

    .task-buttons-row {
        padding: 16px 1px 24px;
        display: flex;
        gap: 16px;
        /* margin-bottom: 16px; */
    }

    .task-buttons-row button {
        box-sizing: border-box;
        flex: 1 1 0;
        height: 40px;
        padding: 8px 16px;
        border-radius: 8px;
        line-height: 24px;
        border: none;
        color: white;
        font-weight: 600;
        cursor: pointer;
    }

    button.primary {
        background-color: var(--color-primary-dark);
    }

    button.primary:hover {
        background-color: var(--color-primary);
    }

    button.discord {
        background-color: var(--color-discord);
    }

    button.discord:hover {
        background-color: var(--color-discord-hover);
    }

    button img {
        height: 24px;
        width: 24px;
        margin-right: 8px;
        vertical-align: bottom;
    }

    .underline {
        border-bottom: 1px solid rgba(255,255,255,0.15);
        margin-bottom: 16px;
        padding-bottom: 24px;
    }

    .captcha-row {
        text-align: center;
    }

</style>