import Google from "@auth/express/providers/google"
import dotenv from "dotenv";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import {MongoClient} from "mongodb";

dotenv.config()

let client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);
let clientPromise = client.connect();


export const authConfig = {
    trustHost: true,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            //redirect_uris: [
            //    'http://localhost:3000/api/auth/callback/google'     // <-- problem here
            //],
        }),
    ],
    adapter: MongoDBAdapter(clientPromise, {databaseName: "flexr"}),
}