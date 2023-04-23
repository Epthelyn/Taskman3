<script lang="ts">
	import IconSelect from '$lib/components/ui/icon-select.svelte';
	import PasswordInput from '$lib/components/ui/password-input.svelte';
    import TextInput from '$lib/components/ui/text-input.svelte';
	import type { SelectOption } from '$lib/types/ui-types';
	import type { SubmitFunction } from './$types';
    import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { PUBLIC_ENABLE_HCAPTCHA, PUBLIC_HCAPTCHA_SITE_KEY } from '$env/static/public';
    import HCaptcha from 'svelte-hcaptcha'

    let errorMessage: string | null = null

    let accountTypes: SelectOption[] = [
        { label: "Taskman", id: 'taskman', icon: '/icons/items/dragon-helm.webp' },
        { label: "Taskmain", id: 'taskmain', icon: '/icons/items/steel-med-helm.webp' }
    ]

    let selectedAccountType = accountTypes[0]

    const registerUser: SubmitFunction = (() => {
        return ({result}) => {
            if (result.type === 'failure') {
                errorMessage = result.data?.error ?? null
            } else {
                goto('/login')
            }
        }
    })
</script>


<main>
    <h2>Register</h2>
    <div class="form-wrapper">
        <form method="POST" action="?/register" use:enhance={registerUser}>
            <div class="task-time-container">
                {#if errorMessage !== null }
                <div>
                    {errorMessage}
                </div>
                {/if}
                <div>
                    <label for="email">Email</label>
                    <TextInput id="email" />
                </div>
                <div>
                    <label for="password1">Password</label>
                    <PasswordInput id="password1" required={true} />
                </div>
                <div class="underline">
                    <label for="password2">Password Confirmation</label>
                    <PasswordInput id="password2" required={true} />
                </div>
                <div>
                    <label for="username">Runescape Name</label>
                    <TextInput id="rsn" />
                </div>
                <div>
                    <IconSelect label="Difficulty" 
                        options={accountTypes} 
                        enableIcons={true}
                        name="accountType"
                        bind:selectedOption={selectedAccountType} />
                </div>
            </div>
            {#if PUBLIC_ENABLE_HCAPTCHA !== ''}
            <div class="captcha-row">
                <HCaptcha sitekey={PUBLIC_HCAPTCHA_SITE_KEY} size="compact" theme="dark" />
            </div>
            {/if}
            <div class="task-buttons-row">
                <button class="primary" type="submit">Register</button>
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
    }

    form {
        max-width: 272px;
    }

    form label {
        display: block;
        padding: 1px;
        font-weight: 600;
    }

    .task-time-container div:not(:last-child) {
        padding-bottom: 8px;
    }

    .task-time-container div.underline {
        border-bottom: 1px solid rgba(255,255,255,0.15);
        padding-bottom: 16px;
        margin-bottom: 12px;
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

    .captcha-row {
        text-align: center;
    }

</style>