// import NextAuth from "next-auth"
// import github from "next-auth/providers/github"

// export const { handlers: { GET, POST }, auth } = NextAuth({
//     providers: [github],
// })

import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from "./lib/dbConnect"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig
})