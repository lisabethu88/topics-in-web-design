import Hero from "../components/Hero";
import { Box, Grid, Typography } from "@mui/material";
import bgImg from "../assets/hero-img1.jpg";
import heroImg from "../assets/home-page-hero-icon.png";
import SearchBar from "../components/SearchBar";
import { lightYellow } from "../styles/colors";

const Home = () => {
  const content = (
    <Grid
      container
      spacing={3}
      sx={{
        display: "flex",
        height: "fit-content",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Grid size={{ xs: 10, md: 6 }} m="1rem">
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            maxWidth: 800,
            color: lightYellow,
            fontFamily: "Alata",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Empowering people of all sizes to find and share business where they
          feel{" "}
          <span className="green-text-span">
            safe, welcome, and comfortable
          </span>{" "}
          in the <span className="light-lav-text-span">Hudson Valley</span>.
        </Typography>
        <SearchBar />
      </Grid>
      <Grid
        size={4}
        component={"img"}
        src={heroImg}
        sx={{
          maxWidth: 400,
          height: "auto",
          display: { xs: "none", md: "block" },
        }}
      />
    </Grid>
  );

  return (
    <Box sx={{ width: "100%", height: "100%", flexGrow: 1 }}>
      <Hero heroImg={bgImg} contents={content}></Hero>
    </Box>
  );
};

export default Home;
