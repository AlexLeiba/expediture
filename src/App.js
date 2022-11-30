import { Home } from "./Pages/Home/Home";
import { AddExpenses } from "./Pages/AddExpenses/AddExpenses";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpenses />} />
      </Routes>
    </div>
  );
}

export default App;
