import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  //Loading Users on start up
  useEffect(() => {
    setUsers(["text user"]);
    setUsername("test user");
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

    console.log(exercise);

    //Take user back to home page
    window.location = "/";
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
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
            value="Create Exercise"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
