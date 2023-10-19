import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Login } from "./components/login/login";

function App() {
  return (
    <body>
      <Header />
      <Login />
    </body>
  );
}

export default App;
