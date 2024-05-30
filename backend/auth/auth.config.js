import Google from "@auth/express/providers/google"
import dotenv from "dotenv";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import clientPromise from "./clientPromise.js";

dotenv.config()


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