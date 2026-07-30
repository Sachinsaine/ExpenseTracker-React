import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export const ExpenseForm = () => {
  const { state, dispatch } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_EXPENSE",
      payload: { id: Date.now(), ...state.expense },
    });
  };
  console.log(state.allExpenses);

  return (
    <div>
      <form action="">
        <div className="flex flex-col">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="bg-white"
            name="title"
            value={state.expense.title}
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            className="bg-white"
            name="amount"
            value={state.expense.amount}
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Category</label>
          <input
            type="text"
            className="bg-white"
            name="category"
            value={state.expense.category}
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Date</label>
          <input
            type="date"
            className="bg-white"
            name="date"
            value={state.expense.date}
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white mt-2"
          onClick={handleSubmit}
        >
          Add to ledger
        </button>
      </form>
    </div>
  );
};
