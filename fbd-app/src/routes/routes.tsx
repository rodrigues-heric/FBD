import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomeComponent from "../components/home/home";
import PanelComponent from "../components/panel/panel";
import FoodComponent from "../components/food/food";
import AccommodationComponent from "../components/accommodation/accommodation";
import RecreationComponent from "../components/recreation/recreation";
import AboutComponent from "../components/about/about";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={HomeComponent} path="/" />
        <Route Component={PanelComponent} path="/panel/:userName" />
        <Route Component={FoodComponent} path="/food/:userName" />
        <Route
          Component={AccommodationComponent}
          path="/accommodation/:userName"
        />
        <Route Component={RecreationComponent} path="/recreation/:userName" />
        <Route Component={AboutComponent} path="/about/:userName" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
