import { Box, Typography } from "@mui/material";
import FlatwareIcon from "@mui/icons-material/Flatware";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryButton from "./CategoryButton";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HotelIcon from "@mui/icons-material/Hotel";
const CategoriesSection = () => {
  const categories = [
    {
      icon: <FlatwareIcon sx={{ color: "black" }} />,
      label: "Restaurants & Bars",
      link: "https://www.website.com",
    },
    {
      icon: <ShoppingCartIcon sx={{ color: "black" }} />,
      label: "Shopping",
      link: "https://www.website.com",
    },
    {
      icon: <HealthAndSafetyIcon sx={{ color: "black" }} />,
      label: "Health & Medical",
      link: "https://www.website.com",
    },
    {
      icon: <TheaterComedyIcon sx={{ color: "black" }} />,
      label: "Theaters",
      link: "https://www.website.com",
    },
    {
      icon: <FitnessCenterIcon sx={{ color: "black" }} />,
      label: "Spas & Gyms",
      link: "https://www.website.com",
    },
    {
      icon: <HotelIcon sx={{ color: "black" }} />,
      label: "Hotels & Travel",
      link: "https://www.website.com",
    },
  ];
  return (
    <Box
      sx={{
        padding: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component={"h2"}
        sx={{
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          fontFamily: "Alata",
        }}
      >
        Categories
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          paddingY: 2,
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          width: "fit-content",
        }}
      >
        {categories.map((category) => {
          return <CategoryButton category={category}></CategoryButton>;
        })}
      </Box>
    </Box>
  );
};

export default CategoriesSection;
