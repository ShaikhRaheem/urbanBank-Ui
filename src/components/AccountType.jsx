import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccTypeList from "./AccTypeList";

export const AccountType = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    !token && navigate("/login");
  }, []);
  return (
    <>
      <AccTypeList />
    </>
  );
};

export default AccountType;
