import React, { useEffect, useState } from "react";
import "./girls.css";
import HeaderComponent from "../header/header";
import { useParams } from "react-router-dom";

const GirlsComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  const [girls, setGirls] = useState<any>([]);

  useEffect(() => {
    const fetchGirls = async () => {
      await fetch("/getCatCafeGirls")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setGirls(data.content);
        });
    };
    fetchGirls();
  }, []);

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
      <h3 className="center-title">CatCafé++ Girls</h3>
      {girls.length > 0
        ? girls.map((girl: { nome: string; profissao: string }) => {
            return (
              <div className="card card-background card-extra-style mt-2 mb-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Funcionária:</b> {girl.nome}
                  </h5>
                  <h6 className="card-subtitle text-muted">
                    <b>Profissão:</b> {girl.profissao}
                  </h6>
                </div>
              </div>
            );
          })
        : "Carregando..."}
    </div>
  );
};

export default GirlsComponent;
