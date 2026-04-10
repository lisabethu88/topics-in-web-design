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
import { darkGray, green } from "../styles/colors";
import FilterListIcon from "@mui/icons-material/FilterList";
import type { FiltersType } from "../types/types";
import { navItemStyle } from "../styles/styles";

interface FiltersProps {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

const FiltersDrawer = ({ filters, setFilters }: FiltersProps) => {
  const filterOptions = {
    fatergories: ["Infini", "Super", "Mid", "Small"],
  };

  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box sx={{ p: 2, fontFamily: "Alata" }}>
      <Typography variant="h6" sx={{ mb: 2, fontFamily: "Alata" }}>
        Filters
      </Typography>

      <Divider sx={{ mb: 2 }} />
      {/* FATERGORIES FILTER */}
      <Typography variant="subtitle1" fontFamily={"Alata"} fontSize={"larger"}>
        Fatergories
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
        sx={{ backgroundColor: green, fontFamily: "Alata", letterSpacing: 1 }}
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
          sx={{ color: darkGray, borderRadius: 10 }}
        >
          <FilterListIcon />
        </IconButton>

        <Typography sx={{ fontFamily: "Alata" }}>Filters</Typography>
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
