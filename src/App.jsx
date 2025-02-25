import React from "react";
import Todos from "./Todos";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // create a todos structure.
  //
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
};

export default App;
