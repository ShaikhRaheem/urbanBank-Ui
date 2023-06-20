import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
export const NavBarItem = ({ item }) => {
  return (
    <>
      <Grid item xs={item.xs}>
        <Link to={item.path}>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            // sx={{ backgroundColor: "grey", fontWeight: "bold" }}
          >
            {item.label}
          </Button>
        </Link>
      </Grid>
    </>
  );
};

export default NavBarItem;
