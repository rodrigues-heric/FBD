import React from "react";
import "./card.css";

const CardComponent: React.FC<{
  title: string;
  subtitle?: string;
  body: JSX.Element;
}> = ({ title, subtitle, body }) => {
  return (
    <div className="card card-background card-max-width px-2 py-2">
      <img
        src={require("../../../img/cat_cafe_logo_dark.png")}
        className="image-height"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {subtitle ? (
          <h6 className="card-subtitle text-muted">{subtitle}</h6>
        ) : null}
        <div className="card-text mt-4">{body}</div>
      </div>
    </div>
  );
};

export default CardComponent;
