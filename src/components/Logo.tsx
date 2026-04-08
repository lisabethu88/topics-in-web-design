import { Box, Typography } from "@mui/material";
import { logoStyle } from "../styles/styles";
import logo from "../assets/fatforall-logo.png";

const Logo = () => {
  return (
    <>
      <Box
        component={"img"}
        src={logo}
        sx={{ position: "absolute", width: 45, left: 110, bottom: 5 }}
        alt="Fat For All logo - Desktop"
      />
      <Typography
        variant="h1"
        sx={{
          flexGrow: 1,
          ...logoStyle,
          position: "relative",
          textWrap: "nowrap",
        }}
      >
        FAT FOR ALL
      </Typography>
    </>
  );
};

export default Logo;
