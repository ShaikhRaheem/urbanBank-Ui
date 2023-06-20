import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const CardsItem = ({ item }) => {
  return (
    <>
      <Grid item xs={3}>
        <Card sx={{backgroundColor:"aliceblue"}}>
          <CardContent>
            <h1>{item.name}</h1>
            <h3 className="cardtype">{item.type}</h3>
            <h2>{item.limit}</h2>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default CardsItem;
