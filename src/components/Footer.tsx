import { lightYellow } from "../styles/colors";
import { navItemStyle } from "../styles/styles";
import { Container, Typography, Box } from "@mui/material";
import logo from "../assets/logo.png";
import { navItems } from "../data/data";
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const getYear = () => {
    const d = new Date();
    return d.getFullYear();
  };

  return (
    <Box
      component={"footer"}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: lightYellow,
        bottom: 150,
        position: "relative",
        height: 150,
      }}
    >
      <Box component={"img"} src={logo} sx={{ width: 150 }} alt="Fat For All" />

      <Typography
        sx={{ opacity: 0.7, fontFamily: "Alata", fontSize: "0.75rem", my: 1 }}
      >
        Copyright © {getYear()} FatForAll, Inc
      </Typography>
      <Container
        sx={{
          display: "flex",
          bgcolor: lightYellow,
          justifyContent: "center",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        {navItems.map((item, index) => (
          <Box
            component={Link}
            key={index}
            to={`#${item.path}`}
            sx={{ ...navItemStyle, mx: 2, textDecoration: "none" }}
          >
            {item.label}
          </Box>
        ))}
      </Container>
    </Box>
  );
}
