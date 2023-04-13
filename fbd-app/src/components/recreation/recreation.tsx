import React from "react";
import "./recreation.css";
import { useParams } from "react-router-dom";
import HeaderComponent from "../header/header";

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
        <div className="btn btn-primary mt-2">Alugar</div>
      </div>
    </div>
  );
};

const RecreationComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  const imgVideogame: string = "videogame.png";
  const titleVideogame: string = "Videogame";
  const subtitleVideogame: number = 5.0;

  const imgBilliards: string = "billiards.png";
  const titleBilliards: string = "Billiards";
  const subtitleBilliards: number = 2.0;

  const imgKaraoke: string = "karaoke.png";
  const titleKaraoke: string = "Karaoke";
  const subtitleKaraoke: number = 3.0;

  const imgVr: string = "vr.png";
  const titleVr: string = "VR";
  const subtitleVr: number = 10.99;

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
      <p className="h3 center-title">Lazer</p>
      <div className="row px-4 mt-4">
        <div className="col-3">
          {CardElement(imgVideogame, titleVideogame, `R$ ${subtitleVideogame}`)}
        </div>
        <div className="col-3">
          {CardElement(imgBilliards, titleBilliards, `R$ ${subtitleBilliards}`)}
        </div>
        <div className="col-3">
          {CardElement(imgKaraoke, titleKaraoke, `R$ ${subtitleKaraoke}`)}
        </div>
        <div className="col-3">
          {CardElement(imgVr, titleVr, `R$ ${subtitleVr}`)}
        </div>
      </div>
    </div>
  );
};

export default RecreationComponent;
