import prisma from '$lib/server/prisma'
import bcrypt from 'bcrypt'
import { fail, type Actions, redirect } from '@sveltejs/kit'
import { HCAPTCHA_SECRET } from '$env/static/private'
import { PUBLIC_ENABLE_HCAPTCHA } from '$env/static/public'
import { verify } from 'hcaptcha'

export const actions: Actions = {
    register: async ({ request }) => {
        const data = await request.formData()
        const email = data.get('email')
        const password1 = data.get('password1')
        const password2 = data.get('password2')
        const token = data.get('h-captcha-response')

        if (PUBLIC_ENABLE_HCAPTCHA) {
            if (!token) {
                return fail(400, { error: 'h-captcha-response is null'})
            }
            if (!(await verify(HCAPTCHA_SECRET, token.toString()))) {
                return fail(400, { error: 'h-captcha-response is invalid'})
            }
        }

        if (email === null || password1 === null || password2 === null) {
            return fail(400, { error: 'Email or password is null'})
        }

        if (password1.toString() !== password2.toString()) {
            return fail(400, { error: 'Passwords do not match '})
        }

        if (await prisma.taskmanUser.findFirst({ where: { email: email.toString() }})) {
            return fail(400, { error: 'Email already in use '})
        }

        const hash = await bcrypt.hash(password1.toString(), 10)

        const user = await prisma.taskmanUser.create({
            data: {
                email: email.toString(),
                passwordHash: hash,
                isAdmin: false
            }
        })

        throw redirect(303, '/login')
        
    }
}

