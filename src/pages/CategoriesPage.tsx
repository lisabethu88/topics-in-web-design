import CategoriesSection from "../components/CategoriesSection";
import { Box } from "@mui/material";
import bgImg from "../assets/pexels-tiffanya-10575037.jpg";
const CategoriesPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
        backgroundColor: "rgb(0 0 0 / 75%)",
        height: "100%",
      }}
    >
      <CategoriesSection />
    </Box>
  );
};

export default CategoriesPage;
