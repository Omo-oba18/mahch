import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logo_black from "../assets/logo-black.png";
import Dropdown from "./Dropdown";
import { industryItem, serviceItem } from "../misc/navItems";

const navItems = [
  {
    name: <Dropdown name="Services" items={serviceItem} />,
    link: "#",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: <Dropdown name="Industries" items={industryItem} />,
    link: "#",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Why us?",
    link: "/about-us",
  },
  {
    name: "FAQs",
    link: "/faqs",
  },
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: "100%",
      }}
      role="presentation"
    >
      <Stack
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          height: "100px",
          padding: "1em",
          cursor: "pointer",
        }}
        component={Link}
        to="/"
      >
        <Typography
          sx={{
            marginLeft: ".4em",
            fontSize: "24px",
            fontFamily: "Carrois Gothic SC, sans-serif",
            color: "#000",
            textDecoration: "underline",
          }}
        >
          Mahch
        </Typography>
        <img src={logo_black} alt="mahch logo" height="100%" />
        <Typography
          sx={{
            marginRight: ".4em",
            fontSize: "24px",
            fontFamily: "Carrois Gothic SC, sans-serif",
            color: "#000",
            textDecoration: "underline",
          }}
        >
          Solution
        </Typography>
      </Stack>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton component={Link} to={item.link}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // function to elevate the navbar when scrolling
  function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            height: "90px",
            background: "rgb(255,255,255)",
            color: "#000",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: {
                xs: "space-between",
                sm: "space-between",
                md: "space-around",
              },
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                height: "100%",
                padding: "1em",
                cursor: "pointer",
              }}
              component={Link}
              to="/"
            >
              <Typography
                sx={{
                  marginLeft: ".4em",
                  fontSize: "24px",
                  fontFamily: "Carrois Gothic SC, sans-serif",
                  color: "#6FD56F",
                  textDecoration: "underline",
                }}
              >
                Mahch
              </Typography>
              <img src={logo} alt="mahch logo" height="100%" />

              <Typography
                sx={{
                  marginRight: ".4em",
                  fontSize: "24px",
                  fontFamily: "Carrois Gothic SC, sans-serif",
                  color: "#6FD56F",
                  textDecoration: "underline",
                }}
              >
                Solution
              </Typography>
            </Stack>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <Menu sx={{ color: "#6FD56F" }} />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              {navItems.map((item, index) => (
                <Button
                  component={Link}
                  to={item.link}
                  key={index}
                  sx={{ color: "#000" }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "#6FD56F",
              color: "#000",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
