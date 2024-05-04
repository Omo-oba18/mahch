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
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logo_black from "../assets/logo-black.png";
import Dropdown from "./Dropdown";
import { industryItem, serviceItem } from "../misc/Items";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const navItems = [
    {
      name: <Dropdown name="Services" items={serviceItem} />,
      link: "#",
    },
    {
      name: t("project"),
      link: "/projects",
    },
    {
      name: <Dropdown name="Industries" items={industryItem} />,
      link: "#",
    },
    {
      name: t("blog"),
      link: "/blog",
    },
    {
      name: t("aboutUs"),
      link: "/about-us",
    },
    {
      name: t("faqs"),
      link: "/faqs",
    },
  ];

  const toggleLanguage = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);

    setLoading(false);
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
          justifyContent: "space-between",
          alignItems: "center",
        }}
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
          <img src={logo_black} alt="mahch logo" height="100%" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              padding: ".5em",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: "Carrois Gothic SC, sans-serif",
                color: "#000",
                textDecoration: "underline",
              }}
            >
              Mahch
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: "Carrois Gothic SC, sans-serif",
                color: "#000",
                textDecoration: "underline",
              }}
            >
              Solution
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction="row"
          sx={{
            width: { xs: "40px", sm: "48px" },
            height: { xs: "40px", sm: "48px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50px",
            cursor: "pointer",
            marginRight: "1em",
            flexShrink: "0",
          }}
          onClick={toggleLanguage}
        >
          <Typography marginRight=".5em">{t("lang")}</Typography>
          <img src={t("lang_btn")} alt="language" width="50%" />
        </Stack>
      </Stack>

      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton component={Link} to={item.link}>
              <ListItemText
                sx={{
                  "& .MuiTypography-root": {
                    textTransform: "uppercase",
                    fontFamily: "Staatliches, cursive",
                  },
                }}
                primary={item.name}
              />
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
              <img src={logo} alt="mahch logo" height="100%" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  padding: ".5em",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: "Carrois Gothic SC, sans-serif",
                    color: "#6FD56F",
                    textDecoration: "underline",
                  }}
                >
                  Mahch
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: "Carrois Gothic SC, sans-serif",
                    color: "#6FD56F",
                    textDecoration: "underline",
                  }}
                >
                  Solution
                </Typography>
              </Box>
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
                  sx={{
                    color: "#000",
                    fontFamily: "Staatliches, cursive",
                    textTransform: "uppercase",
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            <Stack
              direction="row"
              sx={{
                width: { xs: "40px", sm: "48px" },
                height: { xs: "40px", sm: "48px" },
                display: { xs: "none", sm: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50px",
                cursor: "pointer",
                marginRight: "1em",
                flexShrink: "0",
              }}
              onClick={toggleLanguage}
            >
              <Typography marginRight=".5em">{t("lang")}</Typography>
              <img src={t("lang_btn")} alt="language" width="50%" />
            </Stack>
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
