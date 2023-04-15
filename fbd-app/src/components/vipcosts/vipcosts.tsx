import React, { useEffect, useState } from "react";
import "./vipcosts.css";
import HeaderComponent from "../header/header";
import { useParams } from "react-router-dom";

const VipCostsComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  const [vips, setVips] = useState<any>([]);

  useEffect(() => {
    const fetchVips = async () => {
      await fetch("/getVipCosts")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setVips(data.content);
        });
    };
    fetchVips();
  }, []);

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
      <h3 className="center-title">Gastos dos VIPs com lazer</h3>
      {vips.length > 0
        ? vips.map((vip: { nome: string; custo: number }) => {
            return (
              <div className="card card-background card-extra-style mt-2 mb-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Cliente:</b> {vip.nome}
                  </h5>
                  <h6 className="card-subtitle text-muted">
                    <b>Gasto:</b> R$ {vip.custo}
                  </h6>
                </div>
              </div>
            );
          })
        : "(Vazio)"}
    </div>
  );
};

export default VipCostsComponent;
