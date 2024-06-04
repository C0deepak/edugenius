'use server'

import bcrypt from 'bcryptjs'
import { db } from '@/lib/dbConnect'
import { RegisterSchema } from "@/schemas"
import * as z from "zod"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)
    if (!validatedFields.success) {
        return { error: 'Invalid fields!' }
    }

    const { name, email, password } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    })

    if (existingUser) {
        return { error: 'Email already exists!' }
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    // TODO Send verification token email if want

    return { success: 'User created successfully!' }
}