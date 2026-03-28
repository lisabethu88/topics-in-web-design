import { Box, Typography } from "@mui/material";
import FlatwareIcon from "@mui/icons-material/Flatware";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryButton from "./CategoryButton";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HotelIcon from "@mui/icons-material/Hotel";
import { darkGray } from "../styles/colors";
import { h2Style } from "../styles/styles";
const CategoriesSection = () => {
  const iconStyle = { color: darkGray, fontSize: 50 };
  const categories = [
    {
      icon: <FlatwareIcon sx={iconStyle} />,
      label: "Restaurants & Bars",
      link: "https://www.website.com",
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
    <Box
      sx={{
        paddingY: { xs: 2, md: 5 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography component={"h2"} sx={h2Style}>
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
          maxWidth: 1200,
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
