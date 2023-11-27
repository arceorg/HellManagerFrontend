import React, { createContext, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header/Header";
import { StudenView } from "./views/student";
import { MyContext, MyContextProvider } from "./context/Provider";
import { Login } from "./components/Login/login";

function App() {
  const [isLoged, setIsLoged] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoged(true);
  };

  return (
    <body>
      <MyContextProvider>
        {/* probar todo dentro de esta etiqueta MyContextProvider */}
        <Header />
        {isLoged ? (
          <StudenView />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </MyContextProvider>
    </body>
  );
}

export default App;
