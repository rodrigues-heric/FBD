import React from "react";
import "./food.css";
import HeaderComponent from "../header/header";
import { useParams } from "react-router-dom";

const CardElement: (
  imgName: string,
  title: string,
  subtitle: string
) => JSX.Element = (imgName: string, title: string, subtitle: string) => {
  return (
    <div className="card card-background card-max-width px-2 py-2">
      <img src={require("../../img/" + imgName)} className="image-height" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle text-muted">{subtitle}</h6>
        <div className="btn btn-primary mt-2">Comprar</div>
      </div>
    </div>
  );
};

const FoodComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  const imgBackfat: string = "backfat_soy_sauce_ramen.png";
  const titleBackfat: string = "Backfat soy sauce ramen";
  const subtitleBackfat: number = 32.97;

  const imgPorkRice: string = "pork_rice.png";
  const titlePorkRice: string = "Pork rice";
  const subtitlePorkRice: number = 28.77;

  const imgSpicy: string = "rich_spicy_miso_ramen.png";
  const titleSpicy: string = "Rich spicy miso ramen";
  const subtitleSpicy: number = 30.99;

  const imgSliced: string = "thick_sliced_red_ginger_flavor.png";
  const titleSliced: string = "Thick sliced red ginger flavor";
  const subtitleSliced: number = 35.41;

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
      <p className="h3 center-title">Alimentação</p>
      <div className="row px-4 mt-4">
        <div className="col-3">
          {CardElement(imgBackfat, titleBackfat, `R$ ${subtitleBackfat}`)}
        </div>
        <div className="col-3">
          {CardElement(imgPorkRice, titlePorkRice, `R$ ${subtitlePorkRice}`)}
        </div>
        <div className="col-3">
          {CardElement(imgSpicy, titleSpicy, `R$ ${subtitleSpicy}`)}
        </div>
        <div className="col-3">
          {CardElement(imgSliced, titleSliced, `R$ ${subtitleSliced}`)}
        </div>
      </div>
    </div>
  );
};

export default FoodComponent;
