import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  MenuItem,
  Rating,
} from "@mui/material";
import { useState } from "react";
import type { Review, BodySizeCategory, RatingBreakdown } from "../types/types";
import { green, lavender } from "../styles/colors";
import FatergoriesTooltip from "./FatergoriesTooltip";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (review: Review) => void;
}

const ReviewModal = ({ open, onClose, onSubmit }: Props) => {
  const [author, setAuthor] = useState("");
  const [bodySize, setBodySize] = useState<BodySizeCategory | "">("");
  const [rating, setRating] = useState<number | null>(0);
  const [comment, setComment] = useState("");

  const [breakdown, setBreakdown] = useState({
    seating: 0,
    bathrooms: 0,
    accessibility: 0,
    staffTreatment: 0,
  });

  const handleSubmit = () => {
    const newReview: Review = {
      id: Date.now().toString(),
      author,
      rating: rating || 0,
      comment,
      bodySize: bodySize || undefined,
      ratings: breakdown,
      createdAt: new Date().toISOString(),
    };

    onSubmit(newReview);
    onClose();
  };

  const handleBreakdownChange = (key: string, value: number | null) => {
    setBreakdown((prev) => ({
      ...prev,
      [key]: value || 0,
    }));
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontFamily: "Alata" }}>Write a Review</DialogTitle>

      <DialogContent>
        {/* Name */}
        <Typography sx={{ mr: 1 }}>Name</Typography>
        <TextField
          fullWidth
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        {/* Body Size */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography sx={{ mr: 1 }}>Body Size</Typography>
          <FatergoriesTooltip />
        </Box>
        <TextField
          select
          fullWidth
          label={"Select"}
          value={bodySize}
          onChange={(e) => setBodySize(e.target.value as BodySizeCategory)}
        >
          <MenuItem value="smallfat">Small Fat</MenuItem>
          <MenuItem value="midfat">Mid Fat</MenuItem>
          <MenuItem value="superfat">Superfat</MenuItem>
          <MenuItem value="infinifat">Infinifat</MenuItem>
        </TextField>
        {/* Overall Rating */}
        <Box sx={{ mt: 3 }}>
          <Typography>Overall Rating</Typography>
          <Rating
            value={rating}
            onChange={(_, newValue) => setRating(newValue)}
            sx={{ color: lavender }}
          />
        </Box>

        {/* Breakdown Ratings */}
        {[
          { label: "Seating", key: "seating" },
          { label: "Bathrooms", key: "bathrooms" },
          { label: "Accessibility", key: "accessibility" },
          { label: "Staff Treatment", key: "staffTreatment" },
        ].map(({ label, key }) => (
          <Box key={key} sx={{ mt: 2 }}>
            <Typography>{label}</Typography>
            <Rating
              value={breakdown[key as keyof RatingBreakdown]}
              onChange={(_, value) => handleBreakdownChange(key, value)}
              sx={{ color: lavender }}
            />
          </Box>
        ))}

        {/* Comment */}
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Your Experience"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{ mt: 3 }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} sx={{ color: green }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ backgroundColor: green }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;
