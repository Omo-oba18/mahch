import { Sync } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "styled-components";
const SpinningSync = styled(Sync)({
  animation: "spin 2s linear infinite",
  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

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
      <SpinningSync sx={{ fontSize: "48px", marginBottom: "16px" }} />
      <Typography
        sx={{
          fontSize: "24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Loading ...
      </Typography>
    </Stack>
  );
};

export default Loading;
