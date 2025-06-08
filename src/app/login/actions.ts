'use server'
import { cookies } from "next/headers"
import { TOKEN_KEY } from "../../middleware"

export async function login() {
    const cookiesData = await cookies()
    cookiesData.set(TOKEN_KEY, 'token')

    cookiesData.set({
        name: 'user',
        value: 'joao',
        httpOnly: true,
        path: '/',
    })
}

export async function logout() {
    const cookiesData = await cookies()
    cookiesData.delete(TOKEN_KEY)
    cookiesData.delete('user')
}