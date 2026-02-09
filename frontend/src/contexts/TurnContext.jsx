import { createContext, useContext, useState } from "react";

const TurnContext = createContext();

export const useTurn = () => useContext(TurnContext);

function TurnProvider({ children }) {
  const [turn, setTurn] = useState("X");

  const value = {
    turn,
    setTurn,
  };

  return <TurnContext.Provider value={value}>{children}</TurnContext.Provider>;
}

export default TurnProvider;
