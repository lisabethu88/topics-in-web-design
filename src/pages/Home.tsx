import Hero from "../components/Hero";
import { Box, Divider, Grid, Typography } from "@mui/material";
import bgImg from "../assets/hero-img1.jpg";
import heroImg from "../assets/home-page-hero-icon.png";
import SearchBar from "../components/SearchBar";
import { darkGray, lightYellow } from "../styles/colors";
import CategoriesSection from "../components/CategoriesSection";
import HowItWorks from "../components/HowItWorks";
import WhosItFor from "../components/WhosItFor";

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
        px: 1,
      }}
    >
      <Grid size={{ xs: 10, md: 6 }} m="1rem">
        <Typography
          variant="h1"
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
        alt="Silhouette of a plus sized person and an average sized person eating at a table together"
        sx={{
          maxWidth: 300,
          height: "auto",
          display: { xs: "none", md: "block" },
        }}
      />
    </Grid>
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        flexGrow: 1,
        backgroundColor: darkGray,
      }}
    >
      <Hero heroImg={bgImg} contents={content}></Hero>
      <HowItWorks />
      <Divider
        sx={{ borderColor: "#2e2d2d", borderWidth: 3, mx: "10%" }}
      />{" "}
      <CategoriesSection />
      <Divider
        sx={{
          borderColor: "#2e2d2d",
          mx: "10%",
          borderWidth: 3,
        }}
      />
      <WhosItFor />
    </Box>
  );
};

export default Home;
