import {
  Box,
  CssBaseline,
  Fab,
  Fade,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./components/Header";
import { Suspense, lazy, useEffect } from "react";
import Footer from "./components/Footer";
import { KeyboardArrowUp } from "@mui/icons-material";
import Loading from "./components/Loading";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

// to go back to up i have implemented the folloing function
function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
function App(props) {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Toolbar id="back-to-top-anchor" />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="*" element={<NotFound />} />{" "}
          {/* Add the catch-all route */}
        </Routes>
      </Suspense>
      <Footer />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </BrowserRouter>
  );
}

export default App;
