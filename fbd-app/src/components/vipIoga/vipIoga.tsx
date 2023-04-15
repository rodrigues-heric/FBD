import React, { useEffect, useState } from "react";
import "./vipIoga.css";
import HeaderComponent from "../header/header";
import { useParams } from "react-router-dom";

const VipIogaComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  const [vips, setVip] = useState<any>([]);

  useEffect(() => {
    const fetchVip = async () => {
      await fetch("/getVipIoga")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setVip(data.content);
        });
    };
    fetchVip();
  }, []);

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
      <h3 className="center-title">CatCafé++ Girls</h3>
      {vips.length > 0
        ? vips.map((vip: { nome: string }) => {
            return (
              <div className="card card-background card-extra-style mt-2 mb-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Cliente:</b> {vip.nome}
                  </h5>
                </div>
              </div>
            );
          })
        : "Carregando..."}
    </div>
  );
};

export default VipIogaComponent;
