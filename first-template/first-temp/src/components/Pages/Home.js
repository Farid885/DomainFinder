import React from "react";
import DropSearch from "../Others/DropSearch";
import BottomSide from "../Others/BottomSide";
import HomeImage from "../Others/HomeImage";
import "../assets/styles/Home.css";
import Main from '../Layout/Main'


function Home() {

  return (
    <div>
      <Main/>
      <DropSearch />
      <BottomSide />
      <HomeImage />
    </div>
  );
}

export default Home;
