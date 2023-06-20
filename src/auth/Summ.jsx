import React from "react";
import { Card, CardContent, Grid } from "@mui/material";

export const Summ = ({ item }) => {
  const getFormateDate = (dt) => {
    const newDt = new Date(dt);
    return newDt.toLocaleString("en-GB", {
      hour12: false,
    });
  };
  return (
    <>
      <Grid item xs={4}>
        <Card sx={{borderBottom:"1px solid"}}>
          <CardContent>
            {item.transtype == "Cr" ? "Credit" : "Debit"}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>{item.amount}</CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          {" "}
          <CardContent>{getFormateDate(item.transdate)}</CardContent>
        </Card>
      </Grid>
    </>
  );
};
