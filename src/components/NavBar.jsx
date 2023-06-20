import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import axios from "axios";
import NavBarItem from "./NavBarItem";

export const NavBar = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:2525/navs");
    setdata(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Grid container spacing={1} sx={{ marginBottom: 5 }}>
        {data.map((item) => (
          <NavBarItem item={item} />
        ))}
      </Grid>
    </>
  );
};
