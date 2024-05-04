import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import devIcon from "../assets/little-dev-working-on-two-computer.png";

const Introduction = () => {
  return (
    <Box
      sx={{
        padding: "2em",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Web Development Services
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          variant="body1"
          textAlign="justify"
          component="Typography"
          sx={{ width: "400px" }}
        >
          Welcome to our web development services page. We specialize in
          creating modern and interactive websites using cutting-edge
          technologies to help businesses thrive online. Whether you need a
          brand new website or want to revamp your existing one, we've got you
          covered.
        </Box>
        <img src={devIcon} width={250} alt="developer working" />
      </Stack>
    </Box>
  );
};

export default Introduction;
