const config = useRuntimeConfig();

async function fetchData(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchInstaposts() {
    const results = [];
    let next_url = `https://graph.instagram.com/me/media?fields=id,caption,permalink,media_type,media_url,username&access_token=${config.instagram.api_key}`;

    while (next_url) {
        const instaposts = await fetchData(next_url);

        results.push(...instaposts.data);
        next_url = instaposts.paging.next;
    }

    return results;
}

export default defineEventHandler(() => {
    return fetchInstaposts();
});
