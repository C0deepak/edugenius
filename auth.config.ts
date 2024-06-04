import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import { db } from "./lib/dbConnect"
import bcrypt from 'bcryptjs'

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials)

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data

                    const user = await db.user.findUnique({
                        where: {
                            email
                        }
                    })
                    if (!user || !user.password) return null
                    const passwordMatch = await bcrypt.compare(password, user.password)

                    if(passwordMatch) return user
                }
                return null
            }
        })
    ]
} satisfies NextAuthConfig