import React from "react";
import "./accommodation.css";
import HeaderComponent from "../header/header";
import { useParams } from "react-router-dom";

const AccommodationComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
    </div>
  );
};

export default AccommodationComponent;
