import React, { useEffect, useState } from "react";
import Exercise from "./Exercise";
import axios from "axios";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/exercises/").then((res) => {
      const allExercises = res.data;
      setExercises(allExercises);
    });
  }, []);

  // const deleteExercise = (id) => {
  //   axios
  //     .delete("http://localhost:5000/exercises/" + id)
  //     .then((res) => console.log(res.data));
  //   const filteredExercises = exercises.filter((el) => el._id !== id);
  //   setExercises(filteredExercises);
  // };

  // const exerciseList = () => {
  //   return exercises.map((exercise) => {
  //     return (
  //       <Exercise
  //         exercise={exercise}
  //         deleteexercise={deleteExercise}
  //         key={exercise._id}
  //       />
  //     );
  //   });
  // };

  // const pageExercises = exercises.map((exercise)=>{
  //   return {exercise}
  // })

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="table-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Exercise
            exercise={exercises}
            // deleteexercise={deleteExercise}
            // key={exercises._id}
          />
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
