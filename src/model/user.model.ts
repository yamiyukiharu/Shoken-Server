import { userModel } from "./user.mongo";


export async function getUser(id:string) {
  return await userModel.findById(id)
}

export async function updateUser(user) {
  return await userModel.updateOne(
    {_id: user.id},
    user
  )
}

export async function createUser(user) {
  await userModel.create(user)
}