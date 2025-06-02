import dotenv from 'dotenv';

dotenv.config({
    path: ".env",
});

export default {
    PORT: process.env.PORT || 8080,
    MONGO_URL: process.env.MONGO_URL
}