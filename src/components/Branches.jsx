import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BranchesList from "./BranchesList";
import { Grid } from "@mui/material";

export const Branches = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    !token && navigate("/login");
  }, []);
  return (
    <>
      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        <BranchesList />
      </Grid>
    </>
  );
};

export default Branches;
