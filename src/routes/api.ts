import admin from "firebase-admin";
import { Router } from 'express'
import { exerciseRouter } from './exercise/exerise.router'
import { equipmentRouter } from './equipment/equipment.router'
import { gymRouter } from './gym/gym.router'
import type { Request, Response, NextFunction } from "express";
import { userRouter } from "./user/user.router";

export const api = Router()

async function verifyUserAuthMiddleware(req:Request, res:Response, next:NextFunction) {
  if (!req.headers.authorization) return res.status(401).end()
  const idToken = req.headers.authorization.split(' ')[1]

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken)
    res.locals.uid = decodedIdToken.uid
  } catch(error) {
    console.log(error)
    return res.status(403).end()
  }

  return next()
}



api.use(verifyUserAuthMiddleware)

api.use('/exercises', exerciseRouter)
api.use('/equipment', equipmentRouter)
api.use('/gyms', gymRouter)
api.use('/user', userRouter)