import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import FundTransferItem from "./FundTransferItem";
export const FundTransferList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:2525/funds");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Grid container spacing={2} sx={{marginTop:3}} >
        {data.map((item) => (
          <FundTransferItem item={item} />
        ))}
      </Grid>
    </>
  );
};

export default FundTransferList;
