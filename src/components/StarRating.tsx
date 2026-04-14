import Rating from "@mui/material/Rating";
import { lavender } from "../styles/colors";

export default function StarRating({ value }: { value: number }) {
  return (
    <Rating sx={{ color: lavender }} value={value} precision={0.5} readOnly />
  );
}
