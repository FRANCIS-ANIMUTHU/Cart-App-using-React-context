import React from "react";
//Component
import "./Cart.css";
//Hooks
import { useContext } from "react";
//Context
import stateContext from "./Context";
//Icon
import Button from '@mui/material/Button';

export default function () {
  const { state, dispatch } = useContext(stateContext);
  //console.log(state);
   
  //Remove function
  const remove = (items) => {
    let dismiss = state.cartItems.filter((data) => data.id !== items.id);
    console.log(items);
    dispatch({
      type: "remove",
      payload: dismiss,
    });
  };

  //Quantity Increase function
  const increase = (items) => {
    //console.log(items);
    let incr = items.qty++;
    console.log(state);

    dispatch({
      type: "increase",
      payload: incr,
    });
  };
   
   //Quantity Decrease function
  const decrease = (items) => {
    let decr = items.qty--;
    console.log(state);

    dispatch({
      type: "decrease",
      payload: decr,
    });
    if (decr === 0) {
      remove(items);
      items.qty = 0;
    }
  };

  return (
    <div className="cartdiv">
      {state.cartItems.map((items, i) => {
        return (
          <div key={i} className="cars">
            <h1>{items.name}</h1>
            <p className="id">{items.id}</p>
            <p className="price">{items.price}</p>
            <p className="qty">{items.qty}</p>
            <img src={items.img} alt="" className="image"></img>
            <br></br>
            <button className="plus" onClick={() => increase(items)}>
              +
            </button>
            <Button className="remove" variant="outlined" onClick={() => remove(items)}>
              Remove
            </Button>
            
            <button className="minus" onClick={() => decrease(items)}>
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
