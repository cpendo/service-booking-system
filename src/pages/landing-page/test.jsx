import React, { useState } from "react";
import errands from "../../assets/errands.png";
import stylist from "../../assets/stylist.png";
import groceries from "../../assets/groceries.png";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  TextField,
  InputAdornment,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Avatar,
  Paper,
  Rating,
  Chip,
  Link,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Menu,
  MenuItem,
  Slide,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import BookOnline from "@mui/icons-material/BookOnline";
import Paid from "@mui/icons-material/Paid";
import ManageAccounts from "@mui/icons-material/ManageAccounts";

import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import hairstylist from "../../assets/lashes.jpg";
import warus from "../../assets/errand.avif";
import shopping from "../../assets/shopper.avif";

// Mock data for testimonials

// Professional data

function ImprovedUI() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/* Hero Section */}

      {/* Services Section */}

      {/* How It Works Section */}

      {/* Professionals Section */}

      {/* Testimonials Section */}

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "white",
          py: 6,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Ready to Get Started?
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}
          >
            Join thousands of satisfied customers who have simplified their
            lives through our services.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                borderRadius: "4px",
                py: 1.5,
                px: 4,
                fontWeight: "medium",
              }}
            >
              Book A Service
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: "4px",
                py: 1.5,
                px: 4,
                fontWeight: "medium",
                borderColor: "white",
                color: "white",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderColor: "white",
                },
              }}
            >
              Become A Provider
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
    </>
  );
}

export default ImprovedUI;
