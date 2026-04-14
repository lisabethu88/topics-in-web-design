import Hero from "../components/Hero";
import { Box, Container, Typography, Divider } from "@mui/material";
import { lightYellow } from "../styles/colors";

const sections = [
  {
    title: "Be Respectful",
    content:
      "This is a space centered on body diversity and lived experiences. Treat others with kindness and respect, even when your experiences differ.",
  },
  {
    title: "No Body Shaming",
    content:
      "We do not tolerate fatphobia, body shaming, or harmful language. This includes comments about weight, size, or appearance in a negative or judgmental way.",
  },
  {
    title: "Share Honest Experiences",
    content:
      "Reviews should reflect your real experiences. Be specific and helpful, especially when describing accessibility, seating, and overall comfort.",
  },
  {
    title: "Center Accessibility",
    content:
      "When leaving reviews, consider including details that help others navigate spaces safely such as seating types, spacing, and staff treatment.",
  },
  {
    title: "No Harassment or Hate Speech",
    content:
      "Harassment, discrimination, or hate speech of any kind will not be tolerated. This includes racism, sexism, ableism, and other forms of discrimination.",
  },
  {
    title: "Respect Privacy",
    content:
      "Do not share personal or identifying information about others without their consent.",
  },
  {
    title: "We Moderate for Safety",
    content:
      "Content that violates these guidelines may be removed to maintain a safe and supportive community.",
  },
];

const CommunityGuidelines = () => {
  return (
    <Box>
      {/* HERO */}
      <Hero
        heroImg={"https://images.unsplash.com/photo-1565128398554-b46618954275"}
        contents={
          <Typography
            sx={{
              fontSize: "3rem",
              color: lightYellow,
              fontFamily: "Alata",
              textAlign: "center",
            }}
          >
            Community Guidelines
          </Typography>
        }
      />

      {/* CONTENT */}
      <Container sx={{ maxWidth: 800, py: 2 }}>
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
            Our community is built on respect, inclusivity, and shared
            experiences. These guidelines help keep this space safe and
            supportive for everyone.
          </Typography>
        </Box>

        {sections.map((section, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontFamily: "Alata", mb: 1 }}>
              {section.title}
            </Typography>

            <Typography sx={{ lineHeight: 1.6 }}>{section.content}</Typography>

            {index !== sections.length - 1 && <Divider sx={{ mt: 3 }} />}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default CommunityGuidelines;
