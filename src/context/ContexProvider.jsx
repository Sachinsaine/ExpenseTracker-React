import { useEffect, useReducer, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";

const initialInput = {
  title: "",
  amount: "",
  category: "",
  date: "",
};

const saveExpense = JSON.parse(localStorage.getItem("expense") || "[]");

const initialState = {
  expense: initialInput,
  allExpenses: saveExpense,
  selectedCategory: "All",
  sortByAmount: "default",
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
        expense: initialInput,
      };

    case "REMOVE_EXPENSE":
      return {
        ...state,
        allExpenses: [
          ...state.allExpenses.filter((item) => item.id !== action.payload),
        ],
      };

    case "SELECT_BY_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case "SORT":
      return {
        ...state,
        sortByAmount: action.payload,
      };

    case "UPDATE_EXPENSE":
      return {
        ...state,
        allExpenses: state.allExpenses.map((expense) => {
          return expense.id === action.payload.id ? action.payload : expense;
        }),
      };

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [open, setOpen] = useState(false);
  const [updateDialog, setUpdateDialog] = useState(false);
  const [deleteId, setDeletedId] = useState(0);
  const [selectedExpense, setSelectedExpense] = useState(null);

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(state.allExpenses));
  }, [state.allExpenses]);
  return (
    <ExpenseContext.Provider
      value={{
        state,
        dispatch,
        open,
        setOpen,
        deleteId,
        setDeletedId,
        updateDialog,
        setUpdateDialog,
        selectedExpense,
        setSelectedExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
