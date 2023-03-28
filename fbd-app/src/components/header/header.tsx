import React from "react";
import "./header.css";

const HeaderComponent: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-background">
      <div className="container-fluid">
        <span className="mb-0 py-2 h3">CatCafé++</span>
      </div>
    </nav>
  );
};

export default HeaderComponent;
