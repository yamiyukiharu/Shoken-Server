import admin from "firebase-admin";
import type { Request, Response } from "express";
import { emptyUser, getUser, upsertUser } from "../../model/user.model";
import { TUserDoc } from "../../model/user.mongo";

export async function httpGetUser(req:Request, res:Response) {
  const firebaseUser = await admin.auth().getUser(res.locals.uid)

  if (firebaseUser.email) {
    let user = await getUser(firebaseUser.email)
    if (user === null) {
      // create new user
      const newUser = {
        ...emptyUser,
        name: firebaseUser.displayName || '',
        email: firebaseUser.email,
        image: firebaseUser.photoURL || '',
      }
      user = await upsertUser(newUser)
    }
    return res.status(200).json(user)
  }
  return res.status(404).json({error: 'user not found'})
}

export async function httpSetUser(req:Request<{},{},TUserDoc>, res:Response) {
  const user = req.body
  const newUserDoc = await upsertUser(user)
  return res.status(200).json(newUserDoc)
}