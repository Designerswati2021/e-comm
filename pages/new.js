import next from "next";
import styles from "./about.module.css";
import {
  Grid,
  Item,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Banner2Img from "../public/home/banner/2.jpg";

function about() {
  return (
    <div>
      <Navbar />

      <Grid container spacing={2} style={{ paddingTop: "40px" }}>
        <Grid item xs={6} md={4}>
          <Typography
            variant="h1"
            component="h6"
            style={{
              position: "absolute",
              left: "20%",
              top: "30%",
              zIndex: "999",
            }}
          >
            Lorem
          </Typography>
          <Typography
            variant="h1"
            component="h6"
            style={{
              position: "absolute",
              left: "20%",
              top: "40%",
              zIndex: "999",
              color: "red",
            }}
          >
            Ipsum
          </Typography>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
            aria-label="Search through site content"
            style={{ top: "75%", left: "50%" }}
          />
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: "5%", top: "75%", left: "50%", zIndex: "999" }}
          >
            Discover
          </Button>
        </Grid>

        <Grid item xs={6} md={4}>
          <Image
            src={Banner2Img}
            alt="Picture of the author"
            width={1000}
            height={900}
            blurDataURL={Banner2Img}
            // Optionally allows to add a blurred version of the image while loading
            placeholder="blur"
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="p" component="p" style={{ paddingTop: "35%" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <Button variant="contained" style={{ marginTop: "5%" }}>
            View Detail
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default about;
