import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header/Header";
//import { Login } from "./components/login/login";
import { SignUp } from "./components/SignUp/SignUp";
function App() {
  return (
    <body>
      <Header />
      <SignUp />
    </body>
  );
}

export default App;
