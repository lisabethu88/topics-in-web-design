import { Box, Typography } from "@mui/material";
import { logoStyle } from "../styles/styles";
import logo from "../assets/fatforall-logo.png";

const Logo = () => {
  return (
    <>
      <Box
        component={"img"}
        src={logo}
        sx={{ position: "absolute", width: 45, left: 100, bottom: 5 }}
      />
      <Typography
        variant="h5"
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

export default Logo;
