import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { standFor } from "../misc/Items";

const About = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <Stack sx={{padding:"2em"}}>
      <Stack
        direction="column"
        sx={{
          background: "#fcfcfc",
          marginX: "2em",
        }}
      >
        <Typography
          sx={{
            margin: "58px 0 40px",
            fontSize: { xs: "32px", sm: "102px" },
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "23px",
            textTransform: "capitalize",
            lineHeight: { xs: "1", sm: "102px" },
            fontFamily: "Cormorant Upright,serif",
          }}
        >
          About Us?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Josefin Sans, sans-serif",
            fontSize: { xs: "16px", sm: "32px", md: "32px" },
            lineHeight: { xs: "1.5", sm: "1.37", md: "32px" },
            textAlign: "justify",
          }}
        >
          MAHCH SOLUTION is not just an ordinary IT services company; it is a
          visionary and pioneering organization that aims to revolutionize the
          way businesses leverage technology. With a strong commitment to
          innovation, sustainability, and social impact, MAHCH SOLUTION strives
          to create a meaningful difference in the world. Our team of passionate
          experts is dedicated to delivering transformative solutions that
          empower businesses to thrive in the digital age.
        </Typography>
      </Stack>
      {/* <Stack padding="2em">
        <Typography
          sx={{
            margin: "38px 0 40px",
            fontSize: { xs: "24px", sm: "40px" },
            fontWeight: "700",
            textAlign: "left",
            marginBottom: "23px",
            textTransform: "capitalize",
            lineHeight: { xs: "32px", sm: "56px" },
            fontFamily: "Cormorant Upright,serif",
          }}
        >
          Meet some of us
        </Typography>
        <Grid></Grid>
      </Stack> */}
      <Stack padding="2em">
        <Typography
          sx={{
            fontSize: { xs: "34px", sm: "52px" },
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "22px",
            textTransform: "capitalize",
            lineHeight: { xs: "32px", sm: "56px" },
            fontFamily: "Cormorant Upright,serif",
          }}
        >
          What we stand for
        </Typography>
        <Stack padding="2em" sx={{ display: { xs: "none", sm: "block" } }}>
          <Grid container>
            <Grid item sm={6} md={4}>
              <Stack direction="column">
                {standFor.map((element, index) => (
                  <Button
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      borderRadius: "20px 0 0 20px",
                      border: "1px solid #e7e6e6",
                      marginBottom: "15px",
                      padding: "16px",
                      width: "100%",
                      color: "#000",
                      fontFamily: "Josefin Sans, sans-serif",
                    }}
                    startIcon={React.cloneElement(element.icon, {
                      style: element.style_left,
                    })}
                    onClick={() => handleClick(index)}
                  >
                    {element.title}
                  </Button>
                ))}
              </Stack>
            </Grid>
            <Grid item sm={6} md={8}>
              <Stack
                direction="column"
                sx={{
                  backgroundColor: "#e6f1d9",
                  padding: "40px 60px 10px",
                  borderRadius: "0 20px 20px 0",
                  minHeight: "408px",
                }}
              >
                {standFor.map((element, index) => (
                  <Stack
                    style={{
                      display: active === index ? "block" : "none",
                    }}
                    key={index}
                  >
                    <Typography style={{ height: "52px" }}>
                      {React.cloneElement(element.icon, {
                        style: element.style_right,
                      })}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "32px",
                        lineHeight: "44px",
                        fontWeight: "600",
                        textTransform: "capitalize",
                        position: "relative",
                        fontFamily: "Josefin Sans, sans-serif",
                      }}
                      variant="span"
                    >
                      {element.title}
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-3px", // Adjust the position of the underline
                          left: 0,
                          width: "100%",
                          height: "3px",
                          backgroundColor: "#6FD56F", // Set the desired color for the underline
                        }}
                      ></span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        marginTop: "20px",
                        fontFamily: "Josefin Sans, sans-serif",
                      }}
                    >
                      {element.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Stack>
        <Stack sx={{ display: { xs: "block", sm: "none" } }}>
          {standFor.map((element, index) => (
            <Stack key={index} sx={{ padding: "20px 0" }}>
              <Stack
                direction="row"
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography>
                  {React.cloneElement(element.icon, {
                    style: element.style_right,
                  })}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "26px",
                    lineHeight: "34px",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    fontFamily: "Josefin Sans, sans-serif",
                  }}
                  variant="span"
                >
                  {element.title}
                </Typography>
                <span
                  style={{
                    position: "absolute",
                    bottom: "-3px", // Adjust the position of the underline
                    left: 0,
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#6FD56F", // Set the desired color for the underline
                  }}
                ></span>
              </Stack>
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "30px",
                  marginTop: "20px",
                  fontFamily: "Josefin Sans, sans-serif",
                }}
              >
                {element.text}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack
        direction="column"
        sx={{ display: "flex", background: "#000", padding: "2em" }}
      >
        <Typography
          sx={{
            fontSize: { xs: "26px", sm: "60px" },
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "22px",
            textTransform: "capitalize",
            lineHeight: "1.2",
            color: "#fff",
            fontFamily: "Cormorant Garamond,serif",
          }}
        >
          Giving back to{" "}
          <span
            style={{
              fontSize: { xs: "36px", sm: "72px" },
              color: "#6fd56f",
              backgroundColor: "gray",
              fontFamily: "Cormorant Upright,serif",
            }}
          >
            orphan{" "}
          </span>
          and empowering{" "}
          <span
            style={{
              fontSize: { xs: "36px", sm: "72px" },
              color: "#6fd56f",
              backgroundColor: "gray",
              fontFamily: "Cormorant Upright,serif",
            }}
          >
            youth
          </span>
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "16px",
            textAlign: "center",
            lineHeight: "34px",
            fontFamily: "Josefin Sans, sans-serif",
          }}
          variant="p"
        >
          MAHCH is deeply committed to social responsibility and believes in
          giving back to the community. One of our objectives is to contribute
          to orphanage organizations, supporting their mission to provide care
          and opportunities for vulnerable children. We recognizes the
          importance of addressing the issue of unemployment among the youth. As
          an objective, we are dedicated to creating employment opportunities
          and reducing the lack of employment for young individuals.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default About;
