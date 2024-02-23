import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { CoinProvider } from "./components/context/coin/CoinContext";
import SearchPage from "./components/SearchPage";
import FirstPage from "./components/FirstPage";

const App = () => {
  return (
    <>
      {/* <CoinProvider> */}
        <Router>
        <div className="main-con" style={{ backgroundColor: "#141414"}}>
          <NavBar />
          <FirstPage/>
          <Routes>

            <Route path="/" element={<Home />}/>
            <Route path="/SearchPage" element={<SearchPage />}/>
          </Routes>
        </div>
        </Router>
      {/* </CoinProvider> */}
    </>
  );
};

export default App;
