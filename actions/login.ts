'use server'

import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { LoginSchema } from "@/schemas"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"
import * as z from "zod"

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)
    if (!validatedFields.success) {
        return { error: 'Invalid credentials!' }
    }

    const { email, password } = validatedFields.data
    try {
        await signIn("credentials", {
            email,
            password
        })
        redirect(DEFAULT_LOGIN_REDIRECT)
    } catch (error) {
        console.log(error)
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: 'Invalid credentials!' }
                default:
                    return { error: 'Something went wrong!' }
            }
        }

        throw error
    }
}