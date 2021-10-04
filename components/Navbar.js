import Link from "next/link";
import { styled } from "@mui/system";
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { FiLogIn } from "react-icons/fi";
import { makeStyles } from "@mui/styles";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useState } from "react";
// import { Styles } from "./about.module.css;";

const useStyles = makeStyles({
  flex: {
    display: "flex",
  },
});

const StyledTypography = styled(Typography)`
  color: ${(props) => (props.active ? "#9e8a26" : "white")};
`;
const Navbar = () => {
  const custom = useStyles();
  const [isActive, setIsActive] = useState("home");

  const linkActive = (data) => {
    setIsActive(data);
  };

  return (
    <nav>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <StyledTypography variant="h5" sx={{ flexGrow: 1 }}>
                LOGO
              </StyledTypography>
            </Grid>
            <Grid item xs={4} className={custom.flex}>
              <Link href="/">
                <StyledTypography
                  onClick={() => linkActive("home")}
                  variant="h6"
                  component="a"
                  active={isActive === "home"}
                >
                  Home
                </StyledTypography>
              </Link>
              <Link href="/">
                <StyledTypography
                  onClick={() => linkActive("about")}
                  variant="h6"
                  ml={3}
                  component="a"
                  active={isActive === "about"}
                >
                  About
                </StyledTypography>
              </Link>
              <Link href="/">
                <StyledTypography
                  onClick={() => linkActive("services")}
                  variant="h6"
                  ml={3}
                  component="a"
                  active={isActive === "services"}
                >
                  Services
                </StyledTypography>
              </Link>
              <Link href="/">
                <StyledTypography
                  onClick={() => linkActive("contact")}
                  variant="h6"
                  ml={3}
                  component="a"
                  active={isActive === "contact"}
                >
                  Contact
                </StyledTypography>
              </Link>
            </Grid>
            <Grid
              item
              xs={5}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              {/* <svg data-testid="FacebookIcon"></svg> */}
              <IconButton color="success" aria-label="Example" size="medium">
                <RiFacebookCircleFill />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
