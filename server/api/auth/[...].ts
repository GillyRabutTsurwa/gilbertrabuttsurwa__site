// file: ~/server/api/auth/[...].ts - NOTE: code copied directly from documentation: https://sidebase.io/nuxt-auth/getting-started/quick-start
import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/users";

const config = useRuntimeConfig();

export default NuxtAuthHandler({
    secret: config.auth.secret,
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: config.github.client_ID,
            clientSecret: config.github.client_secret,
        }),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GoogleProvider.default({
            clientId: config.google.client_ID,
            clientSecret: config.google.client_secret,
        }),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
            name: "credentials",
            authorize: async (credentials: any) => {
                console.log("Credentials", credentials);
                const users = await User.find();
                console.log("Users", users);
                // NOTE: login will only works if there's an existing account with the right credentials inserted
                //NOTE: update, doing this so user can login with username or e-mail address
                const user = await User.findOne({ username: credentials?.name, password: credentials.password });
                return user;
            },
        }),
    ],
    callbacks: {
        session: async ({ session }) => {
            console.log("Session", session);
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
});
