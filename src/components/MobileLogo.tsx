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
          left: 99,
          top: 8,
        }}
      />
      <Typography
        variant="h6"
        component="div"
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
