import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField, Button } from "@mui/material";
import BranchesItem from "./BranchesItem";

export const BranchesList = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [branchcode, setBranchCode] = useState(0);
  const [city, setCity] = useState("");

  const getData = async () => {
    const result = await axios.get("http://localhost:2525/branches");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  const handleAdd = async () => {
    const payload = { name, branchcode, city };
    const result = await axios.post("http://localhost:2525/addbranch", payload);
    getData();
    setName(""); //empty text field ke liye
    setBranchCode(""); //empty text field ke liye
    setCity(""); //empty text field ke liye
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: 2, border: "solid" }}
      align="center"
    >
      <Grid item xs={3}>
        <TextField
          value={name} // empty text field ke liye
          variant="outlined"
          label="Branch name"
          fullWidth
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          value={branchcode}
          variant="outlined"
          label="Branch Code"
          fullWidth
          type="Number"
          onChange={(e) => setBranchCode(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          value={city}
          variant="outlined"
          label="City"
          fullWidth
          onChange={(e) => setCity(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          fullWidth
          color="success"
          sx={{ height: 55 }}
          onClick={handleAdd}
        >
          Add
        </Button>
      </Grid>

      {data.map((item) => (
        <BranchesItem item={item} />
      ))}
    </Grid>
  );
};

export default BranchesList;
