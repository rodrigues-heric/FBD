import React, { ReactNode } from "react";
import "./card.css";

const CardComponent: React.FC<{
  title: string;
  subtitle?: string;
  body: JSX.Element;
}> = ({ title, subtitle, body }) => {
  return (
    <div className="card card-background px-2 py-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle text-muted">{subtitle}</h6>
        <div className="card-text mt-4">{body}</div>
      </div>
    </div>
  );
};

export default CardComponent;
