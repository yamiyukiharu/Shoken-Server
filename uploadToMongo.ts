import { equipmentCollection, equipmentModel } from "./data/equipment";
import mongoose from "mongoose";
import 'dotenv/config'

mongoose.connect(process.env.MONGO_ATLAS_URI)

async function uploadEquipmentCollection() {
  for (const doc of equipmentCollection) {
    await equipmentModel.updateOne({
      category: doc.category
    }, 
    doc,
    {upsert: true})
  }
  console.log("Successfully updated equipment collection to Mongo Atlas")
}

uploadEquipmentCollection()