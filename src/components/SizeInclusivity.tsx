import {
  Box,
  Typography,
  LinearProgress,
  Collapse,
  Button,
} from "@mui/material";
import { useState } from "react";
import type { inclusivityType } from "../types/types";
import { darkGreen, green, lightYellow } from "../styles/colors";

const sizeMap: { label: string; key: keyof inclusivityType; info: string }[] = [
  {
    label: "Infini-fat",
    key: "infiniFriendly",
    info: "Beyond standard clothing size ranges",
  },
  {
    label: "Superfat",
    key: "superFriendly",
    info: "Approximately US sizes 32–40+",
  },
  {
    label: "Large fat",
    key: "largeFriendly",
    info: "Approximately US sizes 24–32 (around 3X–5X)",
  },
  {
    label: "Mid fat",
    key: "midFriendly",
    info: "Approximately US sizes 18–24 (around 2X–3X)",
  },
  {
    label: "Small fat",
    key: "smallFriendly",
    info: "Below roughly a US women’s size 18 (about 1X–2X)",
  },
];

interface SizeInclusivityProps {
  data?: inclusivityType;
}
const SizeInclusivity = ({ data }: SizeInclusivityProps) => {
  const [expanded, setExpanded] = useState(false);

  const average =
    sizeMap.reduce((acc, { key }) => acc + (data?.[key] || 0), 0) /
    sizeMap.length;

  return (
    <Box sx={{ mt: 2 }}>
      {/* SUMMARY */}
      <Typography sx={{ fontWeight: "bold", mb: 1 }}>
        Size Inclusivity: {Math.round(average)}%
      </Typography>

      <Button
        onClick={() => setExpanded(!expanded)}
        sx={{
          textTransform: "none",
          p: 0,
          color: lightYellow,
          fontSize: "1rem",
          borderRadius: "20px",
          paddingX: "20px",
          paddingY: "6px",
          fontWeight: 600,
          backgroundColor: darkGreen,
        }}
      >
        {expanded ? "Hide breakdown" : "View breakdown"}
      </Button>

      {/* EXPANDABLE */}
      <Collapse in={expanded}>
        <Box sx={{ mt: 2 }}>
          {sizeMap.map(({ label, key, info }) => {
            const value = data?.[key] || 0;

            return (
              <Box key={key} sx={{ mb: 2 }}>
                <Typography sx={{ fontSize: "0.9rem" }}>{label}</Typography>{" "}
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    opacity: 0.7,
                    mt: 0.5,
                    fontFamily: "Alata",
                  }}
                >
                  {info}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={value}
                    sx={{
                      flex: 1,
                      height: 8,
                      borderRadius: 5,
                      "& .MuiLinearProgress-bar1Determinate": {
                        backgroundColor:
                          value >= 75
                            ? green
                            : value >= 50
                              ? "#fbc02d"
                              : "#e57373",
                      },
                    }}
                  />
                  <Typography sx={{ width: 40 }}>{value}%</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Collapse>
    </Box>
  );
};

export default SizeInclusivity;
