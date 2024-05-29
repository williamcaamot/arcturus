import express from "express";
<<<<<<< Updated upstream
import {MongoClient} from "mongodb";
=======
import { MongoClient } from "mongodb";
import { ExpressAuth } from "@auth/express";
import Facebook from "@auth/express/providers/facebook";
>>>>>>> Stashed changes
import dotenv from "dotenv";
import {createProxyMiddleware} from "http-proxy-middleware";
import {userAPI} from "./api/userAPI.js";
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import {exerciseAPI} from "./api/exerciseAPI.js";
import {workoutAPI} from "./api/workoutAPI.js";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const port = 3000;
const mongoClient = new MongoClient(process.env.MONGODB_CONNECTION_STRING);

// if app is served through proxy, trust proxy to allow HTTPS packets to be detected
app.set("trust proxy", true);
app.use("/auth/*", ExpressAuth({ providers: [ Facebook ] }));

app.use(bodyParser.json({limit: '1mb'}))

app.use("/api/v1/user", userAPI(mongoClient))
app.use("/api/v1/workouts", workoutAPI(mongoClient))
app.use("/api/v1/exercises", exerciseAPI(mongoClient))


// Middleware to handle requests that are not API relevant (keep this at bottom, want to first handle anything that has to do with API)
if (process.env.NODE_ENV === 'production') {
    // Serve static files from the Vite build directory in production
    app.use(express.static(join(__dirname, '../frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(join(__dirname, '../frontend/dist/index.html'));
    });
} else {
    // Proxy to Vite dev server in development
    console.log("Proxying request to vite frontend");
    app.use(
        '/',
        createProxyMiddleware({
            target: 'http://localhost:5173',
            changeOrigin: true,
            ws: true,
        })
    );
}


// Connect to MongoDB
mongoClient.connect()
    .then(() => console.log('Connected successfully to MongoDB'))
    .catch(err => console.error('Connection to MongoDB failed', err))
    .finally(() => mongoClient.close());


// Run server
const actualPort = process.env.PORT || port;
app.listen(process.env.PORT || port, () => {
    const actualPort = process.env.PORT || port;
    console.log("-------------------------------------------------------------------------------------");
    console.log("Server is running on port " + actualPort);
    console.log(`ACCESS FRONTEND ON localhost:${actualPort} FOR API CALLS TO WORK`)
    console.log("-------------------------------------------------------------------------------------");
});