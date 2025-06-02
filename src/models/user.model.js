import mongoose from "mongoose";

const collection = 'userMocks';

const schema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    pets: { type: [{ _id: { type: mongoose.Schema.Types.ObjectId, ref: 'pets' } }] }
});

const userModel = mongoose.model(collection, schema);

export default userModel;