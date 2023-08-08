import { createClient } from "@sanity/client";

const config = useRuntimeConfig();
export const client = createClient({
    name: "blog",
    projectId: config.public.sanity.projectId,
    dataset: config.public.sanity.dataset,
    apiVersion: config.public.sanity.apiVersion,
    useCdn: false,
});
