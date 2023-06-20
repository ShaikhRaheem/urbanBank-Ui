import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const AccTypeItem = ({ item }) => {
  return (
    <>
      <Grid item xs={3}>
        <Card sx={{ backgroundColor: "aliceblue", marginTop: 5,border:"solid"}}>
          <CardContent>
            <h1>{item.name}</h1>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default AccTypeItem;
