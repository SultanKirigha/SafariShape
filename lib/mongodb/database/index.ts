import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {conn: null, promise:null};

export const connectToDatabse = async () => {
    if (cached.conn) return cached.connect;

}