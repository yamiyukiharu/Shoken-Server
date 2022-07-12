import { exerciseModel } from "./exercise.mongo";
import type { TMuscleCategory, TExercise, TExerciseDoc } from "./exercise.mongo";

type TAllExercises = {
  [key in TMuscleCategory]?: TMuscle;
};

type TMuscle = {
  [key: string]: {
    scientificName: string;
    exercises: Array<TExercise>;
  };
};

export async function getAllExercises() {
  const docs = await exerciseModel.find({})
  return createAllExercisesTree(docs)
} 

function createAllExercisesTree(docs:Array<TExerciseDoc>) {
  const allExercises:TAllExercises = {}
  for (const doc of docs) {

    if (!allExercises[doc.group]) allExercises[doc.group] = {}

    allExercises[doc.group]![doc.muscle] = {
      scientificName: doc.scientificName,
      exercises: doc.exercises
    }
  }
  return allExercises
}