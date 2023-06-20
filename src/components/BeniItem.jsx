import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const BeniItem = ({ item }) => {
  return (
    <>
      <Grid item xs={3}>
        <Card sx={{ backgroundColor: "aliceblue" }}>
          <CardContent>
            <h2>Name :- {item.name}</h2>
            <h4>A/C No. :-{item.no}</h4>
            <h3>Bank :-{item.bank}</h3>
            <h4>City :-{item.city}</h4>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default BeniItem;
