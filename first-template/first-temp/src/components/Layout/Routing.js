import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
import About from "../Pages/About";
import Details from "../Pages/Details";
import SearchBox from "../Pages/SearchBox";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin";
import Datas from "../Pages/Datas";


function Routing() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/"  element={<Home/>} />
      <Route  exact path="/about" element={<About />} />
      <Route exact path="/details/" element={<Details />} />
      <Route exact path="/searchboxs" element={<SearchBox />} />
      <Route  exact path="/datas"  element={<Datas/>} />
      <Route path='*' element={<div>not found page</div>} />
      <Route exact path="/admin" element={<Admin/>} /> 
    </Routes>
  );
}

export default Routing;
