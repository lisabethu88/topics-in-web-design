import { Box, Typography } from "@mui/material";
import Hero from "../components/Hero";
import heroImg from "../assets/pexels-tiffanya-10575037.jpg";
import { categories } from "../data/data";
import { lightYellow } from "../styles/colors";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category: categoryParam } = useParams<{ category: string }>();
  const match = categories.find(
    (category) => category.link.toLowerCase() === categoryParam?.toLowerCase(),
  );
  const label = match?.label || "Category not found";

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
            {label}
          </Typography>
        }
      ></Hero>
    </Box>
  );
};

export default CategoryPage;
