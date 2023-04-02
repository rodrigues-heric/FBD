import React from "react";
import HeaderComponent from "../header/header";
import BodyComponent from "../body/body";
import "./home.css";

const HomeComponent: React.FC = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <BodyComponent></BodyComponent>
    </div>
  );
};

export default HomeComponent;
