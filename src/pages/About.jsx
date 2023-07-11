import { Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Stack sx={{ padding: "2em" }}>
      <Stack
        direction="column"
        sx={{
          background: "#fcfcfc",
          marginX: "2em",
        }}
      >
        <Typography
          sx={{
            margin: "38px 0 40px",
            fontSize: { xs: "32px", sm: "102px" },
            fontWeight: "700",
            textAlign: "left",
            marginBottom: "23px",
            textTransform: "capitalize",
            lineHeight: { xs: "1", sm: "102px" },
            fontFamily: "Cormorant Upright,serif",
          }}
        >
          About Us?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Josefin Sans, sans-serif",
            fontSize: { xs: "16px", sm: "32px", md: "32px" },
            lineHeight: { xs: "1.5", sm: "1.37", md: "32px" },
          }}
        >
          MAHCH SOLUTION is not just an ordinary IT services company; it is a
          visionary and pioneering organization that aims to revolutionize the
          way businesses leverage technology. With a strong commitment to
          innovation, sustainability, and social impact, MAHCH SOLUTION strives
          to create a meaningful difference in the world. Our team of passionate
          experts is dedicated to delivering transformative solutions that
          empower businesses to thrive in the digital age.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default About;
