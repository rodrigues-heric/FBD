import React from "react";
import HeaderComponent from "../header/header";
import LoginComponent from "../login/login";
import "./home.css";

const HomeComponent: React.FC = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <LoginComponent></LoginComponent>
    </div>
  );
};

export default HomeComponent;
