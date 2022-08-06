import React from "react";
//Component
import Login from "./login/Login";
import Home from "./Home";
import "./App.css";
import Cart from "./Cart";
import Favorite from "./Favorite";
import Feedback from "./Feedback";
//Context/Reducer
import stateContext from "./Context";
import { initialvalue, stateReducer } from "./Reducer";
//Hooks
import { useReducer } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
//Icons
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialvalue);

  //Logout function
  const logout = () => {
    localStorage.setItem("userLogin", false);
    dispatch({
      type: "userLogin",
      payload: { isAuthenticated: false },
    });
  };

  return (
    <div className="main">
      <stateContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          {state?.isAuthenticated ? (
            <>
              <ul className="navi">
                <li>
                  <Link to="/login" className="pages">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/home" className="pages">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="pages">
                    <IconButton aria-label="cart">
                      <Badge
                        badgeContent={state.cartItems.length}
                        color="secondary"
                      >
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </Link>
                </li>
                <li>
                  <Link to="/favorite" className="pages">
                  
                    <IconButton aria-label="cart">
                      <Badge
                        badgeContent={state.favorite.length}
                        color="secondary"
                      >
                       <FavoriteBorderIcon/>
                      </Badge>
                    </IconButton>
                  </Link>
                </li>
                <li>
                  <Link to="/feedback" className="pages">
                    Feedback
                  </Link>
                </li>
                <li>
                  <span className="logout" onClick={() => logout()}>
                    <ExitToAppRoundedIcon />
                  </span>
                </li>
              </ul>
              <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/favorite" element={<Favorite/>}></Route>
                <Route path="/feedback" element={<Feedback/>}></Route>
                <Route
                  path="*"
                  element={<Navigate to={"/home"}></Navigate>}
                ></Route>
              </Routes>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="*"
                element={<Navigate to={"/login"}></Navigate>}
              ></Route>
            </Routes>
          )}
        </BrowserRouter>
      </stateContext.Provider>
    </div>
  );
}

export default App;
