import express from "express";

export function workoutAPI(db) {
    const router = express.Router();
    // CRUD Order (Create, Read, Update, Delete)



    router.post("", async (req, res) => {
        try {
            res.sendStatus(200);
        } catch (e) {
            console.log(e)
            res.sendStatus(500);
        }
    })

    router.get("", async(req, res) => {
        try{
            res.sendStatus(200);
        }catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    })


    router.get("/:id", async(req, res) => {
        try{
            res.sendStatus(200);
        }catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    })

    router.get("/search/:term", async(req, res) => {
        try{ // Is this necessary? And if so, should we only return objects associated with signed in user?
            res.sendStatus(200);
        }catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    })



    router.put("", async(req, res) => {
        try{
            res.sendStatus(200);
        }catch(e){
            console.log(e)
            res.sendStatus(500);
        }
    })

    router.delete("", async(req, res) => {
        try{
            res.sendStatus(200);
        }catch(e){
            console.log(e);
            res.sendStatus(500);
        }
    })



    return router;
}