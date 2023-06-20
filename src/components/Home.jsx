import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import AllDebit from "../auth/AllDebit";
import AllCredit from "../auth/AllCredit";
import Balance from "../auth/Balance";
import Summary from "../auth/Summary";
import Lasttrans from "../auth/Lasttrans";

export const Home = () => {
  const [accno, setAccno] = useState(125125325);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    !token && navigate("/login");
  }, []);
  return (
    <>
      <Grid container spacing={3} align="center">
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <u>
                <h1>Debit Amount</h1>
              </u>
              <h1>
                <AllDebit accno={accno} />
              </h1>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <u>
                {" "}
                <h1>Credit Amount</h1>
              </u>
              <h1>
                <AllCredit accno={accno} />
              </h1>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <u>
                {" "}
                <h1>Balance Amount</h1>
              </u>
              <h1>
                <Balance accno={accno} />
              </h1>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <u>
            <h1>Last Transaction</h1>
          </u>
          <Lasttrans />
        </Grid>
        <Grid item xs={12}>
          <u>
            <h1>Account Summary</h1>
          </u>
          <Summary accno={accno} />
        </Grid>
      </Grid>
    </>
  );
};
//  <>
//     <Card
//       sx={{ height: 310, width: 400, backgroundColor: "aliceblue" }}
//       align="center"
//     >
//       <h1>Login Page</h1>
//       <CardContent>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField variant="outlined" fullWidth label="Enter Login Id" />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField variant="outlined" fullWidth label="Enter Password" />
//           </Grid>
//           <Grid item xs={4}>
//             <Button variant="contained" fullWidth color="secondary">
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   </>
