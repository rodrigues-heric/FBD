import React from "react";
import "./body.css";

import CardComponent from "../generics/card/card";
import CreatedByComponent from "../generics/created-by/created-by";

const CardContent: () => JSX.Element = () => {
  return (
    <div>
      <select className="form-select">
        <option selected>Selecione</option>
        <option value="A">AAA</option>
        <option value="B">BBB</option>
        <option value="C">CCC</option>
      </select>
      <button className="btn btn-primary mt-2">Login</button>
    </div>
  );
};

const BodyComponent: React.FC = () => {
  return (
    <div className="body-container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 grid-center">
          <CardComponent
            title="Seja bem-vindo!"
            subtitle="Selecione seu login"
            body={CardContent()}
          ></CardComponent>
        </div>
        <div className="col-4 flex-align-bottom flex-align-end pb-3">
          <CreatedByComponent></CreatedByComponent>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
