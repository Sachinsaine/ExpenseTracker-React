import { useReducer } from "react";
import { ExpenseContext } from "./ExpenseContext";

const initialInput = {
  title: "",
  amount: "",
  category: "",
  date: "",
};
const initialState = {
  expense: initialInput,
  allExpenses: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        expense: {
          ...state.expense,
          [action.payload.name]: action.payload.value,
        },
      };

    case "ADD_EXPENSE":
      return {
        ...state,
        allExpenses: [...state.allExpenses, action.payload],
      };

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};
