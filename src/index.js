import React from "react";
import ReactDOM from "react-dom/client";
//component file
import TodoContainer from "./components/TodoContainer";
import "./App.css";

const element = ReactDOM.createRoot(document.getElementById("root"));
element.render(<TodoContainer />);
