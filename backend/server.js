import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import * as path from "path";
import { createProxyMiddleware} from "http-proxy-middleware";
import {userAPI} from "./api/userApi.js";

dotenv.config();

const app = express();
const port = 3000;
const mongoClient = new MongoClient(process.env.MONGODB_CONNECTION_STRING);


app.use("/api/v1/user", userAPI(mongoClient))



// Middleware to handle requests that are not API relevant (keep this at bottom, want to first handle anything that has to do with API)
if (process.env.NODE_ENV === 'production') {
    // Serve static files from the Vite build directory in production
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
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
app.listen(process.env.PORT || port, () => {
    console.log("Server is running on port " + process.env.PORT || port);
}) ;