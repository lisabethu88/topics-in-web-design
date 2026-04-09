import { Container, Grid, Typography } from "@mui/material";
import FlatwareIcon from "@mui/icons-material/Flatware";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryButton from "./CategoryButton";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HotelIcon from "@mui/icons-material/Hotel";
import { green, lightYellow } from "../styles/colors";
import { h2Style } from "../styles/styles";
const CategoriesSection = () => {
  const iconStyle = { color: green, fontSize: 50 };
  const categories = [
    {
      icon: <FlatwareIcon sx={iconStyle} />,
      label: "Restaurants & Bars",
      link: "restaurants-and-bars",
    },
    {
      icon: <ShoppingCartIcon sx={iconStyle} />,
      label: "Shopping",
      link: "https://www.website.com",
    },
    {
      icon: <HealthAndSafetyIcon sx={iconStyle} />,
      label: "Health & Medical",
      link: "https://www.website.com",
    },
    {
      icon: <TheaterComedyIcon sx={iconStyle} />,
      label: "Theaters",
      link: "https://www.website.com",
    },
    {
      icon: <FitnessCenterIcon sx={iconStyle} />,
      label: "Spas & Gyms",
      link: "https://www.website.com",
    },
    {
      icon: <HotelIcon sx={iconStyle} />,
      label: "Hotels & Travel",
      link: "https://www.website.com",
    },
  ];

  return (
    <Container
      sx={{
        py: { xs: 6, md: 10 },
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant={"h2"} sx={{ ...h2Style, color: lightYellow }}>
        Explore by Category
      </Typography>

      <Typography
        sx={{
          color: lightYellow,
          opacity: 0.8,
          mt: 1,
          mb: 6,
          maxWidth: 500,
          mx: "auto",
          fontFamily: "Alata",
        }}
      >
        Find businesses based on the experiences that matter most to you.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {categories.map((category, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <CategoryButton category={category} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesSection;
