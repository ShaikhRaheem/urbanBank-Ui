import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import axios from "axios";

export const SignUp = () => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [accno, setAccno] = useState(125125325);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); ///
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async () => {
    const payload = {
      fname,
      mname,
      lname,
      contact,
      accno,
      email,
      username,
      password,
    };
    if (password === confirmPassword) {
      const result = await axios.post(
        " http://localhost:2525/adduser",
        payload
      );
      setMsg(result.data);
      handleClear();
    } else {
      setErr("confirm password is wrong");
    }
  };

  const handleClear = () => {
    setFname("");
    setMname("");
    setLname("");
    setContact("");
    setAccno("");
    setEmail("");
    setUserName("");
    setPassword("");
    setConfirmPassword("");
  };
  useEffect(() => {
    if (
      fname !== "" &&
      lname !== "" &&
      contact !== "" &&
      accno !== "" &&
      email !== "" &&
      username !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [
    fname,
    lname,
    contact,
    email,
    accno,
    username,
    password,
    confirmPassword,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setMsg("");
      setErr("");
    }, 3000);
  });
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            value={fname}
            required
            variant="outlined"
            fullWidth
            label="First Name"
            onChange={(e) => setFname(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={mname}
            variant="outlined"
            fullWidth
            label="Middle Name"
            onChange={(e) => setMname(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={lname}
            required
            variant="outlined"
            fullWidth
            label="Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={accno}
            required
            variant="outlined"
            fullWidth
            label="Account Number"
            onChange={(e) => setAccno(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={contact}
            required
            variant="outlined"
            fullWidth
            label="Contact Number"
            type="number"
            onChange={(e) => setContact(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={email}
            required
            variant="outlined"
            fullWidth
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={username}
            required
            variant="outlined"
            fullWidth
            label="User Name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={password}
            required
            variant="outlined"
            fullWidth
            label="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={confirmPassword}
            required
            variant="outlined"
            fullWidth
            label="Confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <Button
            disabled={!show}
            variant="contained"
            fullWidth
            color="success"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            color="error"
            onClick={handleClear}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item={12}>
          {msg !== "" && <Alert severity="success">{msg}</Alert>}
          {err !== "" && <Alert severity="warning">{err}</Alert>}
        </Grid>
        {/* <Grid item xs={12}>
        </Grid> */}
      </Grid>
    </>
  );
};

export default SignUp;
