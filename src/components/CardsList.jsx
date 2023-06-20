import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField, Button, Alert } from "@mui/material";
import CardsItem from "./CardsItem";
export const CardsList = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState(""); //for showing msg

  const getData = async () => {
    const result = await axios.get("http://localhost:2525/cards");
    setData(result.data);
  };
  const handleAdd = async () => {
    const payload = { name };
    const result = await axios.post("http://localhost:2525/addcard", payload);
    setMsg(result.data);
    getData();
    setName("");
  };
  useEffect(()=>{
     setTimeout(()=>{
     setMsg("")
     },2000)  //mili second 
  },[msg])
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: 5, padding: 2 }}>
        <Grid item xs={8}>
          <TextField
            value={name}
            variant="outlined"
            fullWidth
            label="Add New card"
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
            Submit
          </Button>
        </Grid>
        <Grid item xs={12}>
          {msg!== "" && <Alert severity="success">{msg}</Alert>}
        </Grid>
        {data.map((item) => (
          <CardsItem item={item} />
        ))}
      </Grid>
    </>
  );
};

export default CardsList;
