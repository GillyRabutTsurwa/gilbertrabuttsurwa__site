import { defineStore } from "pinia";
import type { PostInt } from "~~/interfaces/post";
import { posts } from "~~/queries";

interface State {
    posts: Array<PostInt>;
    postsX: PostInt | null;
    techPosts: Array<PostInt>;
    filteredPosts: Array<PostInt>;
    filteredTechPosts: Array<PostInt>;
}

export const usePostsStore = defineStore("posts", {
    state: (): State => {
        return { posts: [], postsX: null, techPosts: [], filteredPosts: [], filteredTechPosts: [] };
    },
    actions: {
        async fetchPersonalPosts(): Promise<PostInt | null> {
            const query: string = posts("personal");
            const { data } = await useSanityQuery<PostInt>(query);
            return data.value;
        },
    },
});
