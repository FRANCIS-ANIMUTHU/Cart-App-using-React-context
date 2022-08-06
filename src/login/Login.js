import React from "react";
//Components
import Details from "./Details.json";
import "./Login.css";
//Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
//Context
import stateContext from "../Context";
//Icons
import Button from '@mui/material/Button';

function Login() {
  const { dispatch } = useContext(stateContext);
  const navi = useNavigate();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [error, seterror] = useState();

  function changeName(event) {
    setusername(event.target.value);
  }
  function changePassword(event) {
    setpassword(event.target.value);
  }

  //Submit function
  function submit(event) {
    event.preventDefault();
    Details.forEach((data) => {
      if (data.username == username && data.password == password) {
        navi('/home')
         localStorage.setItem("userLogin",true)
        dispatch({
          type: "login",
          payload: { isAuthenticated: true },
        });
      } else {
        seterror("Invalid username or password");
      }
    });
  }

  return (
    <div className="sec">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <label name="username" className="lable">
          Username:
        </label>
        <input
          type="text"
          name="text"
          placeholder="Enter your name"
          className="name"
          onChange={changeName}
        ></input>
        <br></br>
        <label name="password" className="lable">
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="password"
          onChange={changePassword}
        ></input>
        <br></br>
        <Button className="submit" variant="contained" type="submit">
          Submit
        </Button>
        <p>{error}</p>
      </form>
    </div>
  );
}

export default Login;
