import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface HeroProps {
  heroImg: string;
  contents: ReactNode; // component or components that will go on the hero
  bgPos?: string;
}
const Hero = ({ heroImg, contents, bgPos = "center" }: HeroProps) => {
  return (
    <Box
      sx={{
        minHeight: 250,
        height: "fit-content",
        width: "100%",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: bgPos,
        backgroundBlendMode: "darken",
        backgroundColor: "rgb(0 0 0 / 75%)",
        justifyContent: "center",
        alignContent: "center",
        py: 4,
      }}
    >
      {contents}
    </Box>
  );
};

export default Hero;
