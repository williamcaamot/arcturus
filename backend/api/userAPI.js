import express from "express";

export function userAPI(db){
    const router = express.Router();

    router.get("", async(req, res)=>{
        res.json({message:"Hello world"});
    })
    return router;
}