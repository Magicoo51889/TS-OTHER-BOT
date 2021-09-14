export const validateEnv = () => {
    if (!process.env.client_TOKEN) {
        console.warn("Missing Discord BOT token.");
        return false;
    }

    if (!process.env.MONGO_URI) {
        console.warn("Missing MongoDB connection.");
        return false;
    }
    return true;
};

