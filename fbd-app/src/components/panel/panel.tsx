import React from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../header/header";

import "./panel.css";

const PanelComponent: React.FC = () => {
  const routeParams = useParams();

  return (
    <div className="body-container">
      <HeaderComponent user={routeParams.userName}></HeaderComponent>
      <div className="px-3 pt-3">
        <h4>
          Olá {routeParams.userName}!
          <p>
            <small className="text-muted">O que deseja?</small>
          </p>
        </h4>
      </div>
    </div>
  );
};

export default PanelComponent;
