import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { Login } from "./Login";
import RestaurantPage from "./RestaurantPage";
import { PrivateRoute } from "../Components/PrivateRoute";

export const MainRoutes = () => {
  return <Routes>
    <Route path={"/"} element={<HomePage/>}/>
    <Route path={"/login"} element={<Login/>}/>
    <Route path={"/restaurant/:id"} element={
   <PrivateRoute>
<RestaurantPage/>
</PrivateRoute>
    }/>
  </Routes>;
};
