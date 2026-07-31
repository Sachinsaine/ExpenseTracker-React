import { Toaster } from "react-hot-toast";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { ContextProvider } from "./context/ContexProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Dashboard />
        <Toaster />
      </ContextProvider>
    </>
  );
}

export default App;
