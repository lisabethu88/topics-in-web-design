import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import heroImg from "../assets/pexels-tiffanya-10575037.jpg";
import { Box, Typography, Divider, Avatar, Button } from "@mui/material";
import { green, lightYellow } from "../styles/colors";
import yelpLogo from "../assets/Yelp_Logo.svg.png";
import StarRating from "../components/StarRating";
import { businesses } from "../data/data";
import type { RatingBreakdown } from "../types/types";
import ReviewModal from "../components/ReviewModal";
import { useState } from "react";
import FatergoriesTooltip from "../components/FatergoriesTooltip";

const BusinessPage = () => {
  const [open, setOpen] = useState(false);
  const ratingsMap: { label: string; key: keyof RatingBreakdown }[] = [
    { label: "Seating", key: "seating" },
    { label: "Bathrooms", key: "bathrooms" },
    { label: "Accessibility", key: "accessibility" },
    { label: "Staff Treatment", key: "staffTreatment" },
  ];
  const { business } = useParams();
  const businessName = business ? decodeURIComponent(business) : "";

  const businessData = businesses.find(
    (b) => b.name.toLowerCase() === businessName.toLowerCase(),
  );

  return (
    <Box>
      {/* HERO */}
      <Hero
        heroImg={businessData?.images[0] || heroImg}
        contents={
          <Typography
            sx={{
              fontSize: "3rem",
              color: lightYellow,
              fontFamily: "Alata",
              textAlign: "center",
            }}
          >
            {businessName}
          </Typography>
        }
      />

      {/* MAIN CONTENT */}
      <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
        {/* PHOTOS */}
        <Typography variant="h5" sx={{ mb: 2, fontFamily: "Alata" }}>
          Photos
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          {businessData?.images.map((img, i) => (
            <Box key={i} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src={img}
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: 3,
                  objectFit: "cover",
                }}
              />
              <Typography sx={{ mt: 1 }}>
                {i === 0 ? "Inside (2)" : "Outside (1)"}
              </Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* RATINGS */}
        <Typography variant="h5" sx={{ mb: 2, fontFamily: "Alata" }}>
          Ratings{" "}
        </Typography>

        {ratingsMap.map(({ label, key }) => (
          <Box key={key} sx={{ mb: 2 }}>
            <Typography>{label}</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StarRating value={businessData?.ratingBreakdown?.[key] || 0} />
              <Typography
                variant="body2"
                sx={{ fontFamily: "Alata", opacity: 0.7, ml: 1 }}
              >
                ({businessData?.ratingBreakdown?.[key] || 0})
              </Typography>
            </Box>
          </Box>
        ))}

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          {/* REVIEWS */}
          <Typography variant="h5" sx={{ mb: 2, fontFamily: "Alata" }}>
            Reviews ({businessData?.reviews.length || 0})
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{
              backgroundColor: green,
              borderRadius: 5,
              textTransform: "none",
              fontSize: "1.2rem",
              px: 3,
              fontFamily: "Alata",
            }}
          >
            Write a Review
          </Button>
        </Box>

        {businessData?.reviews.map((review) => (
          <Box key={review.id} sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Avatar />

            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                {review.author} {/* optional: show body size */}
                {review.bodySize && (
                  <Typography sx={{ fontSize: "0.8rem", opacity: 0.7 }}>
                    {review.bodySize} <FatergoriesTooltip />
                  </Typography>
                )}
              </Typography>

              <StarRating value={review.rating} />

              <Typography sx={{ mt: 1 }}>{review.comment}</Typography>
            </Box>
          </Box>
        ))}

        <Divider sx={{ my: 3 }} />

        {/* CTA BUTTON */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "red",
            borderRadius: 5,
            textTransform: "none",
            fontSize: "1.2rem",
            px: 3,
            fontFamily: "Alata",
          }}
        >
          See on
          <Box
            component="img"
            sx={{ width: "auto", height: 30, ml: 1 }}
            src={yelpLogo}
          ></Box>
        </Button>
      </Box>
      <ReviewModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={(newReview) => {
          console.log("New Review:", newReview);

          // later: update state or send to backend
        }}
      />
    </Box>
  );
};

export default BusinessPage;
