import React from "react";
import "./card-panel.css";
import { Link } from "react-router-dom";

const CardPanelComponent: React.FC<{
  imgName: string;
  title: string;
  subtitle: string;
  buttonText: string;
  pageLink: string;
}> = ({ imgName, title, subtitle, buttonText, pageLink }) => {
  return (
    <div className="card card-background card-max-width px-2 py-2">
      <img src={require("../../../img/" + imgName)} className="image-height" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle text-muted">{subtitle}</h6>
        <Link to={pageLink} className="btn btn-primary mt-2">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CardPanelComponent;
