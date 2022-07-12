import { Document } from "mongoose";
import { gymModel } from "./gym.mongo";
import type { TGymDoc } from "./gym.mongo";
import { TEquipment, TEquipmentCategories, TEquipmentDoc } from "./equipment.mongo";

export interface TGym extends TGymDoc {}

export async function getAllGyms() {
  return await gymModel.find({}) 
}

export async function upsertGym(gym:TGym) {
  const filter = {name: gym.name}
  return await gymModel.updateOne(filter, gym, {upsert:true})
}

