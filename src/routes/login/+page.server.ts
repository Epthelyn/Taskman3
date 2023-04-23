import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import prisma from "$lib/server/prisma";
import bcrypt from 'bcrypt'
import type { Character, ClientUser } from "$lib/types/taskman-api-types";
import { verify } from "hcaptcha";
import { HCAPTCHA_SECRET } from "$env/static/private";
import { PUBLIC_ENABLE_HCAPTCHA } from "$env/static/public";
import { IronmanStatusEntries, TaskmanStatusEntries, type TaskmanStatus, type IronmanStatus } from "$lib/types/taskium-types";

export const actions: Actions = {
    login: async ({ request }) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')
        const token = data.get('h-captcha-response')

        if (PUBLIC_ENABLE_HCAPTCHA) {
            if (!token) {
                return fail(400, { error: 'h-captcha-response is null'})
            }
            if (!(await verify(HCAPTCHA_SECRET, token.toString()))) {
                return fail(400, { error: 'h-captcha-response is invalid'})
            }
        }

        if (email === null || password === null) {
            return fail(400, { error: 'Email or password is null'})
        }

        const user = await prisma.taskmanUser.findFirst({
            where: { email: email.toString() },
            include: { taskmanCharacters: true }
        })

        if (user !== null && await bcrypt.compare(password.toString(), user.passwordHash)) {
            const characters = user.taskmanCharacters.map(taskmanCharacter => {
                return {
                    characterId: taskmanCharacter.characterId,
                    rsn: taskmanCharacter.rsn,
                    taskmanStatus: TaskmanStatusEntries[taskmanCharacter.taskmanStatus],
                    ironmanStatus: IronmanStatusEntries[taskmanCharacter.ironmanStatus],
                } satisfies Character
            })
            
            return {
                user: {
                    userId: user.userId,
                    isAdmin: user.isAdmin,
                    selectedCharacter: user.selectedCharacterId || -1
                } satisfies ClientUser,
                characters: characters
            } satisfies LoginResponse
        } else {
            return fail(400, { error: 'Invalid email or password' })
        }
    },

    taskmanBob: async () => {
        let user = await prisma.taskmanUser.findFirst({
            where: { email: 'bob@taskman.rs' },
            include: { taskmanCharacters: true }
        })
        if (user === null) {
            user = await createUser('bob@taskman.rs', 'taskmanv3nr1', 'Taskman Bob', 'taskman', 'ironman', true)
        }

        const characters = user.taskmanCharacters.map(taskmanCharacter => {
            return {
                characterId: taskmanCharacter.characterId,
                rsn: taskmanCharacter.rsn,
                taskmanStatus: TaskmanStatusEntries[taskmanCharacter.taskmanStatus],
                ironmanStatus: IronmanStatusEntries[taskmanCharacter.ironmanStatus]
            } satisfies Character
        })
        
        return {
            user: {
                userId: user.userId,
                isAdmin: user.isAdmin,
                selectedCharacter: user.selectedCharacterId || -1
            } satisfies ClientUser,
            characters: characters
        } satisfies LoginResponse
    }
}

async function createUser(email: string, password: string, rsn: string, taskmanStatus: TaskmanStatus, ironmanStatus: IronmanStatus, isAdmin = false) {
    let user = await prisma.taskmanUser.create({
        data: {
            email: email,
            passwordHash: await bcrypt.hash(password, 10),
            isAdmin: isAdmin,
            taskmanCharacters: {
                create: {
                    rsn: rsn,
                    taskmanStatus: TaskmanStatusEntries.indexOf(taskmanStatus),
                    ironmanStatus: IronmanStatusEntries.indexOf(ironmanStatus),
                }
            }
        },
        include: {
            taskmanCharacters: true
        }
    })

    user = await prisma.taskmanUser.update({
        where: { userId: user.userId },
        data: {
            selectedCharacterId: user.taskmanCharacters[0].characterId
        },
        include: {
            taskmanCharacters: true
        }
    })

    return user
}

export type LoginResponse = {
    user: ClientUser,
    characters: Character[]
}