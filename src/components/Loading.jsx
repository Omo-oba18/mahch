import { Sync } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Stack
      direction="column"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Sync sx={{ fontSize: "48px", marginBottom: "16px" }} />
      <Typography
        sx={{
          fontSize: "24px",
        }}
      >
        Loading ...
      </Typography>
    </Stack>
  );
};

export default Loading;
