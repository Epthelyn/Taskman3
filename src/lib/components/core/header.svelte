<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { page } from "$app/stores";
	import { characterStore, taskmanUserStore } from "$lib/stores";
	import type { Character, ClientUser } from "$lib/types/taskman-api-types";

    let navMenuVisible = false;

    let taskmanUser: ClientUser | null = null
    let taskmanCharacter: Character | null = null

    taskmanUserStore.subscribe((value) => {
        taskmanUser = value
    })

    characterStore.subscribe((value) => {
        taskmanCharacter = value
    })

    function toggleNavMenu() {
        navMenuVisible = !navMenuVisible;
    }

    afterNavigate(() => {
        navMenuVisible = false;
    })

    type Route = {
        name: string,
        path: string
    }

    $: routes = getRoutes(taskmanUser, taskmanCharacter)

    function getRoutes(user: ClientUser | null, character: Character | null): Route[] {
        let routes  = [
            { name: "Home", path: "/" },
        ]

        if (user && character) {
            routes = [
                ...routes,
                { name: "Unlocks", path: "/unlocks" },
                { name: "Tasks", path: "/tasks" },
                { name: "Leaderboard", path: "/leaderboard" },
                { name: "Rules", path: "/rules" },
                { name: "Wiki", path: "https://wiki.taskman.rs/" },
                { name: "Discord", path: "https://discord.gg/XEYFDrc"},
                { name: "Support Us", path: "https://www.patreon.com/Taskman"},
                { name: character.rsn, path: "/account" }
            ]
        } else {
            routes = [
                ...routes,
                { name: "Login", path: "/login" },
                { name: "Register", path: "/register" }
            ]
        }

        return routes
    }
</script>

<header>
        <div class="nav-content-container">
            <div class="branding-section">
                <img src="/icons/taskman-beta.png" alt="taskium logo" class="logo" />
                <h1>Taskman v3</h1>
                <img src="/icons/hamburger.svg" 
                    alt="toggle navigation" 
                    class="hamburger"
                    on:click={toggleNavMenu}
                    on:keydown={toggleNavMenu} />
            </div>

            <nav class:nav-toggled={navMenuVisible}>
                {#each routes as route}
                    <a href={route.path} class:active={$page.url.pathname === route.path}>{route.name}</a>
                {/each}
            </nav>
        </div>
</header>

<style>
    header {
        background-color: var(--color-bg-dark);
        color: white;
        line-height: 64px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        padding: env(safe-area-inset-top) env(safe-area-inset-right) 0 env(safe-area-inset-left);
    }

    .nav-content-container {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    .logo {
        height: 32px;
        width: 32px;
        margin: 16px;
        display: inline-block;
        vertical-align: top;
    }

    @media screen and (min-width: 1200px) {
        .nav-content-container {
            display: flex;
            justify-content: space-between;
        }

        .hamburger {
            display: none;
        }

        nav a {
            display: inline-block;
            color: rgba(255, 255, 255, .5);
            font-weight: bold;
            text-decoration: none;
            margin: 16px 4px;
            padding: 0 8px;
            line-height: 32px;
            font-size: 0.9em;
        }

        nav a.active {
            color: white;
        }

        nav a:hover {
            color: white;
            background-color: var(--color-primary);
            height: 32px;
            border-radius: 8px;
        }

        .logo {
            margin-left: 0;
        }
    }

    h1 {
        display: inline-block;
        margin: 0;
        font-size: 24px;
        font-weight: normal;
    }

    .hamburger {
        flex: 0 0 auto;
        height: 24px;
        width: 24px;
        margin: 12px;
        cursor: pointer;
    }

    @media screen and (max-width: 1199px) {
        nav {
            display: none;
        }

        nav.nav-toggled {
            display: block;
        }


        .branding-section {
            display: flex;
            justify-content: space-between;
        }

        .logo {
            flex: 0 0 auto;
            height: 24px;
            width: 24px;
            margin: 12px;
        }

        .branding-section h1 {
            flex: 1 1 auto;
            line-height: 48px;
            font-size: 20px;
        }

        nav a {
            padding: 4px 16px;
            line-height: 32px;
            display: block;
            border-top: 1px solid rgba(0,0,0,0.5);
            background-color: #202736;
            text-decoration: none;
        }
    }
</style>