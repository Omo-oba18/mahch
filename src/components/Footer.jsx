import {
  ArrowRight,
  Facebook,
  Favorite,
  Google,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "2em",
        background: "#fff",
        overflow: "hidden",
        color: "#000",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ alignItems: "flex-start" }}
        >
          <Stack
            direction="column"
            sx={{
              width: "100%",
              padding: "2em",
            }}
          >
            <Typography
              variant="span"
              color="#6FD56F"
              fontSize="1em"
              fontWeight="500"
              lineHeight="1.125em"
              textTransform="uppercase"
              letterSpacing=".25em"
            >
              Get in touch
            </Typography>
            <Typography
              sx={{
                fontFamily: "Carrois Gothic SC, sans-serif",
                fontSize: "3em",
              }}
              color="#000"
            >
              Don't be shy,
            </Typography>
            <Typography
              sx={{
                fontFamily: "Alegreya Sans SC, sans-serif",
                fontSize: "3.5em",
              }}
              variant="span"
            >
              let's talk.
            </Typography>
            <Typography sx={{ marginBottom: "1em" }}>
              Do you have a question or a world-changing project? Let’s shape
              the future together.
            </Typography>
            <Button
              sx={{
                boxShadow: "0.3125rem -0.25rem #6FD56F",
                color: "#000",
                borderColor: "#000",
                border: ".0625em solid #000",
                textTransform: "capitalize",
                padding: "1em, 1.25em",
                borderWidth: "0.125em",
                borderRadius: "0.1875em",
                outline: "none",
                transition: "box-shadow .2s, transform .2s",
                fontWeight: "900",
              }}
            >
              Get in touch
            </Button>
          </Stack>
          <Stack
            direction="column"
            sx={{
              width: "100%",
              padding: "2em",
            }}
          >
            <Stack
              direction="row"
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                marginBottom: "1.5em",
              }}
              component={Link}
              to="/"
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
              <img src={logo} alt="mahch logo" height="100px" />

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
            </Stack>
            <Typography sx={{ color: "#333" }} fontSize="16px" fontWeight={700}>
              Porto-novo Benin Republic
            </Typography>
            <Stack sx={{ marginTop: "1em", marginBottom: "2em" }}>
              <Typography sx={{ color: "#333" }}>
                Tel: +229 96 355 621
              </Typography>
              <Typography sx={{ color: "#333" }}>
                Email: mahch.business@gmail.com
              </Typography>
            </Stack>
            <Stack direction="row">
              <Facebook sx={{ color: "#333", marginRight: "1em" }} />
              <Twitter sx={{ color: "#333", marginRight: "1em" }} />
              <Instagram sx={{ color: "#333", marginRight: "1em" }} />
              <Google sx={{ color: "#333" }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Typography
        sx={{ marginTop: "1em", bottom: "0", color: "#333" }}
        textAlign="Center"
      >
        Copyright ©2023 All rights reserved | This template is made with{" "}
        <Favorite sx={{ color: "red" }} /> by{" "}
        <Link style={{ textDecoration: "none", color: "#000" }}>Omo Oba</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
