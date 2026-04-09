import type { Category } from "../types/types";
import FlatwareIcon from "@mui/icons-material/Flatware";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HotelIcon from "@mui/icons-material/Hotel";
import { green } from "../styles/colors";
const iconStyle = { color: green, fontSize: 50 };

export const categories: Category[] = [
  {
    icon: <FlatwareIcon sx={iconStyle} />,
    label: "Restaurants & Bars",
    link: "restaurants-and-bars",
  },
  {
    icon: <ShoppingCartIcon sx={iconStyle} />,
    label: "Shopping",
    link: "https://www.website.com",
  },
  {
    icon: <HealthAndSafetyIcon sx={iconStyle} />,
    label: "Health & Medical",
    link: "https://www.website.com",
  },
  {
    icon: <TheaterComedyIcon sx={iconStyle} />,
    label: "Theaters",
    link: "https://www.website.com",
  },
  {
    icon: <FitnessCenterIcon sx={iconStyle} />,
    label: "Spas & Gyms",
    link: "https://www.website.com",
  },
  {
    icon: <HotelIcon sx={iconStyle} />,
    label: "Hotels & Travel",
    link: "https://www.website.com",
  },
];
