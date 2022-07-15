import { userModel } from "./user.mongo";
import { TUserDoc } from "./user.mongo";

export const emptyUser: TUserDoc = {
  name: '',
  height: -1,
  weight: -1,
  image: '',
  level: 0,
  savedGyms: [],
  savedWorkouts: [],
  exerciseHistory: {
    arms: {},
    back: {},
    chest: {},
    hips: {},
    legs: {},
    others: {},
    shoulders: {},
    waist: {},
  },
  workoutHistory: [],
  email: '',
  providerId: '',
};

export async function getUser(email:string) {
  return await userModel.findOne({email: email})
}

export async function upsertUser(user:TUserDoc) {
  return await userModel.findOneAndUpdate(
    {email: user.email},
    user,
    {new: true,
    upsert: true}
  )
}
