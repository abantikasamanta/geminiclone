import { createContext, useState } from "react";
import runChat from "../config/Gemini";

export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPromt, setPreviousPromt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    SetLoading(false);
    setShowResult(false);
  };

  const onSent = async (promt) => {
    setResultData("");
    SetLoading(true);
    setShowResult(true);
    let response;

    if (promt === undefined) {
      setPreviousPromt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    } else {
      response = await runChat(promt);
      setRecentPrompt(promt);
    }

    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let editedResponse = newResponse.split("*").join("</br>");

    let finalResponse = editedResponse.split(" ");
    for (let i = 0; i < finalResponse.length; i++) {
      const nextWord = finalResponse[i];
      delayPara(i, nextWord + " ");
    }

    SetLoading(false);
    setInput("");
  };

  const contextValue = {
    previousPromt,
    setPreviousPromt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
