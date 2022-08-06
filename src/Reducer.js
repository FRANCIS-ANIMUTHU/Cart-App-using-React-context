export const initialvalue = {
  cartItems: [],
  favorite: [],
  isAuthenticated:JSON.parse(localStorage.getItem("userLogin")) || false
};

//Switch case
export const stateReducer = (state, acton) => {
  switch (acton.type) {
    case "add":
      return {
        ...state,
        ...acton.payload,
      };
    case "favorite":
      return {
        ...state,
        ...acton.payload,
      };
    case "remove":
      return {
        ...state,
        cartItems: acton.payload,
      };
    case "removefavorite":
      return {
        ...state,
        favorite: acton.payload,
      };
    case "increase":
      return {
        ...state,
      };
    case "decrease":
      return {
        ...state,
      };
    case "login":
      return{
        ...state,
        ...acton.payload
      }
    default:
      return {
        state,
      };
  }
};
