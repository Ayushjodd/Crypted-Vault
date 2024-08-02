import React from "react";
import BrowserRouter, { Route, Routes } from "react-router-dom";
import Wallet from "../pages/Wallet";
import Home from "../pages/Home"
export default function routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Wallet/>}/>
            <Route path="/home " element={<Home/>}/>
            <Route path="" element={}/>
            <Route path="" element={}/>
        </Routes>
    </BrowserRouter>
  );
}
