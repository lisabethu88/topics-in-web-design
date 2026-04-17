import Hero from "../components/Hero";
import Typography from "@mui/material/Typography";
import { Box, Container, Divider } from "@mui/material";
import ResourceCard from "../components/ResourceCard";
import { books, studies, advocacy, articlesBlogs } from "../data/data";
import { h1Style } from "../styles/styles";
const Resources = () => {
  const content = (
    <Typography variant="h1" sx={h1Style}>
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
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
            mt: 4,
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
        <h2>Articles/Blogs</h2>
        {articlesBlogs.map((resource) => (
          <ResourceCard resource={resource}></ResourceCard>
        ))}{" "}
        <Divider />
        <h2>Studies</h2>
        {studies.map((resource) => (
          <ResourceCard resource={resource}></ResourceCard>
        ))}
        <Divider />
        <h2>Books</h2>
        {books.map((resource) => (
          <ResourceCard resource={resource}></ResourceCard>
        ))}
        <Divider />
        <h2>Advocacy</h2>
        {advocacy.map((resource) => (
          <ResourceCard resource={resource}></ResourceCard>
        ))}
      </Container>
    </div>
  );
};

export default Resources;
