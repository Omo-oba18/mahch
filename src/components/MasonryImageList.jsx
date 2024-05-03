import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import orionAppWelcomeImage from "../assets/projects/orion-app-welcome.png";
import stemirCallingPageImage from "../assets/projects/stemir-calling-artisan.png";
import flyerSampleFabrice from "../assets/projects/zoomFabrice20.jpg";
import mideaCreativeLandingPage from "../assets/projects/midea-creative-website-landing.png";
import happyHomeLandingPage from "../assets/projects/happy-home-landing-page.png";
import fossilFluidLoginPage from "../assets/projects/fossil-fluid-login-page.png";
import fasoFoodOverview from "../assets/projects/faso-food=project-overview.png";
import dnkLandingPage from "../assets/projects/dnk-landing-page.png";

function MasonryImageList() {
  return (
    <Box sx={{ width: 648, height: 650, overflowY: "none", margin: "3em" }}>
      <ImageList variant="woven" cols={4} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=358&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=358&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: orionAppWelcomeImage,
    title: "Orion app",
  },
  {
    img: stemirCallingPageImage,
    title: "Stemir project",
  },
  {
    img: flyerSampleFabrice,
    title: "Flyers Design",
  },
  {
    img: mideaCreativeLandingPage,
    title: "Midea Creative web development",
  },
  {
    img: happyHomeLandingPage,
    title: "Happy home website development",
  },
  {
    img: fossilFluidLoginPage,
    title: "Fossil fluid web app development",
  },
  {
    img: fasoFoodOverview,
    title: "Faso food project",
  },
  {
    img: dnkLandingPage,
    title: "DNK website development",
  },
];

export default MasonryImageList;
