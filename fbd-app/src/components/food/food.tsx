import React from "react";
import "./food.css";
import HeaderComponent from "../header/header";
import { useParams } from "react-router-dom";

const FoodComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
    </div>
  );
};

export default FoodComponent;
