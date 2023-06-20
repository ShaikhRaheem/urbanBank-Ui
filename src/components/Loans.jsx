import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoansList from "./LoansList";

export const Loans = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    !token && navigate("/login");
  });
  return (
    <>
      <LoansList />
    </>
  );
};

export default Loans;
