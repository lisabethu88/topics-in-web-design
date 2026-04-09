import { Box, Typography } from "@mui/material";

import Hero from "../components/Hero";
import heroImg from "../assets/pexels-tiffanya-10575037.jpg";
import { categories } from "../data/data";
import { useLocation } from "react-router-dom";
import type { Category } from "../types/types";
import { lightYellow } from "../styles/colors";

const CategoryPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop() || ""; // string
  const match = categories.find((category: Category) => category.link === path);
  const label = match?.label || "";

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
