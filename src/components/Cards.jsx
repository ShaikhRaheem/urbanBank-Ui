import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardsList from "./CardsList";

export const Cards = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    !token && navigate("/login");
  });
  return (
    <>
      <CardsList />
    </>
  );
};

export default Cards;
