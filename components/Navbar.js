import Link from "next/link";
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { FiLogIn } from "react-icons/fi";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  flex: {
    display: "flex",
  },
});

const Navbar = () => {
  const custom = useStyles();

  return (
    <nav>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Typography variant="h5" sx={{ flexGrow: 1 }}>
                LOGO
              </Typography>
            </Grid>
            <Grid item xs={4} className={custom.flex}>
              <Link href="/">
                <Typography variant="h5" component="a">
                  Home
                </Typography>
              </Link>
              <Link href="/about">
                <Typography variant="h5" ml={3} component="a">
                  About Us
                </Typography>
              </Link>
              <Link href="/new">
                <Typography variant="h5" ml={3} component="a">
                  new
                </Typography>
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
              <Button color="secondary" variant="contained">
                Login &nbsp;
                <FiLogIn />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
