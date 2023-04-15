import React, { useEffect, useState } from "react";
import "./about.css";
import HeaderComponent from "../header/header";
import { useParams } from "react-router-dom";

const AboutComponent: React.FC = () => {
  const routeParams = useParams();
  const userName = routeParams.userName;

  const [managers, setManagers] = useState<any>([]);

  useEffect(() => {
    const fetchManagers = async () => {
      await fetch("/getDeptAvgSalary")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setManagers(data.content);
        });
    };
    fetchManagers();
  }, []);

  return (
    <div className="body-container">
      <HeaderComponent user={userName}></HeaderComponent>
      <h3 className="center-title">Sobre nós</h3>
      {managers.length > 0
        ? managers.map(
            (manager: {
              nomedepartamento: string;
              mediasalario: number;
              nomegerente: string;
            }) => {
              return (
                <div className="card card-background card-extra-style mt-2 mb-2">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Gerente:</b> {manager.nomegerente}
                    </h5>
                    <h6 className="card-subtitle text-muted">
                      <b>Dept:</b> {manager.nomedepartamento}
                    </h6>
                    <div className="card-text mt-2">
                      <p>
                        A média salarial deste departamento é: R${" "}
                        {manager.mediasalario}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )
        : "Carregando..."}
    </div>
  );
};

export default AboutComponent;
