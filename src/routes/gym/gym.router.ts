import { Router } from "express";
import { httpGetAllGyms, httpUpsertGym } from "./gym.controller";

export const gymRouter = Router()

gymRouter.get('/', httpGetAllGyms)
gymRouter.post('/', httpUpsertGym)