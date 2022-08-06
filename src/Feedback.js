import React from "react";
//Component
import "./Feedback.css";
//Hooks
import { useState } from "react";
//Icons
import Button from "@mui/material/Button";

function Feedback() {
  const [date, setdate] = useState("");
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [mobile, setmobile] = useState("");
  const [feeds, setfeeds] = useState("");
  const [submit, setsubmit] = useState("");

  const datechange = (pass) => {
    setdate(pass.target.value);
  };
  const namechange = (pass) => {
    setname(pass.target.value);
  };
  const mailchange = (pass) => {
    setmail(pass.target.value);
  };
  const numberchange = (pass) => {
    setmobile(pass.target.value);
  };
  const feedschange = (pass) => {
    setfeeds(pass.target.value);
  };
  //Submit function
  const feedsubmit = (pass) => {
    setsubmit(pass);
  };

  return (
    <div className="feeddiv">
      <h2 className="head">Sent your Feedback</h2>

      {!submit ? (
        <>
          <p>{date}</p>
          <p>{name}</p>
          <p>{mail}</p>
          <p>{mobile}</p>
          <p>{feeds}</p>

          <form className="form">
            <label name="Date" className="text">
              Date:{" "}
            </label>
            <input type="date" className="input" onChange={datechange}></input>
            <br></br>
            <label name="Name" className="text">
              Name:{" "}
            </label>
            <input type="text" className="input" onChange={namechange}></input>
            <br></br>
            <label name="Email" className="text">
              Email:{" "}
            </label>
            <input type="email" className="input" onChange={mailchange}></input>
            <br></br>
            <label name="Phone" className="text">
              Phone:{" "}
            </label>
            <input
              type="number"
              className="input"
              max="==10"
              onChange={numberchange}
            ></input>
            <br></br>
            <label name="Feedback" className="text">
              Feedback:{" "}
            </label>
            <input type="text" className="input" onChange={feedschange}></input>
            <Button
              type="button"
              variant="contained"
              className="btn"
              onClick={() =>
                feedsubmit("Your Feedback is Recieved! Thank you!")
              }
            >
              Submit
            </Button>
            <br></br>
          </form>
        </>
      ) : (
        <h2>{submit}</h2>
      )}
    </div>
  );
}

export default Feedback;
