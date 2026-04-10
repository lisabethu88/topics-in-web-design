import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { lightYellow } from "../styles/colors";
import { Link } from "react-router-dom";

interface BusinessCardProps {
  img: string;
  name: string;
  title: string;
  rating: number;
  location: string;
  numReviews: number;
  recentReview: string;
}
export default function BusinessCard({
  img,
  name,
  title,
  rating,
  location,
  numReviews,
  recentReview,
}: BusinessCardProps) {
  return (
    <Link to={`/categories/restaurants-and-bars/${name}`}>
      <Card
        elevation={0}
        sx={{
          bgcolor: lightYellow,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          my: 5,
          textDecoration: "none",
        }}
      >
        <CardMedia
          sx={{ height: 140, width: 140, borderRadius: 5 }}
          image={img}
          title={title} // alt
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {rating}
            {numReviews}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {location}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {recentReview}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
