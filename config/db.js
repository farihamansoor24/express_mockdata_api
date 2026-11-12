// config/db.js
// import 'dotenv/config';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;

let cachedClient = null;
let cachedDb = null;

export default async function connectDB() {
    if (cachedDb) {
        return cachedDb;
    }

    if (!cachedClient) {
        cachedClient = new MongoClient(uri);
        await cachedClient.connect();
    }

    cachedDb = cachedClient.db('dummydata-db'); // Aapke database ka naam
    console.log("Connected to MongoDB successfully!");
    return cachedDb;
}