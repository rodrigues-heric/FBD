import React, { useEffect, useState } from "react";
import "./notpayers.css";
import HeaderComponent from "../header/header";
import { useParams } from "react-router-dom";

const NotPayersComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  const [notPayers, setNotPayers] = useState<any>([]);

  useEffect(() => {
    const fetchNotPayers = async () => {
      await fetch("/getNotPayers")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setNotPayers(data.content);
        });
    };
    fetchNotPayers();
  }, []);

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
      <h3 className="center-title">Clientes que não gastaram no local</h3>
      {notPayers.length > 0
        ? notPayers.map((notPayer: { nome: string }) => {
            return (
              <div className="card card-background card-extra-style mt-2 mb-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Cliente:</b> {notPayer.nome}
                  </h5>
                </div>
              </div>
            );
          })
        : "(Vazio)"}
    </div>
  );
};

export default NotPayersComponent;
