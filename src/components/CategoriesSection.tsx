import { Container, Grid, Typography } from "@mui/material";
import CategoryButton from "./CategoryButton";
import { lightYellow } from "../styles/colors";
import { h2Style } from "../styles/styles";
import { categories } from "../data/data";
const CategoriesSection = () => {
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
