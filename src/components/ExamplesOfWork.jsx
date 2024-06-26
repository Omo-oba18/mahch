import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import dnkWebsiteLanding from "../assets/projects/dnk-landing-page.png";
import portfolioWebsiteLanding from "../assets/projects/portfolio-website-chablis.png";
import companyWebsiteLogin from "../assets/projects/fossil-fluid-login-page.png";
import Project from "./Project";

const ExamplesOfWork = () => {
  // Sample projects data
  const projects = [
    {
      title: "Donation website ",
      imageUrl: dnkWebsiteLanding,
      description:
        "Donation website built from scratch with reactjs and material UI",
    },
    {
      title: "Portfolio Website",
      imageUrl: portfolioWebsiteLanding,
      description:
        "Donation website built from scratch with reactjs and material UI",
    },
    {
      title: "Company web application",
      imageUrl: companyWebsiteLogin,
      description:
        "Donation website built from scratch with reactjs and material UI",
    },
  ];

  return (
    <Box sx={{ padding: { xs: "0", sm: "1em" } }}>
      <Typography variant="h5" gutterBottom>
        Projects Worked On
      </Typography>
      <Project projects={projects} />
    </Box>
  );
};

export default ExamplesOfWork;
