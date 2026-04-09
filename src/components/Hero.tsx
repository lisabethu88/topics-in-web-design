import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface HeroProps {
  heroImg: string;
  contents: ReactNode; // component or components that will go on the hero
}
const Hero = ({ heroImg, contents }: HeroProps) => {
  return (
    <Box
      sx={{
        minHeight: 250,
        height: "fit-content",
        width: "100%",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
        backgroundColor: "rgb(0 0 0 / 75%)",
        justifyContent: "center",
        alignContent: "center",
        py: 4,
        // paddingTop: { xs: "75px", md: "125px" },
        // paddingBottom: { xs: "25px", md: "75px" },
      }}
    >
      {contents}
    </Box>
  );
};

export default Hero;
