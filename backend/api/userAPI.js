import express from "express";
import {authenticatedUser} from "../middleware/middleware.js";

export function userAPI(db) {
    const router = express.Router();

    router.get("", async (req, res) => {
            if (!req.session) {
                res.sendStatus(401);
                return
            }
            res.json(req.session)
        },
    )


    return router;
}