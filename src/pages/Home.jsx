import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { Stack } from "@mui/material";

const Home = () => {
  useEffect(() => {
    document.getElementById("title").textContent =
      " Mahch Inc | Comprehensive web solutions company";
  }, []);
  return (
    <Stack sx={{ padding: "2em" }}>
      <Banner />
    </Stack>
  );
};

export default Home;
