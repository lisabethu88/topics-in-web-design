import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { darkGray, darkGreen } from "../styles/colors";
import FilterListIcon from "@mui/icons-material/FilterList";
import type { FiltersType } from "../types/types";
import { h2Style, navItemStyle } from "../styles/styles";
import FatergoriesTooltip from "./FatergoriesTooltip";
import { fatergories } from "../data/data";

interface FiltersProps {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

const FiltersDrawer = ({ filters, setFilters }: FiltersProps) => {
  const filterOptions = {
    fatergories: fatergories,
  };

  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box sx={{ p: 2 }}>
      <Typography variant="h2" sx={h2Style}>
        Filters
      </Typography>

      <Divider sx={{ mb: 2 }} />
      {/* FATERGORIES FILTER */}
      <Typography variant="h2" fontFamily={"Alata"} fontSize={"larger"}>
        Fatergories <FatergoriesTooltip />
      </Typography>
      <List>
        {filterOptions.fatergories.map((option) => (
          <ListItem key={option} disablePadding>
            <ListItemButton
              selected={filters.fatergories === option}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  fatergories: option,
                }))
              }
            >
              <ListItemText
                primary={option}
                slotProps={{ primary: { sx: { ...navItemStyle } } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Button
        variant="contained"
        sx={{
          backgroundColor: darkGreen,
          fontFamily: "Alata",
          letterSpacing: 1,
        }}
        fullWidth
        onClick={() => {
          console.log("Applied filters:", filters);
          handleDrawerToggle();
        }}
      >
        Apply Filters
      </Button>
    </Box>
  );
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          aria-label="open filters"
          onClick={handleDrawerToggle}
          sx={{ color: darkGray, borderRadius: 5, mx: 2 }}
        >
          <FilterListIcon />{" "}
          <Typography
            variant="h2"
            sx={{ fontFamily: "Alata", fontSize: "1.5rem", ml: 1 }}
          >
            Filters
          </Typography>
        </IconButton>
      </Box>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default FiltersDrawer;
