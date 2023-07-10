import {
  Email,
  Facebook,
  Favorite,
  Google,
  Instagram,
  LinkedIn,
  Phone,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { industryItem, serviceItem } from "../misc/navItems";
import bg_ceo from "../assets/background-ceo.png";
import ceo_image from "../assets/ceo-professional.png";
const Footer = () => {
  return (
    <Stack
      direction="column"
      sx={{
        padding: "2em",
        background: "#fff",
        overflow: "hidden",
        color: "#000",
      }}
    >
      <Box sx={{ padding: "1em", marginBottom: "2em" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
            <Stack
              sx={{
                background: "#F8F8FF",
                display: "flex",
                flexDirection: "column",
                padding: "2em",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Staatliches, cursive",
                  fontSize: "20px",
                  textTransform: "capitalize",
                  lineHeight: "1.625em",
                }}
              >
                let's talk, don't be shy
              </Typography>
              <Stack sx={{ paddingX: "1em" }}>
                <TextField
                  label="Full name"
                  fullWidth
                  placeholder="Full name"
                  variant="standard"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "#000",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#000",
                    },
                  }}
                />
              </Stack>

              <Stack sx={{ display: "flex" }} direction="row">
                <TextField
                  id="input-with-icon-textfield"
                  label="Phone"
                  fullWidth
                  placeholder="Phone"
                  variant="standard"
                  sx={{
                    marginX: "1rem",
                    "& .MuiInputLabel-root": {
                      color: "#000",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#000",
                    },
                  }}
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Email"
                  fullWidth
                  placeholder="Email"
                  variant="standard"
                  sx={{
                    marginX: "1rem",
                    "& .MuiInputLabel-root": {
                      color: "#000",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#000",
                    },
                  }}
                />
              </Stack>
              <Stack sx={{ display: "flex" }} direction="row">
                <FormControl fullWidth sx={{ margin: "1em" }}>
                  <InputLabel id="industry-label">Age</InputLabel>
                  <Select
                    labelId="industry-label"
                    id="indsutry-simple-select"
                    label="Industry"
                  >
                    {industryItem.map((item, index) => (
                      <MenuItem key={index}>{item.title}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ margin: "1em" }}>
                  <InputLabel id="demo-simple-select-label">
                    Expected Budget
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Expected budget"
                  >
                    <MenuItem value={10}>250.000 CFA</MenuItem>
                    <MenuItem value={20}>500.000 CFA</MenuItem>
                    <MenuItem value={30}>1.000.000</MenuItem>
                    <MenuItem value={30}>2.500.000</MenuItem>
                    <MenuItem value={30}>6.500.000</MenuItem>
                    <MenuItem value={30}>10.000.000</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack sx={{ paddingX: "1em", marginTop: "-1em" }}>
                <TextField
                  id="input-with-icon-textfield"
                  label="Message"
                  multiline
                  fullWidth
                  rows={4}
                  placeholder="Write down your message"
                  variant="standard"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "#000",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#000",
                    },
                  }}
                />
              </Stack>

              <FormControlLabel
                sx={{ padding: "1em" }}
                required
                control={<Checkbox />}
                label="I agree that my personal information will be processed and stored by Geniusee."
              />
              <Button
                sx={{
                  textTransform: "uppercase",
                  boxShadow: "0.3125rem -0.25rem #6FD56F",
                  color: "#000",
                  borderColor: "#000",
                  border: ".0625em solid #000",
                  padding: "1em 1.25em",
                  borderWidth: "0.125em",
                  borderRadius: "0.1875em",
                  outline: "none",
                  transition: "box-shadow .2s, transform .2s",
                  fontWeight: "900",
                  marginX: "1em",
                }}
              >
                Send
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Stack
              sx={{
                background:
                  "url('https://ik.imagekit.io/k0jemnbco/Main_Page_New/Frame_2317502.webp')",
                // background: `url("${bg_ceo}")`,
                backgroundColor: "#EEEDEF",
                backgroundSize: { xs: "100%", sm: "cover" },
                justifyContent: "center",
                display: "flex",
                alignItems: "end",
                height: "100%",
                padding: "2em",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "90%",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <img
                  src={ceo_image}
                  alt="chief-executif-officer"
                  width="100%"
                  height="100%"
                />
                <Stack
                  sx={{
                    position: "absolute",
                    background:
                      "linear-gradient(358.73deg, rgba(255, 255, 255, 0.6) -42.15%, rgba(255, 255, 255, 0) 45.38%), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 53.59%), rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(38px)",
                    padding: "1em",
                    bottom: { xs: "-14%", sm: "-2%", md: "3%" },
                    width: "90%",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Staatliches, cursive",
                      fontSize: "20px",
                      textTransform: "capitalize",
                      lineHeight: "1.625em",
                    }}
                  >
                    Chablis Mahutin, Chief executif officer
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr",
                        md: "1fr 1fr",
                      },
                      gap: { xs: "5px", sm: "16px", md: "6px" },
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { sm: "5px", md: "14px" },
                      }}
                    >
                      <Email />
                      <Typography
                        marginLeft={{ xs: ".4em", md: "-.6em" }}
                        fontSize="14px"
                        fontFamily="Josefin Sans, sans-serif"
                      >
                        omoobaoshoffa@gmail.com
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{
                        display: "flex",
                        marginLeft: { md: "1.5em" },
                        alignItems: "center",
                        gap: { sm: "5px", md: "14px" },
                      }}
                    >
                      <Phone />
                      <Typography
                        marginLeft={{ xs: ".4em", md: "-.6em" }}
                        fontSize="14px"
                        fontFamily="Josefin Sans, sans-serif"
                      >
                        +229 41717049
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { sm: "5px", md: "14px" },
                      }}
                    >
                      <LinkedIn />
                      <Typography
                        marginLeft={{ xs: ".4em", md: "-.6em" }}
                        fontSize="14px"
                        fontFamily="Josefin Sans, sans-serif"
                      >
                        Chablis Mahutin
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "1em" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
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
            <Typography
              textAlign="left"
              sx={{ color: "#333" }}
              fontSize="16px"
              fontWeight={700}
              fontFamily="Josefin Sans, sans-serif"
            >
              Porto-novo Benin Republic
            </Typography>
            <Stack
              sx={{
                textAlign: "left",
                marginTop: "1em",
                marginBottom: "2em",
              }}
            >
              <Typography
                sx={{ color: "#000" }}
                fontSize="14px"
                fontFamily="Josefin Sans, sans-serif"
              >
                Tel: +229 96 355 621
              </Typography>
              <Typography
                fontSize="14px"
                fontFamily="Josefin Sans, sans-serif"
                sx={{ color: "#000" }}
              >
                Email: mahch.business@gmail.com
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontFamily: "Staatliches, cursive",
                fontSize: "20px",
                textTransform: "uppercase",
                lineHeight: "1.625em",
              }}
            >
              Portfolio
            </Typography>
            <Typography
              sx={{
                fontFamily: "Staatliches, cursive",
                fontSize: "20px",
                lineHeight: "1.4em",
                textTransform: "capitalize",
              }}
            >
              Blog
            </Typography>
            <Typography
              sx={{
                fontFamily: "Staatliches, cursive",
                fontSize: "20px",
                textTransform: "uppercase",
                lineHeight: "1.625em",
              }}
            >
              Why us?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Staatliches, cursive",
                fontSize: "20px",
                textTransform: "uppercase",
                lineHeight: "1.625em",
              }}
            >
              FAQs
            </Typography>
            <Stack direction="row" sx={{ marginTop: ".5em" }}>
              <Stack
                sx={{
                  width: { xs: "40px", sm: "48px" },
                  height: { xs: "40px", sm: "48px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                  cursor: "pointer",
                  marginRight: "1em",
                  backgroundColor: "#6fd56f",
                  flexShrink: "0",
                }}
              >
                <Facebook sx={{ color: "#fff" }} />
              </Stack>
              <Stack
                sx={{
                  width: { xs: "40px", sm: "48px" },
                  height: { xs: "40px", sm: "48px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                  cursor: "pointer",
                  marginRight: "1em",
                  backgroundColor: "#6fd56f",
                  flexShrink: "0",
                }}
              >
                <Twitter sx={{ color: "#fff" }} />
              </Stack>
              <Stack
                sx={{
                  width: { xs: "40px", sm: "48px" },
                  height: { xs: "40px", sm: "48px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                  cursor: "pointer",
                  marginRight: "1em",
                  backgroundColor: "#6fd56f",
                  flexShrink: "0",
                }}
              >
                <Instagram sx={{ color: "#fff" }} />
              </Stack>
              <Stack
                sx={{
                  width: { xs: "40px", sm: "48px" },
                  height: { xs: "40px", sm: "48px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                  cursor: "pointer",
                  marginRight: "1em",
                  backgroundColor: "#6fd56f",
                  flexShrink: "0",
                }}
              >
                <Google sx={{ color: "#fff" }} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {serviceItem.map((item, index) => (
              <Typography
                sx={{
                  fontFamily: "Staatliches, cursive",
                  fontSize: "20px",
                  textTransform: "uppercase",
                  lineHeight: "1.625em",
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {industryItem.map((item, index) => (
              <Typography
                sx={{
                  fontFamily: "Staatliches, cursive",
                  fontSize: "20px",
                  textTransform: "uppercase",
                  lineHeight: "1.625em",
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Typography
        sx={{ marginTop: "1em", bottom: "0", color: "#000" }}
        textAlign="Center"
        fontFamily="Cormorant Upright, serif"
      >
        Copyright ©2023 All rights reserved | This template is made with{" "}
        <Favorite sx={{ color: "#6fd56f" }} /> by{" "}
        <Link style={{ textDecoration: "none", color: "#000" }}>Omo Oba</Link>
      </Typography>
    </Stack>
  );
};

export default Footer;
