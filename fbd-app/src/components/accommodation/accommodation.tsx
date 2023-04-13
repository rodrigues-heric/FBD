import React from "react";
import "./accommodation.css";
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
        <div className="btn btn-primary mt-2">Alugar</div>
      </div>
    </div>
  );
};

const AccommodationComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  const imgMultiRoom: string = "regular_room_multi_function.png";
  const titleMultiRoom: string = "Regular room multi function";
  const subtitleMultiRoom: number = 21.57;

  const imgFlatRoom: string = "regular_room_flat.png";
  const titleFlatRoom: string = "Regular room flat";
  const subtitleFlatRoom: number = 17.39;

  const imgWideRoom: string = "wide_room.png";
  const titleWideRoom: string = "Wide room";
  const subtitleWideRoom: number = 35.6;

  const imgVipRoom: string = "vip_room.png";
  const titleVipRoom: string = "VIP room";
  const subtitleVipRoom: number = 59.13;

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
      <p className="h3 center-title">Acomodação</p>
      <div className="row px-4 mt-4">
        <div className="col-3">
          {CardElement(imgMultiRoom, titleMultiRoom, `R$ ${subtitleMultiRoom}`)}
        </div>
        <div className="col-3">
          {CardElement(imgFlatRoom, titleFlatRoom, `R$ ${subtitleFlatRoom}`)}
        </div>
        <div className="col-3">
          {CardElement(imgWideRoom, titleWideRoom, `R$ ${subtitleWideRoom}`)}
        </div>
        <div className="col-3">
          {CardElement(imgVipRoom, titleVipRoom, `R$ ${subtitleVipRoom}`)}
        </div>
      </div>
    </div>
  );
};

export default AccommodationComponent;
