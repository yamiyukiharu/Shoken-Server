import { Document } from "mongoose";
import { gymModel } from "./gym.mongo";
import type { TGymDoc } from "./gym.mongo";
import {
  TEquipment,
  TEquipmentCategories,
  TEquipmentDoc,
} from "./equipment.mongo";

export type TGyms = {
  [key: string]: TGymDoc;
};

export interface TGym extends TGymDoc {}

export async function getAllGyms() {
  const gyms = await gymModel.find({});
  let allGyms: TGyms = {};
  gyms.forEach((gym) => (allGyms[gym._id] = gym));
  return allGyms;
}

export async function upsertGym(gym: TGym) {

  if (gym._id) {
    return await gymModel.findOneAndUpdate({ _id: gym._id }, gym, {
      upsert: true,
      new: true,
    });
  }
  // create new gym
  return await gymModel.create(gym)  
}
