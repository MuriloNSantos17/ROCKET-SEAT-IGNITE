import { PrimsaAdapter } from "@/lib/auth/prisma-adpater";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';

export function buildNextAuthOptions(req: NextApiRequest, res: NextApiResponse): NextAuthOptions {
  // Configure one or more authentication providers
  return {
    adapter: PrimsaAdapter(req, res),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        authorization: {
          params: {
            scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar'
          }
        },
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            username: '',
            email: profile.email,
            avatar_url: profile.picture
          }
        }
      }),
      // ...add more providers here
    ],

    callbacks: {
      async signIn({ account }) {
        if (!account?.scope?.includes('https://www.googleapis.com/auth/calendar')) {
          return '/register/connect-calendar/?error=permissions'
        }

        return true;
      },

      async session({ session, user }) {
        return {
          ...session,
          user,
        }
      }
    }
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions(req, res));
}

