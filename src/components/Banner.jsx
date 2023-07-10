import { Stack, Typography } from "@mui/material";
import React from "react";
import Typed from "react-typed";

const Banner = () => {
  return (
    <Stack sx={{ display: "flex", alignItems: "center", padding: "2em" }}>
      <Stack
        direction="column"
        sx={{
          display: "flex",
          alignItems: "start",
          padding: {
            xs: "123px 0 104px",
            sm: "73px 0 104px",
            md: "93px 0 114px",
          },
          marginTop: { sm: "60px", md: "30px" },
          lineHeight: "1",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "36px", sm: "64px", md: "102px" },
            fontFamily: "Cormorant Upright, serif",
            fontWeight: "700",
          }}
        >
          We help organizations build
        </Typography>
        <Typography
          variant="span"
          sx={{
            fontSize: { xs: "36px", sm: "64px", md: "102px" },
            fontFamily: "Cormorant Upright, serif",
            fontWeight: "700",
            color: "#6FD56F",
          }}
        >
          <Typed
            strings={[
              "outstanding",
              "beautiful",
              "agile",
              "secure",
              "scalable",
            ]}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "36px", sm: "64px", md: "102px" },
            fontFamily: "Cormorant Upright, serif",
            fontWeight: "700",
          }}
        >
          digital platforms
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Banner;
