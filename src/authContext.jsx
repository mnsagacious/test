import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  token:JSON.parse(localStorage.getItem("token"))|| null,
  role: JSON.parse(localStorage.getItem("role"))|| null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        role: action.payload.role,
        token:action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();
console.log("mysdk",sdk);
const checkd = sdk.check();
console.log("checked",checkd)
export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  // const token = localStorage.getItem("token")
  if (errorMessage === "TOKEN_EXPIRED") {
   
    dispatch({
      type: "Logout",
    });
    window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    //TODO
    localStorage.setItem("user",JSON.stringify(state.user));
    localStorage.setItem("token",JSON.stringify(state.token));
    localStorage.setItem("role",JSON.stringify(state.role))
    console.log("user",state.user)
    tokenExpireError();
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
