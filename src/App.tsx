import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Schedule } from "./components/Scheduler/Schedule";
import { StudenView } from "./views/student";
import { MyContextProvider } from "./context/Provider";

function App() {
  return (
    <body>
      <Header />
    </body>
  );
}

export default App;
