import { Stack } from "@mui/material";
import React from "react";
import Introduction from "../components/Introduction";
import OurApproach from "../components/OurApproach";
import TechnologiesUsed from "../components/TechnologiesUsed";
import ExamplesOfWork from "../components/ExamplesOfWork";

const WebDevelopment = () => {
  return (
    <Stack
      direction="column"
      sx={{
        margin: "2em auto",
        padding: "4em",
        textAlign:"center",
      }}
    >
      <Introduction />
      <OurApproach />
      <TechnologiesUsed />
      <ExamplesOfWork />
    </Stack>
  );
};

export default WebDevelopment;
