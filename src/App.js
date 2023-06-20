import React from "react";
import { Landing } from "./components/Landing";
import { Card, CardContent } from "@mui/material";
import "./components/common.css";
function App() {
  return (
    <React.Fragment>
      <Card sx={{height:"auto"}}>
        <CardContent>
          <Landing />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default App;
