import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const LoansItem = ({ item }) => {
  return (
    <>
      <Grid item xs={3}>
        <Card sx={{backgroundColor:"aliceblue"}}>
          <CardContent>
            <h1>{item.name}</h1>
            <h3>{item.tenure}</h3>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default LoansItem;
