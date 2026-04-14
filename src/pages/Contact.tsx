import Hero from "../components/Hero";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { lightYellow, green } from "../styles/colors";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form);
    // later: send to backend / email service
  };

  return (
    <Box>
      {/* HERO */}
      <Hero
        heroImg={
          "https://images.unsplash.com/photo-1573879409095-e47e5759ed0f?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        bgPos={"bottom"}
        contents={
          <Typography
            sx={{
              fontSize: "3rem",
              color: lightYellow,
              fontFamily: "Alata",
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>
        }
      />

      {/* CONTENT */}
      <Container maxWidth="sm">
        <Typography
          sx={{
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
            mt: 4,
            mb: 4,
            px: 3,
            py: 2,
            backgroundColor: "rgba(0,0,0,0.04)",
            borderRadius: 3,
          }}
        >
          Have feedback, questions, or want to suggest a business? We’d love to
          hear from you.
        </Typography>

        {/* FORM */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Name"
            fullWidth
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          {/* TOPIC SELECT */}
          <TextField
            select
            label="What can we help you with?"
            fullWidth
            value={form.topic}
            onChange={(e) => handleChange("topic", e.target.value)}
          >
            <MenuItem value="feedback">General Feedback</MenuItem>
            <MenuItem value="business">Suggest a Business</MenuItem>
            <MenuItem value="report">Report a Concern</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>

          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: green,
              borderRadius: 5,
              textTransform: "none",
              fontSize: "1.1rem",
              fontFamily: "Alata",
              py: 1.5,
            }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
