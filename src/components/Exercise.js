import React from "react";
import { Link } from "react-router-dom";

const Exercise = ({ exercise, deleteExercise }) => {
  // const exercises = props.exercises.map((exercise) => {
  //   return { exercise };
  // });
  const { _id, username, description, duration, date } = exercise;
  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link className="btn btn-dark" to={"/edit"}>
          Edit
        </Link>{" "}
        |{" "}
        <button
          // onClick={deleteExercise(_id)}

          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Exercise;
