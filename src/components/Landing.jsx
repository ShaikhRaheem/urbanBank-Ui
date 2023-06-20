import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountType from "./AccountType";
import Benificiary from "./Benificiary";
import Branches from "./Branches";
import Cards from "./Cards";
// import Faq from "./Faq";
import FundTransfer from "./FundTransfer";
import { Home } from "./Home";
import Loans from "./Loans";
import MobileBanking from "./MobileBanking";
import { NavBar } from "./NavBar";
import Setting from "./Setting";
import SignUp from "../auth/SignUp";
import { Login } from "../auth/Login";
import Register from "../auth/Register";
import Logout from "../auth/Logout";
import Transaction from "../auth/Transaction";
import Addnav from "./Addnav";
// import Services from "./Services";

export const Landing = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mobilebanking" element={<MobileBanking />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/acctype" element={<AccountType />} />
          <Route path="loans" element={<Loans />} />
          <Route path="setting" element={<Setting />} />
          <Route path="benificiary" element={<Benificiary />} />
          <Route path="funds" element={<FundTransfer />} />
          <Route path="cards" element={<Cards />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/addnav" element={<Addnav />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
