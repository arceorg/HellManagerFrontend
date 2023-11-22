import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { StudentProfile } from "../components/StudentProfile/StudentProfile";

interface MyContextProps {
  context: any;
  setContext: any;
}

export const MyContext = createContext<MyContextProps>({
  context: null,
  setContext: null,
});

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [context, setContext] = useState<any>({ view: StudentProfile }); // Cambia el tipo según tus necesidades iniciales

  return (
    <MyContext.Provider value={{ context, setContext }}>
      {children}
    </MyContext.Provider>
  );
};
