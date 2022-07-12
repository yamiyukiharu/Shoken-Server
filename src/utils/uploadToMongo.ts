import { equipmentCollection, equipmentModel } from "../model/equipment.mongo";
import { exerciseCollection, exerciseModel } from "../model/exercise.mongo";
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

async function uploadExerciseCollection() {
  for (const doc of exerciseCollection) {
    await exerciseModel.updateOne({
      muscle: doc.muscle
    }, 
    doc,
    {upsert: true})
  }
  console.log("Successfully updated exercise collection to Mongo Atlas")
}

uploadEquipmentCollection()
uploadExerciseCollection()