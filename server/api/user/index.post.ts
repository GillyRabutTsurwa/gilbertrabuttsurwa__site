import type { H3Event } from "h3";
import User from "~~/models/users";

export default defineEventHandler(async (event: H3Event) => {
    const body = await readBody(event); // this will give us the data coming from the client to the server (form data)

    //NOTE: create new user based on login credentials and add it to the database
    const newUser = new User({ email: body.email, username: body.username, password: body.password, isSubscribed: body.isSubscribed });

    try {
        await User.create(newUser);
        return newUser;
    } catch (error) {
        console.error(error);
    }
});
