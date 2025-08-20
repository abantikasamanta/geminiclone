import { createContext } from "react";
import runChat from "../config/Gemini";

export const Context = createContext();
const ContextProvider = (props) => {

  const onSent = async (promt) => {
    await runChat(promt);
  };
  onSent("What is react")

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
