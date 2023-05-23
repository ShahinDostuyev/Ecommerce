import React, { useContext } from "react";
import { SignContext } from "../contexts/SignContext";

function Auth({ children }) {
  const { loggedIn } = useContext(SignContext);
  return <></>;
}

export default Auth;
