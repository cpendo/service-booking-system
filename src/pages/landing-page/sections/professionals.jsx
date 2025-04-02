import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Button,
  Container,
  Rating
} from "@mui/material";
import hairstylist from "../../../assets/lashes.jpg";
import warus from "../../../assets/errand.avif";
import shopping from "../../../assets/shopper.avif";

function Professionals() {
  const theme = useTheme();
  const professionals = [
    {
      id: 1,
      name: "Elena Rodriguez",
      title: "Master Hairstylist",
      rating: 5,
      image: hairstylist,
      description:
        "Specializing in custom hair coloring and styling with over 10 years of experience.",
      price: "$60/hour",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Professional Errand Runner",
      rating: 5,
      image: warus,
      description:
        "Fast, reliable errand services for busy professionals. Available 7 days a week.",
      price: "$25/hour",
    },
    {
      id: 3,
      name: "Amelia Chen",
      title: "Personal Shopper",
      rating: 4,
      image: shopping,
      description:
        "Personalized grocery shopping with attention to detail and quality selection.",
      price: "$30/hour",
    },
  ];
  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
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
        Top-Rated Professionals
      </Typography>

      <Grid container spacing={4}>
        {professionals.map((pro) => (
          <Grid item xs={12} sm={6} md={4} key={pro.id}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 2,
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <img
                  src={pro.image}
                  alt={pro.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    bgcolor: theme.palette.primary.main,
                    color: "white",
                    py: 0.5,
                    px: 1.5,
                    fontWeight: "bold",
                  }}
                >
                  {pro.price}
                </Box>
              </Box>

              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {pro.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1.5 }}
                >
                  {pro.title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                  <Rating
                    value={pro.rating}
                    readOnly
                    precision={0.5}
                    size="small"
                  />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    ({pro.rating}.0)
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2.5 }}
                >
                  {pro.description}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    borderRadius: "4px",
                    py: 1.2,
                    fontWeight: "medium",
                    "&:hover": {
                      bgcolor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Professionals;
