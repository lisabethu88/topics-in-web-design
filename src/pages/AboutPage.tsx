import Hero from "../components/Hero";
import heroImg from "../assets/pexels-rbrigant44-6439084.jpg";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import selfie from "../assets/9C18874C-AC52-4E07-A9EB-816A2D824165_1_105_c.jpeg";
import { h1Style } from "../styles/styles";

const AboutPage = () => {
  const content = (
    <Typography
      variant="h1"
      sx={h1Style}
    >
      About
    </Typography>
  );

  return (
    <Box>
      <Hero heroImg={heroImg} contents={content} />
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          py: 6,
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems={"center"}
          flexWrap={"wrap-reverse"}
        >
          {/* Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              alt="Plus size woman standing on top of a hill"
              component="img"
              src={selfie}
              sx={{
                width: "100%",
                borderRadius: 4,
                display: "block",
                mx: "auto",
                boxShadow: 3,
                maxWidth: 400,
              }}
            />
          </Grid>

          {/* Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                textAlign: { xs: "center", md: "left" },
                fontFamily: "Alata",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              consectetur commodo mi, dignissim finibus ex cursus sed. Maecenas
              malesuada ex consectetur, sagittis lorem et, egestas felis. Nulla
              mollis massa turpis, non malesuada nulla facilisis ac. Aliquam vel
              fermentum est. Quisque leo sem, pretium sed mauris ut, porta
              feugiat diam. Cras suscipit tempus lacus, id consectetur urna
              consectetur vitae.{" "}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutPage;
