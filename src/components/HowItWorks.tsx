import { Typography, Box, Avatar, Stack, Grid, Container } from "@mui/material";
import { darkGray, lavender, lightYellow } from "../styles/colors";
import { h2Style } from "../styles/styles";
import SearchIcon from "@mui/icons-material/Search";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SeatingIcon from "@mui/icons-material/EventSeat";
import ShareIcon from "@mui/icons-material/Share";

const iconStyle = { color: lavender };
const steps = [
  {
    title: "Search",
    description: "Search for a business in the Hudson Valley.",
    icon: <SearchIcon fontSize="large" sx={iconStyle} />,
  },
  {
    title: "Read Reviews",
    description: "Read community reviews focused on fat accessibility.",
    icon: <RateReviewIcon fontSize="large" sx={iconStyle} />,
  },
  {
    title: "Check Ratings",
    description:
      "See ratings for seating, space, equipment, and staff treatment.",
    icon: <SeatingIcon fontSize="large" sx={iconStyle} />,
  },
  {
    title: "Share",
    description: "Share your own experience to help others.",
    icon: <ShareIcon fontSize="large" sx={iconStyle} />,
  },
];

export default function HowItWorks() {
  return (
    <Container
      sx={{
        paddingY: 8,
      }}
    >
      <Typography
        component={"h2"}
        align="center"
        gutterBottom
        sx={{
          ...h2Style,
          mb: 6,
          color: lightYellow,
        }}
      >
        How It Works
      </Typography>

      <Grid container spacing={4} mt={2}>
        {steps.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Box textAlign="center">
              <Stack spacing={2} alignItems="center">
                {/* Step Number */}
                <Avatar
                  sx={{
                    bgcolor: "#69C384",
                    width: 56,
                    height: 56,
                    fontFamily: "'Alata', sans-serif",
                    color: darkGray,
                  }}
                >
                  {index + 1}
                </Avatar>

                {/* Icon */}
                <Box sx={{ color: "primary.main" }}>{step.icon}</Box>

                {/* Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                    letterSpacing: 4,
                    color: lightYellow,
                    textTransform: "uppercase",
                  }}
                >
                  {step.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  color={lightYellow}
                  sx={{
                    fontFamily: "Alata",
                  }}
                >
                  {step.description}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
