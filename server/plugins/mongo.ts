import mongoose from "mongoose";
const config = useRuntimeConfig();

const databaseConnect = async () => {
    try {
        const connection = await mongoose.connect(config.mongodb.uri, {
            dbName: "blog",
        });
        console.log(`Connected to Database ${connection.connection.db.databaseName} @ Host ${connection.connection.host}`);
    } catch (error) {
        console.error(error);
    }
};

export default defineNitroPlugin(async (_nitroApp) => {
    await databaseConnect();
});
