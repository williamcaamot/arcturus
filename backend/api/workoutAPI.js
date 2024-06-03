import express from "express";
import {ObjectId} from "mongodb";

export function workoutAPI(db) {
    const router = express.Router();
    // CRUD Order (Create, Read, Update, Delete)


    router.post("", async (req, res) => {
        try {
            if (!req.session) {
                res.sendStatus(401);
                return
            }


            res.sendStatus(200);
        } catch (e) {
            console.log(e)
            res.sendStatus(500);
        }
    })

    router.get("", async (req, res) => {
        try {
            if (!req.user) {
                res.sendStatus(401);
                return
            }
            const workoutCollection = db.collection("workouts");
            const result = await workoutCollection.find({created_by: req.user._id}).toArray()
            console.log(result)
            res.json(result);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    })


    router.get("/:id", async (req, res) => {
        try {
            if (!req.user) {
                res.sendStatus(401);
                return
            }


            const collection = await db.collection("workouts");
            const id = new ObjectId(req.params.id);

            const result = await collection.findOne({_id: id});

            console.log(result)


            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    })

    router.get("/search/:term", async (req, res) => {
        try { // Is this necessary? And if so, should we only return objects associated with signed in user?
            if (!req.session) {
                res.sendStatus(401);
                return
            }


            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    })


    router.put("", async (req, res) => {
        try {
            if (!req.session) {
                res.sendStatus(401);
                return
            }
            res.sendStatus(200);
        } catch (e) {
            console.log(e)
            res.sendStatus(500);
        }
    })

    router.delete("", async (req, res) => {
        try {
            if (!req.session) {
                res.sendStatus(401);
                return
            }


            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    })
    return router;
}