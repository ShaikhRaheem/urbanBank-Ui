import axios from "axios";
import React, { useEffect, useState } from "react";
import LoansItem from "./LoansItem";
import { Grid, TextField, Button } from "@mui/material";

export const LoansList = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [tenure, setTenure] = useState("");

  const getData = async () => {
    const result = await axios.get("http://localhost:2525/loans");
    setData(result.data);
  };

  const handleAdd = async () => {
    const payload = { name, tenure };
    const result = await axios.post("http://localhost:2525/addloans", payload);
    getData();
    setName("");
    setTenure("");
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            value={name}
            variant="outlined"
            fullWidth
            label="Enter Loan Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={tenure}
            variant="outlined"
            fullWidth
            label="Enter Loan Term"
            onChange={(e) => setTenure(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            color="success"
            sx={{ height: 55 }}
            onClick={handleAdd}
          >
            Add Loan
          </Button>
        </Grid>

        {data.map((item) => (
          <LoansItem item={item} />
        ))}
      </Grid>
    </>
  );
};

export default LoansList;
