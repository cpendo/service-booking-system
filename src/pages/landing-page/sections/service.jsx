import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Container,
  // Button
} from "@mui/material";
import errands from "../../../assets/errands.png";
import stylist from "../../../assets/stylist.png";
import groceries from "../../../assets/groceries.png";

function Service() {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
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
        Popular Services
      </Typography>

      <Grid container spacing={4}>
        {[
          {
            name: "Grocery Shopping",
            icon: groceries,
            description: "Custom shopping with same-day delivery options",
          },
          {
            name: "Hairstylists",
            icon: stylist,
            description: "Professional cuts, coloring, and styling",
          },
          {
            name: "Errand Runners",
            icon: errands,
            description: "Quick and reliable help for your daily tasks",
          },
        ].map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 2,
                transition: "all 0.3s ease",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "180px",
                  bgcolor: "#f8f9fa",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    bgcolor: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={service.icon}
                    alt={service.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
              <CardContent sx={{ textAlign: "center", p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {service.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {service.description}
                </Typography>
                {/* <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    borderRadius: "20px",
                    "&:hover": {
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                    },
                  }}
                >
                  Learn More
                </Button> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Service;
