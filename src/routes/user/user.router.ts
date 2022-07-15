import { Router } from "express";
import { httpGetUser, httpSetUser } from "./user.controller";

export const userRouter = Router()

userRouter.get('/', httpGetUser)
userRouter.post('/', httpSetUser)