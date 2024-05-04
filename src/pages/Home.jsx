import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import GoalProgress from "../components/GoalProgress";
import IndustriesButton from "../components/IndustriesButton";
import Carousel from "../components/Carousel";
import { Button, Stack, Typography } from "@mui/material";
import brand from "../assets/1016077_branding_pen_icon.png";
import build from "../assets/4137147_building_construction_industry_measurement_icon.png";
import grow from "../assets/5736348_analysis_bar_chart_grow_report_icon.png";
import goal from "../assets/stepping_up_g6oo.png";
import { serviceItem } from "../misc/Items";
import { useTranslation } from "react-i18next";
import MasonryImageList from "../components/MasonryImageList";
import ArrowRightIcon from "@mui/icons-material/ArrowRightOutlined";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const [buttonText, setButtonText] = useState(t("wat_industry"));
  const [progress, setProgress] = React.useState(0);
  const [currentList, setCurrentList] = useState("industries");
  const [openButton, setOpenButton] = useState("false");
  const [visible, setVisible] = useState("true");
  const [openModal, setOpenModal] = React.useState(false);

  const handleDropdown = () => {
    setVisible(false);
    setOpenButton(true);
  };
  const handleIndustryClick = () => {
    setButtonText(t("wat_ur_need"));
    setCurrentList("services");
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 50;
      return newProgress >= 100 ? 100 : newProgress;
    });
  };

  const handleBackButtonClick = () => {
    setCurrentList("industries");
    setButtonText(t("wat_industry"));
    setProgress((prevProgress) => {
      const newProgress = prevProgress - 50;
      return newProgress >= 100 ? 100 : newProgress;
    });
  };
  const handleServiceClick = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const industries = [
    {
      name: "e-Wallet",
      onClick: handleIndustryClick,
    },
    {
      name: "banking",
      onClick: handleIndustryClick,
    },
    {
      name: "real estate",
      onClick: handleIndustryClick,
    },
    {
      name: "lending",
      onClick: handleIndustryClick,
    },
    {
      name: "donation",
      onClick: handleIndustryClick,
    },
  ];
  const services = [
    {
      name: "consulting",
      onClick: handleServiceClick,
    },
    {
      name: "web development",
      onClick: handleServiceClick,
    },
    {
      name: "mobile development",
      onClick: handleServiceClick,
    },
    {
      name: "devOps Engineering",
      onClick: handleServiceClick,
    },
    {
      name: "Graphic design",
      onClick: handleServiceClick,
    },
    {
      name: "UI/UX design",
      onClick: handleServiceClick,
    },
    {
      name: "Programming tutoring",
      onClick: handleServiceClick,
    },
  ];

  const currentButtons = currentList === "industries" ? industries : services;

  useEffect(() => {
    document.getElementById("title").textContent =
      " Mahch Inc | Comprehensive web solutions company";
  }, []);
  return (
    <>
      <Banner />
      <Stack
        direction="column"
        sx={{
          background: "#E8E8E8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "3em",
        }}
      >
        <Typography
          fontSize={{ xs: "30px", sm: "40px" }}
          fontFamily="Josefin Sans, sans-serif"
          textAlign="center"
          lineHeight={{ xs: "41px", sm: "55px" }}
          marginBottom=".4em"
        >
          {t("wen_u_av")}
        </Typography>
        <Typography
          fontSize={{ xs: "20px", sm: "24px" }}
          fontFamily="Josefin Sans, sans-serif"
          textAlign="center"
          lineHeight={{ xs: "30px", sm: "35px" }}
          color="#808080"
        >
          {t("we_comb_web")}
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "2em",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2em",
            }}
          >
            <img src={brand} alt="brand" width="100px" height="100px" />
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "30px" },
                lineHeight: { xs: "32px", sm: "40px" },
                color: "#6fd56f",
                margin: "1em 0",
                textTransform: "capitalize",
              }}
              fontFamily="Josefin Sans, sans-serif"
            >
              {t("brand")}
            </Typography>
            <Typography
              fontFamily="Josefin Sans, sans-serif"
              textAlign="center"
              lineHeight={{ xs: "32px", sm: "30px" }}
            >
              {t("brand_subtitle")}
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2em",
            }}
          >
            <img src={build} alt="build" width="100px" height="100px" />

            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "30px" },
                lineHeight: { xs: "32px", sm: "40px" },
                color: "#6fd56f",
                margin: "1em 0",
                textTransform: "capitalize",
              }}
              fontFamily="Josefin Sans, sans-serif"
            >
              {t("build")}
            </Typography>
            <Typography
              fontFamily="Josefin Sans, sans-serif"
              textAlign="center"
              lineHeight={{ xs: "32px", sm: "30px" }}
            >
              {t("build_subtitle")}
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2em",
            }}
          >
            <img src={grow} alt="grow" width="100px" height="100px" />

            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "30px" },
                lineHeight: { xs: "32px", sm: "40px" },
                color: "#6fd56f",
                margin: "1em 0",
                textTransform: "capitalize",
              }}
              fontFamily="Josefin Sans, sans-serif"
            >
              {t("grow")}
            </Typography>
            <Typography
              fontFamily="Josefin Sans, sans-serif"
              textAlign="center"
              lineHeight={{ xs: "32px", sm: "30px" }}
            >
              {t("grow_subtitle")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {/* Projects and our Gallery */}
      <Stack
        direction="column"
        sx={{
          background: "#E8E8E8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em 3em",
        }}
      >
        <Typography
          fontSize={{ xs: "30px", sm: "40px" }}
          fontFamily="Josefin Sans, sans-serif"
          textAlign="center"
          lineHeight={{ xs: "41px", sm: "55px" }}
          marginBottom=".4em"
        >
          {t("our_project")}
        </Typography>
        <Typography
          fontSize={{ xs: "20px", sm: "24px" }}
          fontFamily="Josefin Sans, sans-serif"
          textAlign="center"
          lineHeight={{ xs: "30px", sm: "35px" }}
          color="#808080"
        >
          {t("our_project_subtitle")}
        </Typography>
        <MasonryImageList />
        <Button
          component={Link}
          to="/projects"
          variant="outlined"
          endIcon={<ArrowRightIcon />}
          sx={{
            background: "#6FD56F",
            color: "#fff",
            border: "none",
            "&:hover": {
              background: "#fff",
              color: "#6fd56f",
              border: "none",
            },
          }}
        >
          View more{" "}
        </Button>
      </Stack>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          display={{ xs: "none", sm: "none", md: "flex" }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "4em",
          }}
          width="700px"
        >
          <img width="100%" src={goal} alt="goal" />
        </Stack>
        <Stack direction="column" sx={{ padding: "4em" }}>
          <Typography
            fontSize={{ xs: "28px", sm: "40px", md: "48px" }}
            fontFamily="Cormorant Garamond, serif"
            lineHeight={{ xs: "120%", sm: "100%" }}
            marginBottom="16px"
            letterSpacing=".5px"
          >
            {t("see_how_we")}
          </Typography>
          <Typography
            color="#6F8075"
            fontSize="16px"
            fontFamily="Cormorant Garamond, serif"
            lineHeight="150%"
            marginBottom="17px"
            letterSpacing=".277778px"
            fontWeight={700}
          >
            {t("answer_quiz_typo")}
          </Typography>
          <Typography
            variant="span"
            fontSize="20px"
            fontFamily="Cormorant Garamond, serif"
            lineHeight="120%"
            marginBottom="17px"
            letterSpacing=".5px"
            fontWeight={900}
          >
            {buttonText}
          </Typography>
          <GoalProgress value={progress} />
          <IndustriesButton
            industries={currentButtons}
            currentList={currentList}
            goBack={handleBackButtonClick}
            handleDropdown={handleDropdown}
            openButton={openButton}
            visible={visible}
            open={openModal}
            handleClose={handleClose}
          />
        </Stack>
      </Stack>
      <Carousel
        subtitle="This is what we do"
        title="our services"
        carousel={serviceItem}
      />
      {/* <Carousel
        subtitle="project done so far"
        title="portfolio"
        carousel={carousels}
      /> */}
    </>
  );
};

export default Home;
