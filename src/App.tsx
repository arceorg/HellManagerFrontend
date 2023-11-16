import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header/Header";
import { StudenView } from "./views/student";
import { MyContextProvider } from "./context/Provider";

function App() {
  return (
    <body>
      <MyContextProvider>
        {/* probar todo dentro de esta etiqueta MyContextProvider */}
        <Header />
        <StudenView />
      </MyContextProvider>
    </body>
  );
}

export default App;
