import express from "express";

export function exerciseAPI(db){
    const router = express.Router();


    router.get("", async(req, res)=>{
        try{
            const collection = await db.collection("exercises")
            const result  = await collection.find().toArray();

            res.json({result});


        }catch (e) {
            console.log(e.message)
            console.log(e)
            res.sendStatus(500);
        }


    })

    return router;
}