import { Container, Card, CardContent, Typography, Box } from "@mui/material";
import { fatergoryData } from "../data/data";
import { lavender, lightYellow } from "../styles/colors";
import { h2Style } from "../styles/styles";

const FategoriesList = () => {
  return (
    <Container
      sx={{
        py: { xs: 6, md: 10 },
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant={"h2"} sx={{ ...h2Style, color: lightYellow }}>
        What are Fategories?
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
        Fategories describe a spectrum of body sizes and lived experiences.
        These categories help highlight how access, comfort, and treatment can
        vary depending on body size, especially in public spaces like
        restaurants, travel, and healthcare.
      </Typography>
      <Container
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* CARDS */}
        {fatergoryData.map((cat, index) => (
          <Card
            key={index}
            sx={{
              mb: 3,
              borderRadius: 4,
              backgroundColor: lightYellow,
              maxWidth: 300,
              width: "100%",
            }}
            elevation={0}
          >
            <CardContent>
              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Alata",
                    color: lavender,
                    fontSize: "1.5rem",
                  }}
                >
                  {cat.name}
                </Typography>
                <Box
                  component="img"
                  src={cat.img}
                  sx={{ width: 45, height: 45 }}
                  alt={cat.alt}
                ></Box>
              </Container>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  opacity: 0.7,
                  mt: 0.5,
                  fontFamily: "Alata",
                }}
              >
                {cat.size}
              </Typography>
              <Typography sx={{ mt: 1, lineHeight: 1.6 }}>
                {cat.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
      {/* CREDIT */}
      <Typography
        sx={{
          fontSize: "0.85rem",
          opacity: 0.7,
          textAlign: "center",
          color: lightYellow,
        }}
      >
        These descriptions are inspired by and adapted from{" "}
        <a
          href="https://fluffykittenparty.com/2021/06/01/fategories-understanding-smallfat-fragility-the-fat-spectrum/"
          target="_blank"
          rel="noopener noreferrer"
          className="credit-link"
        >
          “Fategories: Understanding the Fat Spectrum”
        </a>{" "}
        by Fluffy Kitten Party. Full credit to the original author for this
        framework.
      </Typography>
    </Container>
  );
};

export default FategoriesList;
