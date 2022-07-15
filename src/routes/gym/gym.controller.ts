import type { Request, Response } from "express";
import { getAllGyms, TGym, upsertGym } from "../../model/gym.model";

export async function httpGetAllGyms(req:Request, res:Response) {
  const allGyms = await getAllGyms()
  return res.status(200).json(allGyms)
}

export async function httpUpsertGym(req:Request<{},{},TGym>, res:Response) {
  const gym:TGym = req.body
  const newGymDoc = await upsertGym(gym)
  return res.status(200).json(newGymDoc)
}