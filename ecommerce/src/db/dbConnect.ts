// function to connect with mongo db 

import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://monawwarazal:iamazal123@cluster0.gmpuy7v.mongodb.net/';

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'ecommerce',
    bufferCommands: false,
  })

  cached.conn = await cached.promise;

  return cached.conn;
}
