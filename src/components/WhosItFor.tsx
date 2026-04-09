import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessibleIcon from "@mui/icons-material/Accessible";
import StorefrontIcon from "@mui/icons-material/Storefront";

import { green, lightLavender, lightYellow } from "../styles/colors";
import { h2Style } from "../styles/styles";

const audience = [
  {
    title: "Fat Folks",
    description:
      "Small to infinity fat people navigating public spaces with confidence.",
    icon: <FavoriteBorderIcon fontSize="large" />,
    color: green,
  },
  {
    title: "Allies",
    description:
      "People looking to support and choose inclusive, accessible businesses.",
    icon: <GroupsIcon fontSize="large" />,
    color: lightLavender,
  },
  {
    title: "Disabled People",
    description:
      "Those impacted by size-based accessibility barriers in everyday spaces.",
    icon: <AccessibleIcon fontSize="large" />,
    color: green,
  },
  {
    title: "Business Owners",
    description:
      "Businesses that want to improve inclusivity and better serve all bodies.",
    icon: <StorefrontIcon fontSize="large" />,
    color: lightLavender,
  },
];

const WhosItFor = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        {/* Heading */}
        <Typography
          component="h2"
          sx={{ ...h2Style, color: lightYellow, mb: 6 }}
        >
          This Space Is For...
        </Typography>

        {/* Cards */}
        <Grid container spacing={4} justifyContent="center">
          {audience.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  position: "relative",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  },
                }}
                elevation={0}
              >
                {/* Top Accent Bar */}
                <Box
                  sx={{
                    height: 6,
                    width: "100%",
                    backgroundColor: item.color,
                  }}
                />

                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    py: 4,
                  }}
                >
                  {/* Icon with colored background */}
                  <Box
                    sx={{
                      backgroundColor: `${item.color}22`, // 22 = 13% opacity
                      color: item.color,
                      borderRadius: "50%",
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h3"
                    sx={{
                      color: lightYellow,
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                      transition: "all 0.3s ease",
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                      fontStyle: "normal",
                      letterSpacing: 4,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: lightYellow,
                      opacity: 0.9,
                      maxWidth: 240,
                      lineHeight: 1.6,
                      mt: 1,
                      fontFamily: "Alata",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhosItFor;
