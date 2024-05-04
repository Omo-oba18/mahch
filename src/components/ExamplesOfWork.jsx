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
    <Box sx={{ padding: "1em" }}>
      <Typography variant="h5" gutterBottom>
        Projects Worked On
      </Typography>
      <Grid container spacing={2} sx={{ margin: "2em auto" }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.imageUrl}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExamplesOfWork;
