import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Chip,
  Avatar,
  Stack,
} from "@mui/material";
import reactjsSvg from "../assets/svgs/react-js.svg";
import materialUISvg from "../assets/svgs/material-ui.svg";
import html5IconSvg from "../assets/svgs/html-5.svg";
import javascriptSvg from "../assets/svgs/javascript.svg";
import css3Svg from "../assets/svgs/css-3.svg";
import nodeJsSvg from "../assets/svgs/nodejs.svg";
import laravelSvg from "../assets/svgs/laravel.svg";
import mongodbSvg from "../assets/svgs/mongodb.svg";
import gitSvg from "../assets/svgs/git.svg";
import javaSvg from "../assets/svgs/java.svg";
import pythonSvg from "../assets/svgs/python.svg";
import flaskSvg from "../assets/svgs/flask.svg";
import flutterSvg from "../assets/svgs/flutter.svg";
import dartSvg from "../assets/svgs/dart.svg";

const TechnologiesUsed = () => {
  const technologies = [
    { name: "React.js", iconPath: reactjsSvg, color: "" },
    { name: "Material-UI", iconPath: materialUISvg, color: "" },
    { name: "JavaScript", iconPath: javascriptSvg, color: "" },
    { name: "HTML5", iconPath: html5IconSvg, color: "" },
    { name: "CSS3", iconPath: css3Svg, color: "" },
    { name: "Node.js", iconPath: nodeJsSvg, color: "" },
    { name: "Laravel", iconPath: laravelSvg, color: "" },
    { name: "MongoDB", iconPath: mongodbSvg, color: "" },
    { name: "Python", iconPath: pythonSvg, color: "" },
    { name: "Java", iconPath: javaSvg, color: "" },
    { name: "Git", iconPath: gitSvg, color: "" },
    { name: "Flutter", iconPath: flutterSvg, color: "" },
    { name: "Flask", iconPath: flaskSvg, color: "" },
    { name: "Dart", iconPath: dartSvg, color: "" },
  ];

  return (
    <Box
      sx={{
        padding: "2em",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Technologies We Use
      </Typography>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2em",
          flexWrap:"wrap"
        }}
      >
        {technologies.map((tech, index) => (
          <Chip
            label={tech.name}
            key={index}
            sx={{ margin: "0.5em" }}
            avatar={
              <Avatar
                alt="ReactJS"
                src={tech.iconPath}
                sx={{ width: 100, height: 100 }}
              />
            }
            variant="outlined"
          />
        ))}
      </Stack>
    </Box>
  );
};

export default TechnologiesUsed;
