import { Router } from "express";
import { httpGetAllExercises } from "./exercise.controller";

export const exerciseRouter = Router()

exerciseRouter.get('/', httpGetAllExercises)