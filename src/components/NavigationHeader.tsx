import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { navItemStyle } from "../styles/styles.ts";
import { lightYellow, darkGray } from "../styles/colors.ts";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { navItems } from "../data/data.tsx";

const drawerWidth = 240;
export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component={"img"}
        src={logo}
        sx={{
          width: 150,
          display: { xs: "block", md: "none" },
          paddingY: 1,
          margin: "0 auto",
        }}
        alt="Fat For All"
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            disablePadding
            component={Link}
            to={`/${item.path}`}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item.label}
                slotProps={{ primary: { sx: { ...navItemStyle } } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component={"header"} sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" elevation={0}>
        <Toolbar
          sx={{ backgroundColor: lightYellow, justifyContent: "space-between" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: darkGray }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component={"img"}
            src={logo}
            sx={{ width: 200, display: { xs: "none", md: "block" } }}
            alt="Fat For All"
          />

          <Box sx={{ display: { xs: "none", md: "flex" }, flexWrap: "nowrap" }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{ ...navItemStyle }}
                component={Link}
                to={`/${item.path}`}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
