import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as P from "./Pages";
import GlobalStyle from "./Components/GlobalStyle";
import React from "react";
import { isLogin } from "./Atom";
import { useRecoilState } from "recoil";

const App = () => {
  const [login, setLogin] = useRecoilState(isLogin);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {login ? (
            <>
              <Route path="/" element={<P.Login />} />
              <Route path="/plan" element={<P.Plan />} />
              <Route path="/share" element={<P.Share />} />
              <Route path="/*" element={<P.NotFound />} />
            </>
          ) : (
            <>
              <Route path="/" element={<P.Login />} />
              <Route path="/plan" element={<P.Plan />} />
              <Route path="/share" element={<P.Share />} />
              <Route path="/*" element={<P.NotFound />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
