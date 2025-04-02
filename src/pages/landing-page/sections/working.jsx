import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Container,
  Paper
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import BookOnline from "@mui/icons-material/BookOnline";
import Paid from "@mui/icons-material/Paid";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
function Working() {
  const theme = useTheme();
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
          How It Works
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              icon: <Search fontSize="large" color="primary" />,
              title: "Search",
              description:
                "Browse through our selection of trusted professionals",
              step: 1,
            },
            {
              icon: <BookOnline fontSize="large" color="primary" />,
              title: "Book",
              description: "Select the time and date that works for you",
              step: 2,
            },
            {
              icon: <Paid fontSize="large" color="primary" />,
              title: "Pay",
              description: "Secure payment only after service completion",
              step: 3,
            },
            {
              icon: <ManageAccounts fontSize="large" color="primary" />,
              title: "Service",
              description: "Sit back and enjoy professional service",
              step: 4,
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  borderRadius: 2,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "40px",
                    height: "40px",
                    bgcolor: theme.palette.primary.main,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    zIndex: 1,
                  }}
                >
                  {item.step}
                </Box>

                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: theme.spacing(4),
                    pt: 5,
                    textAlign: "center",
                    minHeight: "220px",
                  }}
                >
                  <Box sx={{ fontSize: "3rem", mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Working;
