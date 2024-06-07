import express from "express";
import {ObjectId} from "mongodb";

export function workoutAPI(db) {
    const router = express.Router();
    // CRUD Order (Create, Read, Update, Delete)


    router.post("", async (req, res) => {
        try {
            if (!req.session || !req.user) {
                res.sendStatus(401);  // Unauthorized
                return;
            }

            const {workoutName, description, image, exercises} = req.body;
            if (!workoutName || !Array.isArray(exercises) || exercises.length === 0) {
                res.status(400).send("Invalid input");  // Bad Request for invalid input
                return;
            }

            const workoutCollection = db.collection("workouts");
            const newWorkout = {
                workoutName,
                description,
                image,
                exercises,
                created_by: req.user._id
            };

            const result = await workoutCollection.insertOne(newWorkout);
            res.status(201).json({workoutId: result.insertedId, message: "Workout created successfully"});  // Return the ObjectId of the new workout
        } catch (e) {
            console.log(e);
            res.sendStatus(500);  // Internal Server Error
        }
    });


    router.get("", async (req, res) => {
        try {
            if (!req.user) {
                res.sendStatus(401);
                return
            }
            const workoutCollection = db.collection("workouts");
            //const result = await workoutCollection.find({}).toArray()
            const result = await workoutCollection.find({created_by: req.user._id}).toArray()
            res.json(result);

        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    })


    router.get("/:id", async (req, res) => {
        try {
            //if (!req.user) {
            //    res.sendStatus(401);
            //    return
            //}


            const collection = await db.collection("workouts");
            const id = new ObjectId(req.params.id);

            const result = await collection.findOne({_id: id});


            res.json(result);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    })

    router.get("/search/:term", async (req, res) => {
        try {
            if (!req.session) {
                res.sendStatus(401);
                return
            }
            const collection = db.collection("workouts");

            let limit = parseInt(req.query.limit) || 50;
            let offset = parseInt(req.query.offset) || 0;

            const searchTerm = req.params.term;


            let cursor = await collection.aggregate([
                {
                    $search: {
                        index: "workout_search_index",
                        autocomplete: {
                            query: `${searchTerm}`,
                            path: "workoutName",
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
            const filteredResults = result[0].results.filter(exercise => exercise.created_by.equals(req.user._id));
            result[0].results = filteredResults;
            res.json(result[0]);
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

    router.delete("/:id", async (req, res) => {
        try {
            if (!req.user) {
                res.sendStatus(401);
                return;
            }

            const collection = await db.collection("workouts");
            const id = new ObjectId(req.params.id);

            // Find the workout to be deleted
            const workout = await collection.findOne({_id: id});

            // Check if the workout exists
            if (!workout) {
                res.status(404).send("Workout not found");
                return;
            }

            // Check if the authenticated user is the creator of the workout
            if (workout.created_by.toString() !== req.user._id.toString()) {
                res.status(403).send("You are not authorized to delete this workout");
                return;
            }

            // Delete the workout
            await collection.deleteOne({_id: id});

            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    })

    // router.delete("", async (req, res) => {
    //     try {
    //         if (!req.session) {
    //             res.sendStatus(401);
    //             return
    //         }
    //
    //
    //         res.sendStatus(200);
    //     } catch (e) {
    //         console.log(e);
    //         res.sendStatus(500);
    //     }
    // })
    return router;
}