import express from "express";
import {authenticatedUser} from "../middleware/middleware.js";

export function userAPI(db){
    const router = express.Router();

    router.get("", authenticatedUser, async (req, res) => {
            res.json(res.locals.session)
        },
    )


    return router;
}