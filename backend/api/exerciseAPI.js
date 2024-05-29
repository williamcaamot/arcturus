import express from "express";

export function exerciseAPI(db){
    const router = express.Router();

    router.get("", async(req, res)=>{
        try{
            const collection = await db.collection("exercises")

            let limit = parseInt(req.query.limit) || 50;
            let offset = parseInt(req.query.offset) || 0;

            if(limit > 50){limit = 50}

            const result  = await collection.find().skip(offset).limit(limit).toArray();

            res.json({result});
        }catch (e) {
            console.log(e)
            res.sendStatus(500);
        }
    })
    return router;
}