import React, { useEffect, useState } from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export const Transaction = () => {
  const [amount, setAmount] = useState(0);
  const [transtype, setTransType] = useState("");
  const [msg, setMsg] = useState("");
  const [options] = useState([
    { value: "Dr", label: "Debit" },
    { value: "Cr", label: "Credit" },
  ]);
  const navigate = useNavigate();
  const handleAdd = async () => {
    const accno = "125125325";
    const acctype = "Saving";
    const payload = { amount, transtype, accno, acctype };
    const result = await axios.post("http://localhost:2525/addtrans", payload);
    setMsg(result.data);
    setAmount("");
  };
  useEffect(() => {
    if (msg !== "") {
      setTimeout(() => {
        setMsg("");
      }, 2000);
    }
  }, [msg]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    !token && navigate("/login");
  });
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Select
            options={options}
            onChange={(opt) => setTransType(opt.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={amount}
            variant="outlined"
            fullWidth
            label="Amount"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            sx={{ height: 55 }}
            onClick={handleAdd}
          >
            Add Transaction
          </Button>
        </Grid>
        <Grid item xs={12}>
          {msg !== "" && (
            <Alert variant="filled" severity="success">
              {msg}
            </Alert>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Transaction;
