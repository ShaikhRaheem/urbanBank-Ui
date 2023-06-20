import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import BeniItem from "./BeniItem";

export const BeniList = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [no, setNo] = useState(0);
  const [bank, setBank] = useState("");
  const [city, setCity] = useState("");

  const getData = async () => {
    const result = await axios.get("http://localhost:2525/benificiaries");
    setData(result.data);
  };

  const handleAdd = async () => {
    const payload = { name, no, bank, city };
    const result = await axios.post(
      "http://localhost:2525/addbenificiary",
      payload
    );
    getData();
    setName("");
    setNo("");
    setBank("");
    setCity("");
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <TextField
            value={name}
            variant="outlined"
            fullWidth
            label="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={2.5}>
          <TextField
            value={no}
            variant="outlined"
            fullWidth
            label="Enter A/c. No."
            onChange={(e) => setNo(e.target.value)}
          />
        </Grid>
        <Grid item xs={2.5}>
          <TextField
            value={bank}
            variant="outlined"
            fullWidth
            label="Enter Bank "
            onChange={(e) => setBank(e.target.value)}
          />
        </Grid>
        <Grid item xs={2.5}>
          <TextField
            value={city}
            variant="outlined"
            fullWidth
            label="Enter City"
            onChange={(e) => setCity(e.target.value)}
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
            Add
          </Button>
        </Grid>
        {data.map((item) => (
          <BeniItem item={item} />
        ))}
      </Grid>
    </>
  );
};

export default BeniList;
