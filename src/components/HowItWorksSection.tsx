import { Box, Grid, Typography } from "@mui/material";
import { lightLavender } from "../styles/colors";
import curlyArrow from "../assets/hand-drawn-spiral-arrow.png";

const HowItWorksSection = () => {
  const numStyle = {
    fontSize: { xs: "2rem", sm: "4rem", md: "5rem" },
    fontFamily: "Alata",
    textAlign: "center",
    textShadow: { xs: "2px 2px 0px grey", sm: "5px 5px 0px grey" },
    color: "white",
  };

  const blurbStyle = {
    fontFamily: "Alata",
    textAlign: "center",
    maxWidth: { xs: 100, sm: 150 },
    backgroundColor: "white",
    borderRadius: 2,
    fontSize: { xs: "0.75rem", sm: "1rem" },
    padding: 0.1,
    margin: 0.5,
  };

  const arrowStyle = {
    width: { xs: "150%", sm: 60, md: 75, lg: 100 },
    position: "relative",
    top: { xs: 10, sm: 30 },
  };

  const gridItemStyle = {
    justifyItems: "center",
  };
  const numResponsiveSize = { xs: 4, sm: 2 };
  const arrowResponsiveSize = 1;

  return (
    <Box
      sx={{
        backgroundColor: lightLavender,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: 600,
        paddingY: 2,
      }}
    >
      <Typography
        component={"h2"}
        sx={{
          fontFamily: "Alata",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          textAlign: "center",
        }}
      >
        How It Works
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          marginBottom: 2,
        }}
      >
        {/* Step 1 */}
        <Grid size={numResponsiveSize} sx={gridItemStyle}>
          <Typography sx={numStyle}>1</Typography>
          <Typography sx={blurbStyle}>
            Search for a business in the Hudson Valley.
          </Typography>
        </Grid>
        {/* Arrow 1 */}
        <Grid size={arrowResponsiveSize}>
          <Box component={"img"} sx={arrowStyle} src={curlyArrow}></Box>
        </Grid>
        {/* Step 2 */}
        <Grid size={numResponsiveSize} sx={gridItemStyle}>
          <Typography sx={numStyle}>2</Typography>
          <Typography sx={blurbStyle}>
            Read community reviews focused on fat accessibility.
          </Typography>
        </Grid>
        {/* Arrow 2 */}
        <Grid size={{ xs: 0, sm: 1 }}>
          <Box
            component={"img"}
            sx={{
              ...arrowStyle,
              transform: "rotateX(180deg)",
              display: { xs: "none", sm: "block" },
            }}
            src={curlyArrow}
          ></Box>
        </Grid>
        {/* Step 3 */}
        <Grid size={numResponsiveSize} sx={gridItemStyle}>
          <Typography sx={numStyle}>3</Typography>
          <Typography sx={blurbStyle}>
            See ratings for seating, space, equipment, and staff treatment.
          </Typography>
        </Grid>
        {/* Arrow 3 */}
        <Grid size={arrowResponsiveSize}>
          <Box
            component={"img"}
            sx={{
              ...arrowStyle,
              transform: { xs: "rotateX(180deg)", sm: "none" },
            }}
            src={curlyArrow}
          ></Box>
        </Grid>
        {/* Step 4 */}
        <Grid size={numResponsiveSize} sx={gridItemStyle}>
          <Typography sx={numStyle}>4</Typography>
          <Typography sx={blurbStyle}>
            Share your own experience to help others.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;
