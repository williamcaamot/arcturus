import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import * as path from "path";
import { createProxyMiddleware} from "http-proxy-middleware";

dotenv.config();

const app = express();
const PORT = 3000;
const mongoClient = new MongoClient(process.env.MONGODB_CONNECTION_STRING);



if (process.env.NODE_ENV === 'production') {
    // Serve static files from the Vite build directory in production
    app.use(express.static(path.join(__dirname, 'frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
    });
} else {
    // Proxy to Vite dev server in development
    console.log("Proxying request to vite frontend")
    app.use(
        '/',
        createProxyMiddleware({
            target: 'http://localhost:5173',
            changeOrigin: true,
        })
    );
}


mongoClient.connect()
    .then(() => console.log('Connected successfully to MongoDB'))
    .catch(err => console.error('Connection to MongoDB failed', err))
    .finally(() => mongoClient.close());


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
}) ;