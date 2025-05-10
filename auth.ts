import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth  } = NextAuth({
  providers: [GitHub({
    clientId: process.env.AUTH_GITHUB_ID,
    clientSecret: process.env.AUTH_GITHUB_SECRET,
    authorization: {
      params: {
        scope: 'user'   
      }
    }
  }), Credentials({
    id: "credentials",
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      const email = process.env.ADMIN_EMAIL
      const password = process.env.ADMIN_PASSWORD

      if (credentials?.email === email && credentials?.password === password) {
        return {
          email,
          password,
          role: 'admin'
        }
      } else {
        throw new Error('Invalid credentials')
      }
    }
  })],
})