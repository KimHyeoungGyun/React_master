import "./App.css";
import Search from "./compo/Search";

import logo from "./img/naverlogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import NewsItem from "./compo/NewsItem";
import { createContext, useState } from "react";

export const NaverData = createContext();

function App() {
  const [searchData, setSearchData] = useState([]);

  return (
    <div className="App">
      <Link to ='/'>
        <img className="logo" src={logo} alt="NAVER SEARCH API" />
      </Link>
      <div className="App-contents">
        <NaverData.Provider
          value={{ searchData: searchData, setSearchData: setSearchData }}
        >
          <Routes>
            <Route path="/" element={<Search />}></Route>
            <Route path="/book" element={<NewsItem></NewsItem>}></Route>
          </Routes>
        </NaverData.Provider>
      </div>
    </div>
  );
}

export default App;
