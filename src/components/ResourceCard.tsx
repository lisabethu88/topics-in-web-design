import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { darkGray, darkGreen, lightYellow } from "../styles/colors";
import type { Resource } from "../types/types";


interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: lightYellow,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        my: 2,
        borderRadius: 5,
        p: 2,
      }}
    >
      {/* IMAGE */}
      <CardMedia
        component="img"
        image={resource.image}
        alt={resource.alt}
        sx={{
          height: 140,
          width: 140,
          borderRadius: 3,
          objectFit: "cover",
        }}
      />

      {/* CONTENT */}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h3" sx={{ fontFamily: "Alata", mb: 1 }}>
          {resource.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: darkGray, mb: 2, fontFamily: "Alata" }}
        >
          {resource.description}
        </Typography>

        {/* LINK BUTTON */}
        <Box>
          <Button
            variant="contained"
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "none",
              borderRadius: 5,
              fontFamily: "Alata",
              backgroundColor: darkGreen,
            }}
          >
            Learn More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
