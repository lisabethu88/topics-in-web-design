import Hero from "../components/Hero";
import Typography from "@mui/material/Typography";
import { lightYellow } from "../styles/colors";
import { Box, Container, Divider } from "@mui/material";
import ResourceCard from "../components/ResourceCard";
import { books, studies, advocacy, articlesBlogs } from "../data/data";
const Resources = () => {
  const content = (
    <Typography
      sx={{
        fontSize: "4rem",
        color: lightYellow,
        fontFamily: "Alata",
        textAlign: "center",
      }}
    >
      Resources
    </Typography>
  );

  return (
    <div>
      <Hero
        heroImg={"https://images.unsplash.com/photo-1565125175292-f3177f64c794"}
        contents={content}
      ></Hero>
      <Container id="resources-container">
        <Box
          sx={{
            maxWidth: 700,
            mx: "auto",
            mt: 5,
            mb: 4,
            px: 3,
            py: 2,
            backgroundColor: "rgba(0,0,0,0.04)",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              fontFamily: "Alata",
              lineHeight: 1.7,
              fontSize: "1.1rem",
            }}
          >
            A collection of tools, organizations, and guides to support
            fat-friendly living and advocacy.
          </Typography>
        </Box>
        <h3>Articles/Blogs</h3>
        {articlesBlogs.map((resource) => (
          <ResourceCard resource={resource}></ResourceCard>
        ))}{" "}
        <Divider />
        <h3>Studies</h3>
        {studies.map((resource) => (
          <ResourceCard resource={resource}></ResourceCard>
        ))}
        <Divider />
        <h3>Books</h3>
        {books.map((resource) => (
          <ResourceCard resource={resource}></ResourceCard>
        ))}
        <Divider />
        <h3>Advocacy</h3>
        {advocacy.map((resource) => (
          <ResourceCard resource={resource}></ResourceCard>
        ))}
      </Container>
    </div>
  );
};

export default Resources;
