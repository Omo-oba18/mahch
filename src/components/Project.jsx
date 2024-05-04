import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Project = ({ projects }) => {
  return (
    <Grid container spacing={2} sx={{ margin: "2em auto" }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link to={project.pageUrl} target="__blank">
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
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Project;
