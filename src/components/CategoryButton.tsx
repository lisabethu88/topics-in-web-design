import React from "react";
import type { Category } from "../types/types";
import { Button, Link, Typography } from "@mui/material";

interface CategoryButtonProps {
  category: Category;
}
const CategoryButton = ({ category }: CategoryButtonProps) => {
  const icon = category.icon;
  const link = category.link;
  const label = category.label;
  return (
    <Button
      startIcon={icon}
      component={Link}
      href={link}
      sx={{
        maxWidth: { xs: 200, sm: 300 },
        width: "100%",
        backgroundColor: "#bbdded",
        padding: 2,
        borderBottomWidth: "25px",
        borderBottom: "transparent",
        borderBottomStyle: "solid",
        transition: "all 0.3s ease-in-out",

        justifyContent: "left",
        "&:hover": {
          borderBottomWidth: "25px",
          borderBottom: "black",
          borderBottomStyle: "solid",
          transition: "border-width 2s ease-in-out",
        },
      }}
    >
      <Typography
        sx={{
          color: "black",
          fontFamily: "Alata",
          textTransform: "capitalize",
          fontSize: { xs: "0.75rem", sm: "1rem", md: "1.5rem" },
        }}
      >
        {label}
      </Typography>
    </Button>
  );
};

export default CategoryButton;
