import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  Paper,
  Avatar,
  Rating,
  useTheme,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Testimonials() {
  const theme = useTheme();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const testimonials = [
    {
      id: 1,
      name: "Jane Cooper",
      role: "Hair Salon Customer",
      comment:
        "The hairstylist was amazing! I got exactly the look I was hoping for and the booking process was so simple.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Robert Wilson",
      role: "Errand Service User",
      comment:
        "Saved me so much time! The errand runner was professional and completed everything on my list quickly.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Grocery Delivery Customer",
      comment:
        "Fresh produce delivered right to my door. The shopper even texted me about substitutions. Great service!",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];
  return (
    <Box sx={{ py: 8, bgcolor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            mb: 5,
            fontWeight: 600,
            textAlign: "center",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: -10,
              left: "50%",
              width: "50px",
              height: "4px",
              bgcolor: theme.palette.primary.main,
              transform: "translateX(-50%)",
            },
          }}
        >
          What Our Customers Say
        </Typography>

        <Box sx={{ position: "relative", maxWidth: "800px", mx: "auto" }}>
          <IconButton
            sx={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "white",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              "&:hover": { bgcolor: "#f0f0f0" },
              display: { xs: "none", md: "flex" },
            }}
            onClick={prevTestimonial}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              textAlign: "center",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Avatar
              src={testimonials[testimonialIndex].avatar}
              sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
            />
            <Rating
              value={testimonials[testimonialIndex].rating}
              readOnly
              sx={{ mb: 2 }}
            />
            <Typography variant="body1" sx={{ mb: 3, fontStyle: "italic" }}>
              "{testimonials[testimonialIndex].comment}"
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {testimonials[testimonialIndex].name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {testimonials[testimonialIndex].role}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton onClick={prevTestimonial}>
                <KeyboardArrowLeftIcon />
              </IconButton>
              <IconButton onClick={nextTestimonial}>
                <KeyboardArrowRightIcon />
              </IconButton>
            </Box>
          </Paper>

          <IconButton
            sx={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "white",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              "&:hover": { bgcolor: "#f0f0f0" },
              display: { xs: "none", md: "flex" },
            }}
            onClick={nextTestimonial}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          {testimonials.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: 12,
                height: 12,
                bgcolor:
                  idx === testimonialIndex
                    ? theme.palette.primary.main
                    : "#e0e0e0",
                borderRadius: "50%",
                mx: 0.5,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() => setTestimonialIndex(idx)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Testimonials;
