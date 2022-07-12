import { getAllExercises } from "../../model/exercise.model";
import type { Request, Response } from 'express'

export async function httpGetAllExercises(req:Request, res:Response) {
  const allExecises = await getAllExercises()
  return res.status(200).json(allExecises)
}
