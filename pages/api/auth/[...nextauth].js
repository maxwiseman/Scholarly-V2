import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import GithubProvider from "next-auth/providers/github"

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    {
      id: "canvas",
      name: "Canvas",
      type: "oauth",
      version: "2.0",
      scope: " url:GET|/api/v1/users/:id/settings",
      params: { grant_type: "authorization_code" },
      accessTokenUrl: "https://" + process.env.NEXT_PUBLIC_CANVAS_URL + "/login/oauth2/token",
      requestTokenUrl: "https://" + process.env.NEXT_PUBLIC_CANVAS_URL + "/login/oauth2/auth",
      authorizationUrl: "https://" + process.env.NEXT_PUBLIC_CANVAS_URL + "/login/oauth2/auth?response_type=code",
      profileUrl: "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
      async profile(profile, tokens) {
        // You can use the tokens, in case you want to fetch more profile information
        // For example several OAuth providers do not return email by default.
        // Depending on your provider, will have tokens like `access_token`, `id_token` and or `refresh_token`
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture
        }
      },
      clientId: "",
      clientSecret: ""
    }
  ],
}

export default NextAuth(authOptions)