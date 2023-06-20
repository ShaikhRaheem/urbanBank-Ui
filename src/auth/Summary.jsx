import axios from "axios";
import React, { useEffect, useState } from "react";
import { Summ } from "./Summ";
import { Grid } from "@mui/material";

export const Summary = ({ accno }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const payload = { accno };
    const result = await axios.post("http://localhost:2525/alltrans", accno);
    setData(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Grid container spacing={0.5}>
        <Grid item xs={4}>
          Transaction Type
        </Grid>
        <Grid item xs={4}>
          Amount(Rs.)
        </Grid>
        <Grid item xs={4}>
          Transaction Date
        </Grid>
        {data.map((item) => (
          <Summ item={item} />
        ))}
      </Grid>
    </>
  );
};

export default Summary;
