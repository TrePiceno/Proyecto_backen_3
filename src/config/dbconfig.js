import mongoose from "mongoose";

const connectDB = async (url) => {
    try {
        const conn = await mongoose.connect(url)
        console.log(`Se ha conectado a MongoDB exitosamente`);
        return conn;
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

export default connectDB;