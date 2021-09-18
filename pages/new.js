import next from "next";
import styles from "./about.module.css";
import { Grid, Item, Paper, Typography } from "@mui/material";
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
            component="h5"
            style={{
              position: "absolute",
              left: "20%",
              top: "20%",
              zindex: "999999999",
            }}
          >
            Lorem
          </Typography>
          <Typography variant="h1" component="h6" className="typo-ipsum">
            Ipsum
          </Typography>
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
          <Typography variant="p" component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default about;
