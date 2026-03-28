import { Box, Typography } from "@mui/material";
import { logoStyle } from "../styles/styles";
import logo from "../assets/fatforall-logo.png";

const Logo = () => {
  return (
    <Box sx={{ paddingY: 3, position: "relative" }}>
      <Box
        component={"img"}
        src={logo}
        sx={{ position: "absolute", width: 35, left: 50, bottom: 15 }}
        alt="Fat For All logo - Desktop"
      />
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          ...logoStyle,
          position: "relative",
          textWrap: "nowrap",
          textAlign: "center",
          fontSize: 15,
          letterSpacing: 5,
        }}
      >
        FAT FOR ALL
      </Typography>
    </Box>
  );
};

export default Logo;
