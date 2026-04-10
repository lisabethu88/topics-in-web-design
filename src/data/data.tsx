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

export const businesses = [
  {
    name: "Blue Pointe",
    title: "Waterfront Seafood Restaurant",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    rating: 4.6,
    location: "Newburgh, NY",
    numReviews: 128,
    recentReview: "Amazing views of the Hudson and fresh oysters.",
  },
  {
    name: "The Amsterdam",
    title: "American Gastropub",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    rating: 4.5,
    location: "Rhinebeck, NY",
    numReviews: 92,
    recentReview: "Great cocktails and cozy atmosphere downtown.",
  },
  {
    name: "Wm. Farmer & Sons",
    title: "Farm-to-Table Restaurant & Inn",
    img: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee",
    rating: 4.7,
    location: "Hudson, NY",
    numReviews: 210,
    recentReview: "Incredible seasonal menu and rustic vibe.",
  },
  {
    name: "Restaurant Kinsley",
    title: "Upscale Dining Experience",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    rating: 4.8,
    location: "Kingston, NY",
    numReviews: 156,
    recentReview: "Beautiful interior and top-tier service.",
  },
  {
    name: "Stockade Tavern",
    title: "Craft Cocktails & Small Plates",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    rating: 4.6,
    location: "Kingston, NY",
    numReviews: 180,
    recentReview: "Best cocktails in the Hudson Valley.",
  },
  {
    name: "The Lasting Joy Brewery",
    title: "Local Craft Brewery",
    img: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a",
    rating: 4.5,
    location: "Poughkeepsie, NY",
    numReviews: 74,
    recentReview: "Great beer flights and relaxed outdoor seating.",
  },
];
