import React, { useState } from "react";
import { Home } from "./Pages/Home/Home";
import { AddExpenses } from "./Pages/AddExpenses/AddExpenses";
import { Routes, Route } from "react-router-dom";
import { InputValueContext } from "./consts/Contexts";

function App() {
  const [inputSearchValue, setInputSearchValue] = useState("");

  const inputSearchValueContext = {
    inputSearchValue,
    setInputSearchValue,
  };
  return (
    <div className="App">
      <InputValueContext.Provider value={inputSearchValueContext}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expense" element={<AddExpenses />} />
        </Routes>
      </InputValueContext.Provider>
    </div>
  );
}

export default App;
