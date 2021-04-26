import React from "react";
import { Link } from "react-router-dom";

const Exercise = (props) => {
  const exercises = props.exercise.map((exercise) => {
    return { exercise };
  });
  // const [_id, username, description, duration, date] = props.exercise;
  return (
    <tr>
      <td>{exercises.username}</td>
      <td>{exercises.description}</td>
      <td>{exercises.duration}</td>
      <td>{exercises.date}</td>
      <td>
        <Link to={"/edit" + exercises._id}>Edit</Link> |{" "}
        <button
          // onClick={props.deleteexercise(exercises._id)
          // }
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Exercise;
