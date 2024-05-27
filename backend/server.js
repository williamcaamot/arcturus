import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);

client.connect()
    .then(() => console.log('Connected successfully to MongoDB'))
    .catch(err => console.error('Connection to MongoDB failed', err))
    .finally(() => client.close());


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
}) ;