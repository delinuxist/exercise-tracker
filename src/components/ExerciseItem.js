import React from "react";
import Exercise from "./Exercise";

const ExerciseItem = ({ exercises, deleteExercise }) => {
  return exercises.map((exercise) => (
    <Exercise
      exercise={exercise}
      key={exercise._id}
      // deleteExercise={deleteExercise}
    />
  ));
};

export default ExerciseItem;
