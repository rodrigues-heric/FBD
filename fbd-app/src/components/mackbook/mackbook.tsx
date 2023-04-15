import React, { useEffect, useState } from "react";
import "./mackbook.css";
import HeaderComponent from "../header/header";
import { useParams } from "react-router-dom";

const MackbookComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  const [mackbooks, setMackbook] = useState<any>([]);

  useEffect(() => {
    const fetchMackbook = async () => {
      await fetch("/getMackbook")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setMackbook(data.content);
        });
    };
    fetchMackbook();
  }, []);

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
      <h3 className="center-title">Workspaces com Mackbook</h3>
      <h5 className="center-title">
        Clientes que reservaram workspaces com Mackbook e consumiram alimentos
        do tipo FastFood
      </h5>
      {mackbooks.length > 0
        ? mackbooks.map((mack: { nome: string }) => {
            return (
              <div className="card card-background card-extra-style mt-2 mb-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Cliente:</b> {mack.nome}
                  </h5>
                </div>
              </div>
            );
          })
        : "Carregando..."}
    </div>
  );
};

export default MackbookComponent;
