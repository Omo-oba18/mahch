import { Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Typed from "react-typed";

const Banner = () => {
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language === "en";

  return (
    <Stack sx={{ display: "flex", alignItems: "center", padding: "2em" }}>
      <Stack
        direction="column"
        sx={{
          display: "flex",
          alignItems: "start",
          padding: {
            xs: "123px 0 104px",
            sm: "73px 0 104px",
            md: "93px 0 114px",
          },
          marginTop: { sm: "60px", md: "30px" },
          lineHeight: "1",
        }}
      >
        {isEnglish ? (
          <>
            <Typography
              sx={{
                fontSize: { xs: "36px", sm: "64px", md: "102px" },
                fontFamily: "Cormorant Upright, serif",
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              {t("bannerText")}
            </Typography>
            <Typography
              variant="span"
              sx={{
                fontSize: { xs: "36px", sm: "64px", md: "102px" },
                fontFamily: "Cormorant Upright, serif",
                fontWeight: "700",
                textTransform: "capitalize",
                color: "#6FD56F",
              }}
            >
              <Typed
                strings={[
                  t("outstanding"),
                  t("beautiful"),
                  t("agile"),
                  t("secured"),
                  t("scalable"),
                ]}
                typeSpeed={100}
                backSpeed={60}
                loop
              />
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "36px", sm: "64px", md: "102px" },
                fontFamily: "Cormorant Upright, serif",
                textTransform: "capitalize",
                fontWeight: "700",
              }}
            >
              {t("digital_platform")}
            </Typography>
          </>
        ) : (
          <>
            <Typography
              sx={{
                fontSize: { xs: "36px", sm: "64px", md: "102px" },
                fontFamily: "Cormorant Upright, serif",
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              {t("bannerText")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "36px", sm: "64px", md: "102px" },
                fontFamily: "Cormorant Upright, serif",
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              {t("digital_platform")}
            </Typography>
            <Typography
              variant="span"
              sx={{
                fontSize: { xs: "36px", sm: "64px", md: "102px" },
                fontFamily: "Cormorant Upright, serif",
                fontWeight: "700",
                color: "#6FD56F",
                textTransform: "capitalize",
              }}
            >
              <Typed
                strings={[
                  t("outstanding"),
                  t("beautiful"),
                  t("agile"),
                  t("secured"),
                  t("scalable"),
                ]}
                typeSpeed={100}
                backSpeed={60}
                loop
              />
            </Typography>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Banner;
