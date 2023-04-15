import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomeComponent from "../components/home/home";
import PanelComponent from "../components/panel/panel";
import AboutComponent from "../components/about/about";
import GirlsComponent from "../components/girls/girls";
import VipIogaComponent from "../components/vipIoga/vipIoga";
import MackbookComponent from "../components/mackbook/mackbook";
import NotPayersComponent from "../components/notpayers/notpayers";
import VipCostsComponent from "../components/vipcosts/vipcosts";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={HomeComponent} path="/" />
        <Route Component={PanelComponent} path="/panel/:userName" />
        <Route Component={AboutComponent} path="/about/:userName" />
        <Route Component={GirlsComponent} path="/girls/:userName" />
        <Route Component={VipIogaComponent} path="/vipioga/:userName" />
        <Route Component={MackbookComponent} path="/mackbook/:userName" />
        <Route Component={NotPayersComponent} path="/notpayers/:userName" />
        <Route Component={VipCostsComponent} path="/vipcosts/:userName" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
