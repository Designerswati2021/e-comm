import next from "next";
import styles from "./about.module.css";
import { Grid, Item, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Banner1Img from "../public/home/banner/2.jpg";
import Banner2Img from "../public/home/banner/2.jpg";

function about() {
  return (
    <div>
      <Navbar />
      <Image
        src={Banner2Img}
        alt="Picture of the author"
        width={1920}
        height={600}
        blurDataURL={Banner2Img}
        // Optionally allows to add a blurred version of the image while loading
        placeholder="blur"
      />
      <Grid item xs={12}>
        <Typography variant="h1" component="h2">
          About us
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Typography variant="p" component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen bookLorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Image
            src={Banner1Img}
            alt="image"
            width={500}
            height={300}
            className="img-rounded"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default about;
