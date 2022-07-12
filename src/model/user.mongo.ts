import {Schema, model} from "mongoose";
import { TMuscleCategory } from "./exercise.mongo";

export type TUserDoc = {
  name: string;
  height: number;
  weight: number;
  image: string;
  level: number;
  savedGyms: Array<string>;
  savedWorkouts: Array<TWorkoutTemplate>;
  workoutHistory: Array<TWorkoutHistory>;
  exerciseHistory: TExerciseHistory;

  email: string;
  providerId: string;
};

export type TWorkoutTemplate = {
  name: string;
  gymId: string;
  exercises: TExerciseEntry;
};

export type TWorkoutHistory = {
  workoutTemplate: TWorkoutTemplate;
  startTime: string;
  endTime: string;
};

type TExerciseHistory = {
  [key in TMuscleCategory]: {
    // muscle name
    [key: string]: {
      // exercise id
      [key: string]: Array<{
        time: string;
        notes: string;
        sets: TExerciseSet;
      }>;
    };
  };
};

export type TExerciseEntry = {
  [key in TMuscleCategory]: {
    // muscle name
    [key: string]: {
      // exercise id
      [key: string]: { // sets
        sets: TExerciseSet;
        notes: string;
      };
    };
  };
};

export type TExerciseSet = Array<{
  reps: number;
  weight: number; //kg
}>;

export const userSchema = new Schema<TUserDoc>({
  name: String,
  height: Number,
  weight: Number,
  image: String,
  level: Number,
  savedGyms: Array<String>,
  savedWorkouts: Array<TWorkoutTemplate>,
  workoutHistory: Array<TWorkoutHistory>,
  exerciseHistory: Map,
  email: String,
  providerId: String,
})

export const userModel = model<TUserDoc>('user', userSchema)