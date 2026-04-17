import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Rating,
} from "@mui/material";
import { useState } from "react";
import type { Review, BodySizeCategory, RatingBreakdown } from "../types/types";
import { darkGreen, lavender } from "../styles/colors";
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
        <label htmlFor="author">Name</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        {/* Body Size */}
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "14px" }}
        >
          <label htmlFor="bodySize" style={{ marginRight: "8px" }}>
            Body Size
          </label>
          <FatergoriesTooltip />
        </div>

        <select
          id="bodySize"
          value={bodySize}
          onChange={(e) => setBodySize(e.target.value as BodySizeCategory)}
        >
          <option value="">Select</option>
          <option value="smallfat">Small Fat</option>
          <option value="midfat">Mid Fat</option>
          <option value="superfat">Superfat</option>
          <option value="infinifat">Infinifat</option>
        </select>

        {/* Overall Rating */}
        <fieldset style={{ marginTop: "14px", border: "none", padding: 0 }}>
          <legend style={{ fontWeight: 500, marginBottom: "6px" }}>
            Overall Rating
          </legend>

          <Rating
            value={rating}
            onChange={(_, newValue) => setRating(newValue)}
            sx={{ color: lavender }}
          />
        </fieldset>

        {/* Breakdown Ratings */}
        {[
          { label: "Seating", key: "seating" },
          { label: "Bathrooms", key: "bathrooms" },
          { label: "Accessibility", key: "accessibility" },
          { label: "Staff Treatment", key: "staffTreatment" },
        ].map(({ label, key }) => (
          <fieldset
            key={key}
            style={{ marginTop: "14px", border: "none", padding: 0 }}
          >
            <legend style={{ fontWeight: 500, marginBottom: "6px" }}>
              {label}
            </legend>

            <Rating
              value={breakdown[key as keyof RatingBreakdown]}
              onChange={(_, value) => handleBreakdownChange(key, value)}
              sx={{ color: lavender }}
            />
          </fieldset>
        ))}

        <br />
        {/* Comment */}
        <label htmlFor="comment" style={{ marginTop: "14px" }}>
          Your Experience
        </label>
        <textarea
          id="comment"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        {" "}
        <Button onClick={onClose} sx={{ color: darkGreen }}>
          {" "}
          Cancel{" "}
        </Button>{" "}
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ backgroundColor: darkGreen }}
        >
          {" "}
          Submit{" "}
        </Button>{" "}
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;
