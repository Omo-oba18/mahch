import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import under_maintenance_img from "../assets/under-maintenance.jpg";

const Maintenance = () => {
  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "middle" }}
    >
      <Stack sx={{ padding: "20px", background: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "Staatliches, cursive",
            fontWeight: "600",
            textAlign: "center",
            textTransform: "capitalize",
          }}
          variant="h3"
        >
          Our website is currently under maintenance
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontFamily: "Cormorant Upright, serif",
            textAlign: "center",
            textTransform: "capitalize",
            fontSize: "20px",
          }}
        >
          please try again in a few minutes or contact us at{" "}
          <Link
            style={{ textTransform: "lowercase" }}
            to="mailto:mahch.business@gmail.com"
          >
            mahch.business@gmail.com
          </Link>
        </Typography>
        <img
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          src={under_maintenance_img}
          alt="under maintenance"
        />
      </Stack>
    </Stack>
  );
};

export default Maintenance;
