import React from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../header/header";
import CardPanelComponent from "../generics/card-panel/card-panel";

import "./panel.css";

const foodImagePath: string = "cat_cafe_logo_dark.png";
const foodTitle: string = "Alimentação";
const foodSubtitle: string = "Escolha o que deseja comer";
const foodButtonText: string = "Fazer pedido";
const foodPageLink: string = "/";

const accommodationImagePath: string = "cat_cafe_logo_dark.png";
const accommodationTitle: string = "Acomodação";
const accommodationSubtitle: string = "Escolha uma sala";
const accommodationButtonText: string = "Selecionar sala";
const accommodationPageLink: string = "/";

const recreationImagePath: string = "cat_cafe_logo_dark.png";
const recreationTitle: string = "Recreação";
const recreationSubtitle: string = "Escolha uma atividade";
const recreationButtonText: string = "Selecionar atividade";
const recreationPageLink: string = "/";

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
        <div className="row mt-4">
          <div className="col-4 center-align">
            <CardPanelComponent
              imgName={foodImagePath}
              title={foodTitle}
              subtitle={foodSubtitle}
              buttonText={foodButtonText}
              pageLink={foodPageLink}
            ></CardPanelComponent>
          </div>
          <div className="col-4 center-align">
            <CardPanelComponent
              imgName={accommodationImagePath}
              title={accommodationTitle}
              subtitle={accommodationSubtitle}
              buttonText={accommodationButtonText}
              pageLink={accommodationPageLink}
            ></CardPanelComponent>
          </div>
          <div className="col-4 center-align">
            <CardPanelComponent
              imgName={recreationImagePath}
              title={recreationTitle}
              subtitle={recreationSubtitle}
              buttonText={recreationButtonText}
              pageLink={recreationPageLink}
            ></CardPanelComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelComponent;
