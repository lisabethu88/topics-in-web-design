import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { darkGray, lightYellow } from "../styles/colors";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import CommentIcon from "@mui/icons-material/Comment";
import type { businessImgType, Review } from "../types/types";
interface BusinessCardProps {
  img: businessImgType;
  name: string;
  rating: number;
  location: string;
  numReviews: number;
  recentReview: Review;
}
export default function BusinessCard({
  img,
  name,
  rating,
  location,
  numReviews,
  recentReview,
}: BusinessCardProps) {
  return (
    <Link to={`/categories/restaurants-and-bars/${name}`} id="card-link">
      <Card
        elevation={0}
        sx={{
          bgcolor: lightYellow,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          my: 2,
          borderRadius: 5,
        }}
      >
        <CardMedia
          sx={{ height: 140, width: 140, borderRadius: 5 }}
          image={img.img}
          title={img.alt} // alt
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "Alata" }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: darkGray, fontFamily: "Alata" }}
          >
            <StarRating value={rating}></StarRating>
            {rating}{" "}
            <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>
              ({numReviews} reviews)
            </span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: darkGray,
              alignItems: "center",
              display: "flex",
              fontFamily: "Alata",
            }}
          >
            <LocationPinIcon sx={{ color: darkGray, mr: 1 }}></LocationPinIcon>{" "}
            {location}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              alignItems: "center",
              display: "flex",
              fontFamily: "Alata",
            }}
          >
            <CommentIcon sx={{ color: darkGray, mr: 1 }}></CommentIcon> "
            {recentReview.comment}"
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
