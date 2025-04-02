import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  Divider,
  Button,
  Link
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#263238", color: "#f5f5f5", pt: 6, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              ServiceHub
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.7 }}>
              Connecting people with quality services since 2023. Our mission is
              to make everyday tasks easier.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <IconButton size="small" sx={{ color: "#f5f5f5" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "#f5f5f5" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "#f5f5f5" }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Services
            </Typography>
            <List sx={{ p: 0 }}>
              {[
                "Grocery Shopping",
                "Hairstylists",
                "Errand Runners",
                "Home Cleaning",
                "Personal Training",
              ].map((item) => (
                <ListItem key={item} sx={{ p: 0, mb: 1 }}>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{
                      opacity: 0.7,
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    {item}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Quick Links
            </Typography>
            <List sx={{ p: 0 }}>
              {[
                "About Us",
                "How It Works",
                "FAQs",
                "Terms of Service",
                "Privacy Policy",
              ].map((item) => (
                <ListItem key={item} sx={{ p: 0, mb: 1 }}>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{ opacity: 0.7, "&:hover": { opacity: 1 } }}
                  >
                    {item}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.7 }}>
              Email: support@servicehub.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.7 }}>
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.7 }}>
              Address: 123 Service St., City, ST 12345
            </Typography>

            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "#f5f5f5",
                borderColor: "#f5f5f5",
                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Contact Support
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 4, mb: 3, bgcolor: "rgba(255,255,255,0.1)" }} />

        <Typography variant="body2" sx={{ opacity: 0.7, textAlign: "center" }}>
          © {new Date().getFullYear()} ServiceHub. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
