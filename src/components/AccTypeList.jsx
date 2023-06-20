import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import AccTypeItem from "./AccTypeItem";
import axios from "axios";
export const AccTypeList = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const getData = async () => {
    const result = await axios.get("http://localhost:2525/acctype");
    setData(result.data);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  const handleAdd = async () => {
    const payload = { name };
    const result = await axios.post(
      "http://localhost:2525/addacctype",
      payload
    );
    getData();
    setName("");
  };
  return (
    <>
      <Grid container spacing={2} align="center">
        <Grid item xs={8}>
          <TextField
            value={name}
            variant="outlined"
            fullWidth
            label="Add Account Type"
            onChange={(e) => setName(e.target.value)}
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
            Add
          </Button>
        </Grid>
        {data.map((item) => (
          <AccTypeItem item={item} />
        ))}
      </Grid>
    </>
  );
};

export default AccTypeList;
