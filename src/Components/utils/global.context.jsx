import { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { initialState } from "./initialState";

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAV": {
      const isAlreadyFav = state.favs.some((fav) => fav.id === action.payload.id);
      if (isAlreadyFav) return state;

      return { ...state, favs: [...state.favs, action.payload] };
    }
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: "SET_DATA", payload: response.data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
