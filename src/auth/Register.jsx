import React, { useState } from "react";
import {
  Grid,
  Button,
  Card,
  TextField,
  CardContent,
  Alert,
  AlertTitle,
} from "@mui/material";
import axios from "axios";

export const Register = () => {
  const [fullname, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const handleClear = () => {
    setFullName("");
    setContact("");
    setEmail("");
    setUserName("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async () => {
    const payload = { fullname, contact, email, username, password };
    if (password === confirmPassword) {
      const result = await axios.post(
        "http://localhost:2525/register",
        payload
      );
      setMsg(result.data);
      handleClear();
    } else {
      setErr("password does not match");
    }
  };

  return (
    <>
      <Card
        sx={{
          height: "auto",
          width: 800,
          marginLeft: 45,
          backgroundColor: "aliceblue",
        }}
        align="center"
      >
        <h1>Register Here</h1>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                value={fullname}
                variant="outlined"
                fullWidth
                label="Enter Full Name"
                onChange={(e) => setFullName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                value={contact}
                variant="outlined"
                fullWidth
                label="Contact"
                type="number"
                onChange={(e) => setContact(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                value={email}
                variant="outlined"
                fullWidth
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                value={username}
                variant="outlined"
                fullWidth
                label="User Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                value={password}
                variant="outlined"
                fullWidth
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                value={confirmPassword}
                variant="outlined"
                fullWidth
                label="Confirm Password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                onClick={handleClear}
              >
                Clear
              </Button>
            </Grid>
            <Grid item xs={12}>
              {msg !== "" && (
                <Alert variant="outlined" severity="success">
                  <AlertTitle>Success</AlertTitle>
                  {msg}
                </Alert>
              )}
              {err !== "" && (
                <Alert variant="outlined" severity="error">
                  <AlertTitle>Error</AlertTitle>

                  {err}
                </Alert>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Register;
