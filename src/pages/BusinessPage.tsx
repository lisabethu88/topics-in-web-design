import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import heroImg from "../assets/pexels-tiffanya-10575037.jpg";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";
import { lightYellow, darkGray } from "../styles/colors";
import { categories } from "../data/data";

// Example mock data (replace with API or real dataset later)
const businesses = [
  {
    name: "Blue Pointe",
    description:
      "Upscale seafood restaurant with waterfront views and seasonal menus.",
    rating: 4.5,
    price: "$$$",
    address: "123 Waterfront Ave, NY",
  },
];

const BusinessPage = () => {
  const { category, business } = useParams<{
    category: string;
    business: string;
  }>();

  // Decode URL
  const businessName = business ? decodeURIComponent(business) : "";

  // Find category label
  const match = categories.find(
    (c) => c.link.toLowerCase() === category?.toLowerCase(),
  );
  const categoryLabel = match?.label || "Category not found";

  // Find business data
  const businessData = businesses.find(
    (b) => b.name.toLowerCase() === businessName.toLowerCase(),
  );

  return (
    <Box>
      {/* HERO */}
      <Hero
        heroImg={heroImg}
        contents={
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "2.5rem",
                color: lightYellow,
                fontFamily: "Alata",
              }}
            >
              {businessName}
            </Typography>

            <Typography
              sx={{
                color: lightYellow,
                fontFamily: "Alata",
                opacity: 0.9,
              }}
            >
              {categoryLabel}
            </Typography>
          </Box>
        }
      />

      {/* CONTENT */}
      <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            width: "100%",
            maxWidth: 700,
            bgcolor: lightYellow,
            borderRadius: 3,
          }}
          elevation={0}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Alata", color: darkGray }}
            >
              {businessData?.name || businessName}
            </Typography>

            <Typography sx={{ mt: 1, color: darkGray }}>
              {businessData?.description || "No description available."}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography sx={{ fontFamily: "Alata" }}>
              ⭐ Rating: {businessData?.rating ?? "N/A"}
            </Typography>

            <Typography sx={{ fontFamily: "Alata" }}>
              💲 Price: {businessData?.price ?? "N/A"}
            </Typography>

            <Typography sx={{ fontFamily: "Alata", mt: 1 }}>
              📍 {businessData?.address ?? "Address not available"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default BusinessPage;
