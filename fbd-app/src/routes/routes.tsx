import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomeComponent from "../components/home/home";
import PanelComponent from "../components/panel/panel";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={HomeComponent} path="/" />
        <Route Component={PanelComponent} path="/panel/:userName" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
