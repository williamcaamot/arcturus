import {getSession} from "@auth/express"
import {authConfig} from "../auth/auth.config.js";

export async function authenticatedUser(req, res, next,) {
    const session =
        res.locals.session ?? (await getSession(req, authConfig)) ?? undefined

    res.locals.session = session

    if (session) {
        return next()
    }

    res.status(401).json({message: "Not Authenticated"})
}

export async function currentSession(req, res, next,) {
    const session = (await getSession(req, authConfig)) ?? undefined
    req.session = session
    return next()
}

export function userinfoMiddleware(db) {
    return async (req, res, next) => {
        try {
            const userCollection = await db.collection("users");
            const userStatsCollection = await db.collection("userStats");
            if (req.session) {
                const user = await userCollection.findOne({email: req.session.user.email});
                req.user = user;

            }
            
        } catch (e) {
            console.log(e)
        }
        next();
    };
}