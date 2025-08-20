import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="userIcon" className="src" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>suggest beatiful assests</p>
                <img src={assets.compass_icon} alt="" className="src" />
              </div>
              <div className="card">
                <p>write an essay huy hdyt guysadtb jhgdy</p>
                <img src={assets.bulb_icon} alt="" className="src" />
              </div>
              <div className="card">
                <p>
                  summaries the read my cv and give me a introduction speach for
                  my interview
                </p>
                <img src={assets.message_icon} alt="" className="src" />
              </div>
              <div className="card">
                <p>
                  improve the readibility of the essay io have writen yesterday{" "}
                </p>
                <img src={assets.code_icon} alt="" className="src" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              className="text"
              placeholder="Enter Prompt here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={() => onSent()} />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display incurrect info, including about people, so double
            check its response. Your privacy and GEMINI APP.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
