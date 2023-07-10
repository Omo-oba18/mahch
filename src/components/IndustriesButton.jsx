import { ArrowBack, Close } from "@mui/icons-material";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React from "react";

const IndustriesButton = (props) => {
  return (
    <Stack direction="column">
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap", gap: "1em", marginBottom: ".5em" }}
      >
        {props.industries.slice(0, 3).map((item, index) => (
          <Button
            key={index}
            sx={{
              textTransform: "uppercase",
              boxShadow: "0.3125rem -0.25rem #6FD56F",
              color: "#000",
              borderColor: "#000",
              border: ".0625em solid #000",
              padding: "1em, 1.25em",
              borderWidth: "0.125em",
              borderRadius: "0.1875em",
              outline: "none",
              transition: "box-shadow .2s, transform .2s",
              fontWeight: "900",
            }}
            onClick={item.onClick}
          >
            {item.name}
          </Button>
        ))}
      </Stack>
      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          gap: "1em",
          marginTop: ".5em",
          marginBottom: ".5em",
        }}
      >
        {props.visible && (
          <Button
            sx={{
              textTransform: "capitalize",
              boxShadow: "0.3125rem -0.25rem #6FD56F",
              color: "#000",
              borderColor: "#000",
              border: ".0625em solid #000",
              padding: "1em, 1.25em",
              borderWidth: "0.125em",
              borderRadius: "0.1875em",
              outline: "none",
              transition: "box-shadow .2s, transform .2s",
              fontWeight: "900",
            }}
            onClick={props.handleDropdown}
          >
            more
          </Button>
        )}
        {props.openButton === true &&
          props.industries.slice(3).map((item, index) => (
            <Button
              key={index}
              sx={{
                textTransform: "uppercase",
                boxShadow: "0.3125rem -0.25rem #6FD56F",
                color: "#000",
                borderColor: "#000",
                border: ".0625em solid #000",
                padding: "1em, 1.25em",
                borderWidth: "0.125em",
                borderRadius: "0.1875em",
                outline: "none",
                transition: "box-shadow .2s, transform .2s",
                fontWeight: "900",
              }}
              onClick={item.onClick}
            >
              {item.name}
            </Button>
          ))}
      </Stack>
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap", gap: "1em", marginTop: ".5em" }}
      >
        {props.currentList === "services" && (
          <Button
            sx={{
              textTransform: "capitalize",
              boxShadow: "0.3125rem -0.25rem #6FD56F",
              color: "#000",
              borderColor: "#000",
              border: ".0625em solid #000",
              padding: "1em, 1.25em",
              borderWidth: "0.125em",
              borderRadius: "0.1875em",
              outline: "none",
              transition: "box-shadow .2s, transform .2s",
              fontWeight: "900",
            }}
            onClick={props.goBack}
            startIcon={<ArrowBack />}
          >
            Go Back
          </Button>
        )}
      </Stack>
      <Modal
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          maxHeight: "100vh",
          height: "100%",
          transition: ".3s ease-in",
        }}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            height: "100%",
            padding: "48px",
            backgroundColor: "rgba(39,39,61,.8)",
          }}
        >
          <Stack
            direction="column"
            sx={{
              display: "flex",
              padding: "0 0 20px",
              background: "#fff",
              height: "100%",
              borderRadius: "40px",
            }}
          >
            <Stack
              direction="row"
              sx={{
                padding: "32px 48px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexShrink: "0",
              }}
            >
              <Typography
                fontSize={{ xs: "28px", sm: "36px" }}
                fontFamily="Cormorant Upright, serif"
                lineHeight="120%"
                marginBottom="16px"
                letterSpacing=".5px"
                fontWeight="900"
              >
                Explore the offerings most relevant to you
              </Typography>
              <Stack
                sx={{
                  width: { xs: "32px", sm: "48px" },
                  height: { xs: "32px", sm: "48px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                  cursor: "pointer",
                  backgroundColor: "#f3f3ff",
                  flexShrink: "0",
                }}
                onClick={props.handleClose}
              >
                <Close />
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};

export default IndustriesButton;
