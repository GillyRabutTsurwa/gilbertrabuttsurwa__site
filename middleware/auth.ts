export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
    if (!user.value && to.path === "/blog/uncensored") {
        return navigateTo("/login");
    } else if (user.value && to.path === "/login") {
        return navigateTo("/blog/uncensored");
    }
});
