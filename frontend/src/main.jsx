import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import Login from "./components/login/Login.jsx"; 
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} /> {/* Route for login */}
    </Routes>
  </Router>
);
