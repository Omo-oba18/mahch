import React from "react";

import dnkWebsiteLanding from "../assets/projects/dnk-landing-page.png";
import portfolioWebsiteLanding from "../assets/projects/portfolio-website-chablis.png";
import companyWebsiteLogin from "../assets/projects/fossil-fluid-login-page.png";
import Project from "../components/Project";
import { Stack, Typography } from "@mui/material";

const Projects = () => {
  const projects = [
    {
      title: "Donation website ",
      imageUrl: dnkWebsiteLanding,
      description:
        "Donation website built from scratch with React-js and Material UI",
        pageUrl:"https://donation-dnk.vercel.app"
    },
    {
      title: "Portfolio Website",
      imageUrl: portfolioWebsiteLanding,
      description:
        "Donation website built from scratch with reactjs and material UI",
        pageUrl:"https://portfolio-chablis.vercel.app"

    },
    {
      title: "Company web application",
      imageUrl: companyWebsiteLogin,
      description:
        "Donation website built from scratch with reactjs and material UI",
        pageUrl:"https://fluidsecure.net"
    },
  ];
  return (
    <Stack
      direction="column"
      sx={{
        margin: "2em auto",
        padding: "4em",
        textAlign: "center",
        // display: "flex",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Our Projects
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Check out some of the projects we've worked on.
      </Typography>
      <Project projects={projects} />
    </Stack>
  );
};

export default Projects;
