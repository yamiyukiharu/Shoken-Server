import type { Request, Response } from "express";
import { getAllEquipment } from "../../model/equipment.model";

export async function httpGetAllEquipment(req:Request, res:Response) {
  const allEquipment = await getAllEquipment()
  return res.status(200).json(allEquipment)
}