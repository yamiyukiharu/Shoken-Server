import {Schema, model, Document} from "mongoose";
import { TEquipment, TEquipmentCategories } from "./equipment.mongo";

export interface TGymDoc extends Document {
  name: string;
  createdBy: string;
  address: string;
  size: number;
  images: string[];
  equipment: {
    [key in TEquipmentCategories]?: Array<TEquipment>
  }
};

const gymSchema = new Schema<TGymDoc>({
  name: String,
  createdBy: String,
  address: String,
  size: Number,
  images: Array<String>,
  equipment: Map,
})

export const gymModel = model<TGymDoc>('Gyms', gymSchema)