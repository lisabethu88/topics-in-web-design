import { Box, Typography } from "@mui/material";

import Hero from "../components/Hero";
import heroImg from "../assets/pexels-tiffanya-10575037.jpg";
import { lightYellow } from "../styles/colors";

const RestPage = () => {
  return (
    <Box>
      <Hero
        heroImg={heroImg}
        contents={
          <Typography
            sx={{
              fontSize: "3rem",
              color: lightYellow,
              fontFamily: "Alata",
              textAlign: "center",
            }}
          >
            Restaurants & Bars
          </Typography>
        }
      ></Hero>
    </Box>
  );
};

export default RestPage;
