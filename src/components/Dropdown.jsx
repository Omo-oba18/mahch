import React from "react";
import { Button, Fade, Menu, MenuItem } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DropDown = (props) => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDrop = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default navigation behavior
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button
        id="fade-button"
        aria-controls={openDrop ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openDrop ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreRoundedIcon />}
        sx={{
          color: "#000",
          marginLeft: { xs: "-.6em", sm: "-.6em" },
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          fontFamily: "Staatliches, cursive",
        }}
      >
        {props.name}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={openDrop}
        onClose={handleClose}
        TransitionComponent={Fade} //nu when clicked
      >
        {props.items.map((item, key) => (
          <MenuItem
            onClick={handleClose}
            key={key}
            component={Link}
            to={item.link}
          >
            {t(item.title)}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default DropDown;
