<script setup lang="ts">
const router = useRouter();
const supabase = useSupabaseClient();
const container: Ref<HTMLDivElement | null> = ref(null); //NOTE: template ref for addressing form styles

const config = useRuntimeConfig();
const clientURL = config.public.client_url;

console.log(clientURL);

const formLogin = reactive({
    username: "",
    password: "",
});

const formRegister = reactive({
    email: "",
    username: "",
    password: "",
    isSubscribed: false
});

const logState = (e: Event) => {
    const input = e.target as HTMLInputElement;
    console.log(input.checked);
    formRegister.isSubscribed = input.checked;
}

const registerUser = async () => {
    const { user, error } = await supabase.auth.signUp({
        email: formRegister.email,
        password: formRegister.password,
    });

    if (error) {
        alert("Something Went Wrong");
        console.log(error);
        return;
    }
    console.log(user);
    alert("Access the e-mail we just sent you to verify your compte")

    const { data } = await useFetch("/api/user", {
        method: "POST",
        body: {
            email: formRegister.email,
            username: formRegister.username,
            password: formRegister.password,
            isSubscribed: formRegister.isSubscribed
        }
    });
    // NOTE: clear form input
    formRegister.email = "";
    formRegister.username = "";
    formRegister.password = "";
}

const loginUser = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
        email: formLogin.username,
        password: formLogin.password
    });

    if (error) {
        alert("problem loggin in user");
    }
    console.log(user);
    await navigateTo("/blog/uncensored");
}

//NOTENEW: sign in with oauth providers (using Github for now)
const signInWithOAuth = async (providerName: string): Promise<void> => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: providerName,
        options: {
            redirectTo: `${clientURL}/blog/uncensored`
        }
    });
    if (error) console.log(error);
}








const goBack = () => (router.back());
const addRightPanel = () => container.value.classList.add("right-panel-active");
const removeRightPanel = () => container.value.classList.remove("right-panel-active");
// if (status.value === "authenticated") await navigateTo("/blog/uncensored");
</script>

<template>
    <div class="container" id="container" ref="container">
        <div class="form-container sign-up-container">
            <div class="form-test">
                <h1 style="margin-bottom: 2rem;">Register</h1>
                <!-- hide for now -->
                <div class="social-container" style="display: none; visibility: hidden;">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span style="display: none; visibility: hidden;">or use your email for registration</span>
                <form @submit.prevent="registerUser" netlify>
                    <input v-model="formRegister.email" type="email" placeholder="E-mail" required />
                    <input v-model="formRegister.username" type="text" placeholder="Username" required />
                    <input v-model="formRegister.password" type="password" placeholder="Password" required />
                    <div class="newsletter"
                        style="display: grid; grid-template-columns: min-content 1fr; width: 100%; align-items: center;">
                        <input @change="logState($event)" type="checkbox" name="newsletter" id="newsletter"
                            style="width: 1.5rem;">
                        <label for="newsletter" style="font-size: 1.4rem; justify-self: start; margin-left: 2rem;">Subscribe
                            to
                            my monthly
                            newsletter</label>
                    </div>
                    <Button text="Register" colourPrimary="#07343f" colourSecondary="#fefefe" />
                </form>
                <p class="login-alernative">Or Login With</p>
                <div class="oauth">
                    <Icon @click="console.log('google login')" name="google" :pxSize="42" />
                    <Icon @click="console.log('github login')" name="github" :pxSize="42" />
                </div>
            </div>
        </div>
        <div class="form-container sign-in-container">
            <div class="form-test">
                <h1 style="margin-bottom: 2rem;">Sign In</h1>
                <!-- hide for now -->
                <div class="social-container" style="display: none; visibility: hidden;">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span style="display: none; visibility: hidden;">or use your email for registration</span>
                <form @submit.prevent="loginUser">
                    <input v-model="formLogin.username" type="text" placeholder="Username (or E-mail)" required />
                    <input v-model="formLogin.password" type="password" placeholder="Password" required />
                    <Button text="Sign In" colourPrimary="#07343f" colourSecondary="#fefefe" />
                </form>
                <p class="login-alernative">Or Login With</p>
                <div class="oauth">
                    <!-- <Icon @click="signIn('google')" name="google" :pxSize="42" /> -->
                    <Icon @click="signInWithOAuth('github')" name="github" :pxSize="42" />
                    <Icon @click="signInWithOAuth('google')" name="google" :pxSize="42" />
                </div>
                <div class="back-2-blogs" style="transform: translateY(25rem);">
                    <NuxtLink to="/blog">Back To Blogs</NuxtLink>
                </div>
            </div>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1 style="margin-bottom: 2rem;">Welcome Back</h1>
                    <p style="margin-bottom: 2rem;">Sign in with your credentials and enjoy the blog posts</p>
                    <Button @click="removeRightPanel" text="Sign Up" colourPrimary="#fefefe" colourSecondary="#07343f" />
                </div>
                <div class="overlay-panel overlay-right">
                    <h1 style="margin-bottom: 2rem;">Register</h1>
                    <p style="margin-bottom: 2rem;">Sign up to get access to <strong>all</strong> my posts</p>
                    <!-- <button class="ghost" id="signUp" @click="addRightPanel">Sign Up</button> -->
                    <Button @click="addRightPanel" text="Register" colourPrimary="#fefefe" colourSecondary="#07343f" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/" as abstracts;

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

button {
    border-radius: 1.5rem;
    border: 2px solid #07343f;
    background-color: #07343f;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 24px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
    //TESTING:
    display: flex;
    align-items: center;

    &[type="submit"] {
        margin: 3rem 0;
    }

    span {
        margin-left: 1.5rem;
    }
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    /* background-color: transparent;
    border-color: #FFFFFF; */
    background-color: #fefefe;
    color: #07343f;
}

// form,
.form-test {
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    width: 100%;
    height: 100%;
    text-align: center;

    form {

        input[type="password"] {
            margin-bottom: 3rem;
        }
    }

    .login-alernative {
        margin-bottom: 2rem;
    }

    .oauth {
        display: flex;
        width: 12rem;
        justify-content: space-around;
    }
}

input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    font-size: 1.6rem;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    /* width: 768px; */
    width: 100%;
    height: 100%;
    overflow: hidden;
    max-width: 100%;
    height: 100vh;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container,
.sign-up-container {
    button {
        margin-bottom: 2.5rem;
    }
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {

    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: #07343f;
    background-image: -webkit-linear-gradient(to right, #1a2934, #07343f);
    background-image: linear-gradient(to right, #1a2934, #07343f);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #FFFFFF;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #DDDDDD;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}

//NOTE: placer celle-ci quelquepart plus approprié
.newsletter {
    margin-bottom: 3rem;
}
</style>
