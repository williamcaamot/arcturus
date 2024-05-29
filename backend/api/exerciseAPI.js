import express from "express";
import {ObjectId} from "mongodb";

export function exerciseAPI(db){
    const router = express.Router();

    router.get("", async(req, res)=>{
        try{
            const collection = db.collection("exercises")

            let limit = parseInt(req.query.limit) || 50;
            let offset = parseInt(req.query.offset) || 0;

            limit = Math.min(limit, 50);

            const result  = await collection.find().skip(offset).limit(limit).toArray();

            res.json(result);
        }catch (e) {
            console.log(e)
            res.sendStatus(500);
        }
    })


    router.get("/:id", async(req, res) => {
        try{
            const collection = await db.collection("exercises")
            const result = await collection.findOne({_id: new ObjectId(req.params.id)})
            res.json(result);
        }catch (e) {
            console.log(e)
            res.sendStatus(500);
        }
    })

    router.get("/search/:term", async(req, res) => {
        try{
            const collection = db.collection("exercises");

            let limit = parseInt(req.query.limit) || 50;
            let offset = parseInt(req.query.offset) || 0;

            const searchTerm = req.params.term;


            let cursor = await collection.aggregate([
                {
                    $search: {
                        index: "exercise_search_index",
                        autocomplete: {
                            query: `${searchTerm}`,
                            path: "Exercise_Name",
                            fuzzy: {
                                maxEdits: 2,
                                prefixLength: 2
                            }
                        }
                    }
                },{
                    $facet: {
                        "totalCount": [
                            { $count: "count" }
                        ],
                        "results": [
                            { $skip: offset },
                            { $limit: limit }
                        ]
                    }
                }
            ]);

            const result = await cursor.toArray();

            res.json(result);
        }catch (e) {
            console.log(e)
            res.sendStatus(500);
        }
    })


    return router;
}