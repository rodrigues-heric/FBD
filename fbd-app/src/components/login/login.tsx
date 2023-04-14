import React, { ChangeEventHandler, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

import CardComponent from "../generics/card/card";
import CreatedByComponent from "../generics/created-by/created-by";

const CardContent: (data: any) => JSX.Element = (data) => {
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
        {data &&
          Array.from(data).map((client: any) => {
            return <option>{client.nome}</option>;
          })}
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
  const [clients, setClients] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const [selectedOption, setOption] = useState("");

  const onSelectOpion: ChangeEventHandler<HTMLSelectElement> = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setOption(event.target.value);
  };

  useEffect(() => {
    const getClients = async () => {
      await fetch("/getClients")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setClients(data.content);
          setLoading(false);
        });
    };
    getClients();
  }, []);

  return (
    <div className="body-container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 grid-center">
          <div className="card card-background card-max-width px-2 py-2">
            <img
              src={require("../../img/cat_cafe_logo_dark.png")}
              className="image-height"
            />
            <div className="card-body">
              <h5 className="card-title">Seja bem-vindo!</h5>
              <h6 className="card-subtitle text-muted">Selecione seu login</h6>
              <div className="card-text mt-4">
                <div>
                  <select className="form-select" onChange={onSelectOpion}>
                    <option value="">Selecione</option>
                    {clients
                      ? Array.from(clients).map((client: any) => (
                          <option value={client.nome}>{client.nome}</option>
                        ))
                      : null}
                  </select>
                  {selectedOption ? (
                    <Link
                      to={`/panel/${selectedOption}`}
                      className="btn btn-primary mt-2"
                    >
                      Login
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 flex-align-bottom flex-align-end pb-3">
          <CreatedByComponent></CreatedByComponent>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
