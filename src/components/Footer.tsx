import Box from "@mui/material/Box";
import { lightYellow } from "../styles/colors";
import { navItemStyle } from "../styles/styles";
import { Container, Link, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import { navItems } from "../data/data";

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
        bottom: 130,
        position: "relative",
        height: 130,
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
          <Link
            key={index}
            href={`#${item.path}`}
            sx={{ ...navItemStyle, mx: 2, textDecoration: "none" }}
          >
            {item.label}
          </Link>
        ))}
      </Container>
    </Box>
  );
}
