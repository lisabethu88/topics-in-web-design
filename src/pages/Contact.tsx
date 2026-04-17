import Hero from "../components/Hero";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { h1Style } from "../styles/styles";

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
          <Typography variant="h1" sx={h1Style}>
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
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          {/* NAME */}
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          {/* EMAIL */}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          {/* TOPIC */}
          <label htmlFor="topic">What can we help you with?</label>
          <select
            id="topic"
            name="topic"
            value={form.topic}
            onChange={(e) => handleChange("topic", e.target.value)}
          >
            <option value="feedback">General Feedback</option>
            <option value="business">Suggest a Business</option>
            <option value="report">Report a Concern</option>
            <option value="other">Other</option>
          </select>

          {/* MESSAGE */}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />

          {/* BUTTON */}
          <button type="submit">Send Message</button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
