import axios from "axios";
import React, { useEffect, useState } from "react";

export const AllDebit = ({accno}) => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const payload = { accno };
    const result = await axios.post("http://localhost:2525/alldebits", payload);
    setData(result.data);
    console.log(getdata);
  };
  useEffect(() => {
    getdata();
  }, []);
  return <>{data}</>;
};

export default AllDebit;
