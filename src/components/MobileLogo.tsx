import { Box, Typography } from "@mui/material";
import { logoStyle } from "../styles/styles";
import logo from "../assets/fatforall-logo.png";

const MobileLogo = () => {
  return (
    <>
      <Box
        component={"img"}
        src={logo}
        sx={{
          position: "absolute",
          width: 30,
          left: 98.5,
          top: 5,
        }}
        alt="Fat For All logo - Mobile"
      />
      <Typography
        variant="h1"
        sx={{
          flexGrow: 1,
          ...logoStyle,
          position: "relative",
        }}
      >
        FATFORALL
      </Typography>
    </>
  );
};

export default MobileLogo;
