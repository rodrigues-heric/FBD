import React from "react";
import "./recreation.css";
import { useParams } from "react-router-dom";
import HeaderComponent from "../header/header";

const RecreationComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
    </div>
  );
};

export default RecreationComponent;
