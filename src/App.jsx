import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { ContextProvider } from "./context/ContexProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Dashboard />
      </ContextProvider>
    </>
  );
}

export default App;
