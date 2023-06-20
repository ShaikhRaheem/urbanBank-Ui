import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BeniList from "./BeniList";

export const Benificiary = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    !token && navigate("/login");
  });
  return (
    <>
      <BeniList />
    </>
  );
};

export default Benificiary;
