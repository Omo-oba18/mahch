import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import funnyDevIcon from "../assets/programmer-working-animate-image-funny-dev.png";
const OurApproach = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Our Approach
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img src={funnyDevIcon} width={250} alt="developer working" />

        <Box
          textAlign="justify"
          component="Typography"
          sx={{ width: "400px", padding: "0 2em" }}
          variant="body1"
        >
          At MAHCH Solution Company, we believe in a customer-centric approach
          to web development. We work closely with our clients to understand
          their unique requirements and goals. Our team of experienced
          developers and designers collaborate to create bespoke solutions
          tailored to your business needs. From wireframing to deployment, we
          ensure a smooth and transparent process every step of the way.
        </Box>
      </Stack>
    </Box>
  );
};

export default OurApproach;
