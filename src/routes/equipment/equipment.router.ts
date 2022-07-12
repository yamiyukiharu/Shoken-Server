import { Router } from "express";
import { httpGetAllEquipment } from "./equipment.controller";

export const equipmentRouter = Router()

equipmentRouter.get('/', httpGetAllEquipment)