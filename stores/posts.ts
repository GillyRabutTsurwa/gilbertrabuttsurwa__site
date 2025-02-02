import { defineStore } from "pinia";
import type { Post } from "~/interfaces/post";
import { posts } from "~/queries";

interface State {
    posts: Array<Post>;
    postsX: Post | null;
    techPosts: Array<Post>;
    filteredPosts: Array<Post>;
    filteredTechPosts: Array<Post>;
}

export const usePostsStore = defineStore("posts", {
    state: (): State => {
        return {
            posts: [],
            postsX: null,
            techPosts: [],
            filteredPosts: [],
            filteredTechPosts: [],
        };
    },
    actions: {
        async fetchPersonalPosts(): Promise<Post | null> {
            const query: string = posts("personal");
            const { data } = await useSanityQuery<Post>(query);
            return data.value;
        },
    },
});
