import React from "react";
//Component
import "./Favorite.css";
//Hooks/Context
import { useContext } from "react";
import stateContext from "./Context";

export default function Favorite() {
  const { state, dispatch } = useContext(stateContext);
  const removeFavorite = (items) => {
    let dismiss = state.favorite.filter((data) => data.id !== items.id);
    console.log(items);
    dispatch({
      type: "removefavorite",
      payload: dismiss,
    });
  };
  
  return (
    <div className="favdiv">
      {state.favorite.map((items, i) => {
        return (
          <div key={i} className="cars">
            <h1>{items.name}</h1>
            <p className="id">{items.id}</p>
            <p className="price">{items.price}</p>
            <p className="qty">{items.qty}</p>
            <img src={items.img} alt="" className="image"></img>
            <button className="removefav" onClick={() => removeFavorite(items)}>
              Remove Favorite
            </button>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
