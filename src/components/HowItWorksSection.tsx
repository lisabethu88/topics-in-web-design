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
    maxWidth: { xs: 75, sm: 150 },
    backgroundColor: "white",
    borderRadius: 2,
    fontSize: { xs: "0.5rem", sm: "1rem" },
    padding: 0.1,
  };
  const arrowStyle = {
    width: { xs: 35, sm: 60, md: 75, lg: 100 },
  };
  const gridItemStyle = {
    justifyItems: "center",
  };
  const numResponsiveSize = 2;
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
        padding: { xs: "0.5rem", sm: "2rem" },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Alata",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          textAlign: "center",
        }}
      >
        How It Works
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          marginBottom: 2,
          flexDirection: "row",
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
        <Grid size={arrowResponsiveSize}>
          <Box
            component={"img"}
            sx={{ ...arrowStyle, transform: "rotateX(180deg)" }}
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
          <Box component={"img"} sx={arrowStyle} src={curlyArrow}></Box>
        </Grid>
        {/* Step 4 */}
        <Grid size={numResponsiveSize} sx={gridItemStyle}>
          <Typography sx={numStyle}>4</Typography>
          <Typography sx={blurbStyle}>
            Share your own experience to help others.
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
