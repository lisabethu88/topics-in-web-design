import Box from "@mui/material/Box";
import FooterLogo from "./FooterLogo";
import { lightYellow } from "../styles/colors";
import { navItemStyle } from "../styles/styles";
import { Container, Link, Typography } from "@mui/material";

export default function SimpleBottomNavigation() {
  const bottomNavItems = [
    { label: "About" },
    { label: "Resources" },
    { label: "Community Guidelines" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: lightYellow,
      }}
    >
      <FooterLogo />
      <Typography></Typography>
      <Container
        sx={{
          display: "flex",
          bgcolor: lightYellow,
          justifyContent: "center",
          mb: 4,
          flexWrap: "wrap",
        }}
      >
        {bottomNavItems.map((item) => (
          <Link
            href="#"
            sx={{ ...navItemStyle, mx: 2, textDecoration: "none" }}
          >
            {item.label}
          </Link>
        ))}
      </Container>
    </Box>
  );
}
