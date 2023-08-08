import { createClient } from "@sanity/client";

export const client = createClient({
    name: "blog",
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_ENV_PROD,
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
    useCdn: false,
});
