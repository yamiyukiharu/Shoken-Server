import {Schema, model} from "mongoose";
import { TEquipmentDoc } from "./equipment.mongo";

export type TGymDoc = {
  name: string;
  createdBy: string;
  address: string;
  size: number;
  images: string[];
  equipment: Array<TEquipmentDoc>;
};

const gymSchema = new Schema<TGymDoc>({
  name: String,
  createdBy: String,
  address: String,
  size: Number,
  images: Array<String>,
  equipment: Array<TEquipmentDoc>
})

export const gymsModel = model<TGymDoc>('Gyms', gymSchema)