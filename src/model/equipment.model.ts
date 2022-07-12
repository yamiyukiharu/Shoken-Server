import { equipmentModel } from "./equipment.mongo";
import type { TEquipmentCategories, TEquipment, TEquipmentDoc } from "./equipment.mongo";

export type TAllEquipment = {
  [key in TEquipmentCategories]?: Array<TEquipment>;
}

export async function getAllEquipment() {
  const docs = await equipmentModel.find({})
  return createAllEquipmentMap(docs)
}

function createAllEquipmentMap(docs:Array<TEquipmentDoc>) {
  const allEquipment:TAllEquipment = {}
  for (const doc of docs) {
    allEquipment[doc.category] = doc.equipment
  }
  return allEquipment
}