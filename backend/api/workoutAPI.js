import express from "express";

export function workoutAPI(db){
    const router = express.Router();


    router.get("", async(req, res)=>{
        res.json({message:"Hello world"});
    })




    return router;
}