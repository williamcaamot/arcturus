import express from "express";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import {createProxyMiddleware} from "http-proxy-middleware";
import {userAPI} from "./api/userAPI.js";
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import {exerciseAPI} from "./api/exerciseAPI.js";
import {workoutAPI} from "./api/workoutAPI.js";
import bodyParser from "body-parser";
import {ExpressAuth} from "@auth/express";
import {authConfig} from "./auth/auth.config.js";
import {authenticatedUser, currentSession} from "./middleware/middleware.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const port = 3000;
const mongoClient = new MongoClient(process.env.MONGODB_CONNECTION_STRING);
app.use(bodyParser.json({limit: '1mb'}))

const db = mongoClient.db("flexr");
app.set('trust proxy', true)
app.use(currentSession)


app.use("/api/v1/auth/*", ExpressAuth(authConfig))

app.use("/api/v1/user", userAPI(db))
app.use("/api/v1/workouts", workoutAPI(db))
app.use("/api/v1/exercises", exerciseAPI(db))



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


// Connect to MongoDB & Start server
// Only starting server after mongodb is connected, or else server crashes if server gets hit with request before connected to mongodb
const actualPort = process.env.PORT || port;
let server;
await mongoClient.connect().then(() => {
    console.log("MongoDB connected, now trying to start server");

    server = app.listen(process.env.PORT || port, () => {
        const actualPort = process.env.PORT || port;
        console.log("-------------------------------------------------------------------------------------");
        console.log("Server is running on port " + actualPort);
        console.log(`ACCESS FRONTEND ON localhost:${actualPort} FOR API CALLS TO WORK`)
        console.log("-------------------------------------------------------------------------------------");
    })

}).catch(err => console.error('Connection to MongoDB failed', err))