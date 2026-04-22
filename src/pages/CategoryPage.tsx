import { Box, Container, Divider, Typography } from "@mui/material";
import Hero from "../components/Hero";
import heroImg from "../assets/pexels-tiffanya-10575037.jpg";
import { businesses, categories } from "../data/data";
import { useParams } from "react-router-dom";
import FiltersDrawer from "../components/FiltersDrawer";
import type { FiltersType } from "../types/types";
import React from "react";
import BusinessCard from "../components/BusinessCard";
import { h1Style } from "../styles/styles";

const CategoryPage = () => {
  const [filters, setFilters] = React.useState<FiltersType>({
    Fategories: "",
  });
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
          <Typography variant="h1" sx={h1Style}>
            {label}
          </Typography>
        }
      />
      <FiltersDrawer filters={filters} setFilters={setFilters} />
      <Container>
        {businesses.map((b) => (
          <>
            <BusinessCard
              key={b.name}
              img={b.images[0]}
              name={b.name}
              rating={b.rating}
              location={b.location}
              numReviews={b.numReviews}
              recentReview={b.reviews[0]}
            />
            <Divider></Divider>
          </>
        ))}
      </Container>
    </Box>
  );
};

export default CategoryPage;
