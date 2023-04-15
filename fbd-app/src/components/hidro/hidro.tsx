import React, { useEffect, useState } from "react";
import "./hidro.css";
import HeaderComponent from "../header/header";
import { useParams } from "react-router-dom";

const HidroComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  const [clients, setClients] = useState<any>([]);

  useEffect(() => {
    const fetchClients = async () => {
      await fetch("/getClientsHidro")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setClients(data.content);
        });
    };
    fetchClients();
  }, []);

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
      <h3 className="center-title">
        Clientes que usaram a hidromassagem e consumiram alimentos de 1800kcal
        ou menos
      </h3>
      {clients.length > 0
        ? clients.map((client: any) => {
            return (
              <div className="card card-background card-extra-style mt-2 mb-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Cliente:</b> {client.nome}
                  </h5>
                  <h6 className="card-subtitle text-muted">
                    <b>Gasto:</b> R$ {client.total_gasto}
                  </h6>
                </div>
              </div>
            );
          })
        : "(Vazio)"}
    </div>
  );
};

export default HidroComponent;
