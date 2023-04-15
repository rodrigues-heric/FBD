import React from "react";
import { Logout } from "@mui/icons-material";
import "./header.css";
import { Link } from "react-router-dom";

const HeaderUserName: (userName: string) => JSX.Element = (
  userName: string
) => {
  return (
    <span className="me-4">
      {userName} &nbsp; &nbsp;
      <Link to={"/"}>
        <Logout color="warning"></Logout>
      </Link>
    </span>
  );
};

const HeaderComponent: React.FC<{ user?: string }> = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-background space-items">
      <span className="navbar-title-align mb-0 py-2 h3">CatCafé++</span>
      {user ? HeaderUserName(user) : null}
    </nav>
  );
};

export default HeaderComponent;
