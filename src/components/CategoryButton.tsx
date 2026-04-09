import { darkGray, green, lightYellow } from "../styles/colors";
import type { Category } from "../types/types";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router";

interface CategoryButtonProps {
  category: Category;
}

const CategoryButton = ({ category }: CategoryButtonProps) => {
  const { icon, link, label } = category;

  return (
    <Button
      component={Link}
      to={`/categories/${link}`}
      sx={{
        width: "100%",
        minHeight: 140,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1.5,

        borderRadius: 4,
        backgroundColor: lightYellow,
        backdropFilter: "blur(6px)",

        transition: "all 0.3s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },

        "&:hover .icon": {
          transform: "scale(1.15) rotate(3deg)",
        },

        "&:hover .label": {
          transform: "translateY(2px)",
          opacity: 1,
        },
      }}
    >
      {/* ICON WRAPPER */}
      <Box
        className="icon"
        sx={{
          color: green,
          fontSize: 40,
          transition: "all 0.3s ease",
          display: "flex",
        }}
      >
        {icon}
      </Box>

      {/* LABEL */}
      <Typography
        className="label"
        sx={{
          color: darkGray,
          fontSize: { xs: "1rem", sm: "1.2rem" },
          opacity: 0.8,
          transition: "all 0.3s ease",
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 600,
          fontStyle: "normal",
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
    </Button>
  );
};

export default CategoryButton;
