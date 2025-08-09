import { createClient } from "@sanity/client";
import type { H3Event } from "h3";

const config = useRuntimeConfig();
// const client = createClient({ projectId: config.public.sanity.projectId, dataset: "production", apiVersion: "2022-01-12", useCdn: false });

export default defineEventHandler(async (event: H3Event) => {
    const body = await readBody(event);
    console.log("Sanity webhook reçu:", body);
});
