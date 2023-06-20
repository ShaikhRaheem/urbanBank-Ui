import axios from "axios";
import React, { useEffect, useState } from "react";

export const Lasttrans = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.post("http://localhost:2525/lasttrans");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  });
  return (
    <>
      <table>
        <tr>
          <td>{data.transdate}</td>
          <td>{data.amount}</td>
          <td>{data.transtype}</td>
        </tr>
      </table>
    </>
  );
};

export default Lasttrans;
