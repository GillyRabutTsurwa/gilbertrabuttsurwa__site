import { createClient } from "@nuxtjs/sanity/dist/runtime/client";

const config = useRuntimeConfig();
export const client = createClient({
    projectId: config.sanity.projectId,
    dataset: config.sanity.dataset,
    apiVersion: config.sanity.apiVersion,
    useCdn: false,
});
