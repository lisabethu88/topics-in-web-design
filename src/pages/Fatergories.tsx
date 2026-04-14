import Hero from "../components/Hero";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import { lightYellow, lavender, darkGreen } from "../styles/colors";
import { fatergoryData } from "../data/data";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const Fatergories = () => {
  return (
    <Box>
      {/* HERO */}
      <Hero
        heroImg={
          "https://images.unsplash.com/photo-1565130083573-0d787ac28c27?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        contents={
          <Typography
            sx={{
              fontSize: "3rem",
              color: lightYellow,
              fontFamily: "Alata",
              textAlign: "center",
            }}
          >
            What are Fatergories?
          </Typography>
        }
      />

      {/* INTRO */}
      <Container sx={{ maxWidth: 800 }}>
        <Typography
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
          Fatergories describe a spectrum of body sizes and lived experiences.
          These categories help highlight how access, comfort, and treatment can
          vary depending on body sizem especially in public spaces like
          restaurants, travel, and healthcare.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1.5,
            backgroundColor: darkGreen,
            borderRadius: 3,
            px: 2,
            py: 1.5,
            mb: 4,
            maxWidth: 700,
            mx: "auto",
            justifyContent: "center",
          }}
        >
          <WarningAmberIcon sx={{ mt: "2px", color: lightYellow }} />

          <Typography
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: lightYellow,
            }}
          >
            <strong>Disclaimer:</strong> Size ranges are approximate and meant
            as a general guide.
          </Typography>
        </Box>

        {/* CARDS */}
        {fatergoryData.map((cat, index) => (
          <Card
            key={index}
            sx={{
              mb: 3,
              borderRadius: 4,
              backgroundColor: "rgba(0,0,0,0.02)",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Alata", color: lavender }}
              >
                {cat.name}
              </Typography>
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

        <Divider sx={{ my: 4 }} />

        {/* CREDIT */}
        <Typography
          sx={{
            fontSize: "0.85rem",
            opacity: 0.7,
            textAlign: "center",
          }}
        >
          These descriptions are inspired by and adapted from{" "}
          <a
            href="https://fluffykittenparty.com/2021/06/01/fategories-understanding-smallfat-fragility-the-fat-spectrum/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Fategories: Understanding the Fat Spectrum”
          </a>{" "}
          by Fluffy Kitten Party. Full credit to the original author for this
          framework.
        </Typography>
      </Container>
    </Box>
  );
};

export default Fatergories;
