import React, { useState } from "react";
import { Grid, TextField, Button, Card, Alert } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleClear = () => {
    setUserName("");
    setPassword("");
  };
  const handleLogin = async () => {
    const payload = { username, password };
    try {
      const result = await axios.post("http://localhost:2525/login", payload);
      sessionStorage.setItem("token", result.data);
      // if (result.status === 200) {
      setMsg("Successfully Logged in");
      setErr("");
      //   alert("You Are Logged In to Home Page ");
      navigate("/");
    } catch (err) {
      setErr(err.message);
      setMsg("");
    }
  };

  return (
    <>
      <Grid container spacing={3} align="center">
        <Grid item xs={12}>
          <TextField
            value={username}
            variant="outlined"
            label="user name"
            sx={{ width: "50%" }}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            value={password}
            variant="outlined"
            label="Password"
            sx={{ width: "50%" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            color="secondary"
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClear}
            color="secondary"
          >
            cancel
          </Button>
        </Grid>
        <Grid item xs={12}>
          {msg !== "" && <Alert severity="success">{msg}</Alert>}
          {err !== "" && <Alert severity="error">{err}</Alert>}
        </Grid>
      </Grid>
    </>
  );
};
