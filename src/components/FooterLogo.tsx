import { Box, Typography } from "@mui/material";
import { logoStyle } from "../styles/styles";
import logo from "../assets/fatforall-logo.png";

const Logo = () => {
  return (
    <Box sx={{ pt: 2, pb: 1, position: "relative" }}>
      <Box
        component={"img"}
        src={logo}
        sx={{ position: "absolute", width: 35, left: 65, top: 10 }}
        alt="Fat For All logo - Desktop"
      />
      <Typography
        variant="h3"
        sx={{
          flexGrow: 1,
          ...logoStyle,
          position: "relative",
          textWrap: "nowrap",
          textAlign: "center",
          letterSpacing: 5,
        }}
      >
        FAT FOR ALL
      </Typography>
    </Box>
  );
};

export default Logo;
