import { ExpenseForm } from "./ExpenseForm";
import { Navbar } from "./Navbar";

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-center justify-between p-6">
          <ExpenseForm />
          <div>
            <h2>Total spent US$156.70</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
