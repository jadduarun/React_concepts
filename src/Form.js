import React, { useReducer, useState } from "react";

function Form() {
  const initialValues = {
    name: "",
    age: null,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "ADD": {
        return {
          name: action.payload.name,
          age: action.payload.age,
        };
      }
      case "REMOVE": {
        return {
          name: action.payload.name,
          age: action.payload.age,
        };
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialValues);
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: "ADD",
      payload: { name: name, age: age },
    });
  }
  function handleReset(e) {
    e.preventDefault();
    dispatch({
      type: "REMOVE",
      payload: { name: "", age: null },
    });
    setName("")
    setAge("")
  }

  return (
    <div>
      <h1 className="form-title">Input Form</h1>
      <div className="outside-form-div">
        <form className="form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name :
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setName(e.target.value)}
              value = {name}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age :
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
              value = {age}
              id="exampleInputPassword1"
            />
          </div>
          <button className="button" onClick={handleSubmit}>
            Add
          </button>
          <button className="button" onClick={handleReset}>
            Reset
          </button>
        </form>
        <div className="form--div">
          <h3>User Detail</h3>
          <p className="name">{state.name ? "Name : ": "" }{state.name}</p>
          <p className="age">{state.age ? "Age : " : ""}{state.age}</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
