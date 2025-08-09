// @todo: Supprimer ce fichier
import { createClient } from "@sanity/client";

const config = useRuntimeConfig();

export const client = createClient({
    projectId: config.public.sanity.projectId,
    dataset: "production",
    apiVersion: "2022-01-12", // use current date (YYYY-MM-DD) to target the latest API version
    useCdn: true,
});

export default defineEventHandler(() => {
    return client;
});
