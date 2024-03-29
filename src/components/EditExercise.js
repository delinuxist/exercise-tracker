import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditExercise = (props) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/" + props.match.params.id)
      .then((res) => {
        setUsername(res.data.username);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(new Date(res.data.date));
      });
  }, []);

  //Loading Users on start up
  useEffect(() => {
    axios.get("http://localhost:5000/users/").then((res) => {
      if (res.data.length > 0) {
        const allUsers = res.data.map((user) => user.username);
        setUsers(allUsers);
        //already selecting value in the list
        setUsername(res.data[0].username);
      }
    });
  }, []);

  //Username
  const OnChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  //Description
  const OnChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  //Duration
  const OnChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  //Date
  const OnChangeDate = (date) => {
    setDate(date);
  };

  //Submit Form Function
  const OnSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date,
    };

    axios
      .post(
        "http://localhost:5000/exercises/update/" + props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));

    //Take user back to home page
    window.location = "/";
  };

  return (
    <div>
      <h3>Edit Exercise</h3>
      <form onSubmit={OnSubmit}>
        <div className="form-group">
          <label> Username: </label>
          <select
            // ref="userInput"
            required
            className="form-control"
            value={username}
            onChange={OnChangeUsername}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={OnChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration: </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={OnChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={OnChangeDate} />
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
