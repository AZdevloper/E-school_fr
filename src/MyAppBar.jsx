import * as React from "react";
import { AppBar } from "react-admin";
import Box from "@mui/material/Box";
 import Eschool from "../src/assets/E-school.png";

const MyAppBar = () => (
  <AppBar sx={{ backgroundColor: "#25708B" }} className="mb-3">
    <Box flex={1} />
    <img src={Eschool} className="w-40" alt="" srcset="" />
    <Box flex={1} />
  </AppBar>
);

export default MyAppBar;
