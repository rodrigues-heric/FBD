import React, { ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

import CardComponent from "../generics/card/card";
import CreatedByComponent from "../generics/created-by/created-by";

const CardContent: () => JSX.Element = () => {
  const [selectedOption, setOption] = useState("");

  const onSelectOpion: ChangeEventHandler<HTMLSelectElement> = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <select className="form-select" onChange={onSelectOpion}>
        <option value="">Selecione</option>
        <option value="AAA">AAA</option>
        <option value="BBB">BBB</option>
        <option value="CCC">CCC</option>
      </select>
      {selectedOption ? (
        <Link to={`/panel/${selectedOption}`} className="btn btn-primary mt-2">
          Login
        </Link>
      ) : null}
    </div>
  );
};

const LoginComponent: React.FC = () => {
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

export default LoginComponent;
