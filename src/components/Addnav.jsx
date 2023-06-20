import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";

export const Addnav = () => {
  const [xs, setXs] = useState("");
  const [path, setPath] = useState("");
  const [label, setLabel] = useState("");
  const [isActive, setIsActive] = useState("");

  const handleAdd = async () => {
    const payload = { xs, path, label, isActive };
    const result = await axios.post("http://localhost:2525/addnavs", payload);
    // handleAdd();
  };
  // useEffect(() => {
  //   handleAdd();
  // }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <TextField
            variant="filled"
            fullWidth
            label="xs"
            onChange={(e) => setXs(e.target.value)}
          />
        </Grid>
        <Grid item xs={2.5}>
          <TextField
            variant="filled"
            fullWidth
            label="path"
            onChange={(e) => setPath(e.target.value)}
          />
        </Grid>
        <Grid item xs={2.5}>
          <TextField
            variant="filled"
            fullWidth
            label="label"
            onChange={(e) => setLabel(e.target.value)}
          />
        </Grid>
        <Grid item xs={2.5}>
          <TextField
            variant="filled"
            fullWidth
            label="isActive"
            onChange={(e) => setIsActive(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            sx={{ height: 55 }}
            onClick={handleAdd}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Addnav;
