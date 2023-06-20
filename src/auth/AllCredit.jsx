import axios from "axios";
import React, { useEffect, useState } from "react";

export const AllCredit = ({accno}) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const payload={accno}
    const result = await axios.post("http://localhost:2525/allcredits",payload);
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <>{data}</>;
};

export default AllCredit;
