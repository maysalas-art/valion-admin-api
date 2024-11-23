import mongoose from "mongoose";

export const connectionDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/valionro-db');
        console.log('Already connected');
    } catch(err) {
        console.error(err);
    }
}