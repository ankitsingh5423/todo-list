import React from "react";
import Todos from "./pages/Todos";
import Login from "./pages/Login";
import Header from "./pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Header />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
};

export default App;
