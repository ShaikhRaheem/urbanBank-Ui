import React, { useEffect } from "react";

export const Logout = () => {
  useEffect(() => {
    sessionStorage.removeItem("token");
  });
  return (
    <>
      <h1>Logout Successfully...</h1>
    </>
  );
};

export default Logout;
