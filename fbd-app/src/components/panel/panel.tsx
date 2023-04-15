import React from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../header/header";
import CardPanelComponent from "../generics/card-panel/card-panel";

import "./panel.css";

const logoImage: string = "cat_cafe_logo.png";
const logoImageDark: string = "cat_cafe_logo_dark.png";

const womenWorkersTitle: string = "Funcionárias";
const womenWorkersSubtitle: string = "Conheça o CatCafe++ Girls";
const womenWorkersButtonText: string = "Saiba mais";
const womenWorkersPageLink: string = "/girls";

const vipIogaTitle: string = "VIP Ioga";
const vipIogaSubtitle: string = "Veja quais clientes VIP fizeram ioga";
const vipIogaButtonText: string = "Descobrir";
const vipIogaPageLink: string = "/vipioga";

const mackbookTitle: string = "Workspaces com Mackbook";
const mackbookSubtitle: string =
  "Saiba quais clientes alugaram workspaces com Mackbook";
const mackbookButtonText: string = "Descobrir";
const macbookPageLink: string = "/mackbook";

const avgSalaryImagePath: string = "cat_cafe_logo.png";
const avgSalaryTitle: string = "Média salarial por departamento";
const avgSalarySubtitle: string = "Conheça nossos gerentes e departamentos";
const avgSalaryButtonText: string = "Saiba mais";
const avgSalaryPageLink: string = "/about";

const PanelComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
      <div className="px-3 pt-3">
        <h4>
          Olá {userName}!
          <p>
            <small className="text-muted">O que deseja?</small>
          </p>
        </h4>
        <div className="row mt-4 mb-4">
          <div className="col-4 center-align">
            <div className="row">
              <CardPanelComponent
                imgName={logoImageDark}
                title={womenWorkersTitle}
                subtitle={womenWorkersSubtitle}
                buttonText={womenWorkersButtonText}
                pageLink={`${womenWorkersPageLink}/${userName}`}
              ></CardPanelComponent>
            </div>
            <div className="row mt-4">
              <CardPanelComponent
                imgName={avgSalaryImagePath}
                title={avgSalaryTitle}
                subtitle={avgSalarySubtitle}
                buttonText={avgSalaryButtonText}
                pageLink={`${avgSalaryPageLink}/${userName}`}
              ></CardPanelComponent>
            </div>
          </div>
          <div className="col-4 center-align">
            <CardPanelComponent
              imgName={logoImage}
              title={vipIogaTitle}
              subtitle={vipIogaSubtitle}
              buttonText={vipIogaButtonText}
              pageLink={`${vipIogaPageLink}/${userName}`}
            ></CardPanelComponent>
          </div>
          <div className="col-4 center-align">
            <CardPanelComponent
              imgName={logoImageDark}
              title={mackbookTitle}
              subtitle={mackbookSubtitle}
              buttonText={mackbookButtonText}
              pageLink={`${macbookPageLink}/${userName}`}
            ></CardPanelComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelComponent;
