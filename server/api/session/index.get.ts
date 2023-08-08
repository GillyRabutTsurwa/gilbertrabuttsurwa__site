import type { H3Event } from "h3";
import { getServerSession } from "#auth";
import User from "@/models/users";

export default defineEventHandler(async (event: H3Event) => {
    const session = await getServerSession(event);

    if (!session) {
        return {
            status: "unauthenticated",
        };
    }

    console.log("Session Data", session);
    return session;
});
