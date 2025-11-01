export const useFetchSanity = async <T>() => {
    const fetchPosts = async (query: string) => {
        const { data: content } = await useSanityQuery<T>(query);
        return content;
    };
    return fetchPosts;
};
