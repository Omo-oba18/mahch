import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Grid, EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
register();

const Carousel = (props) => {
  const { t } = useTranslation();
  
  return (
    <>
      <Stack sx={{ padding: "4em" }}>
        <Box>
          <Typography
            variant="span"
            color="#6FD56F"
            fontSize=".875em"
            fontWeight="500"
            lineHeight="1.125em"
            textTransform="uppercase"
            letterSpacing=".25em"
            margin="0 0 1em"
          >
            {props.subtitle}
          </Typography>
          <Typography
            fontSize={{ xs: "2em", sm: "2.75em" }}
            lineHeight="3rem"
            textTransform="uppercase"
            margin="0 0 .33em"
            fontWeight="900"
          >
            {props.title}
          </Typography>
        </Box>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Swiper
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            grid={{
              rows: 1,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Grid, Pagination]}
          >
            {props.carousel.map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={item.link}>
                  <img src={item.source} alt={item.text} />
                  <Typography
                    sx={{
                      fontFamily: "Staatliches, cursive",
                      fontSize: "20px",
                      textTransform: "uppercase",
                      lineHeight: "1.625em",
                    }}
                  >
                    {t(item.title)}
                  </Typography>
                  <Typography>{t(item.subtitle)}</Typography>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Stack>
    </>
  );
};

export default Carousel;
