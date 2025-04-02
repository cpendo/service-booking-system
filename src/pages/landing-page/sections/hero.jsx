import React from "react";
import { Box, Typography, Container, Slide } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "92vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <Slide
          direction="down"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Find & Book Trusted Services Instantly
          </Typography>
        </Slide>
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1000}
          style={{ transitionDelay: "300ms" }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}
          >
            From home cleaning to personal training, we've got experts for you!
          </Typography>
        </Slide>

        {/* <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "700px",
          mx: "auto",
          p: 2,
          bgcolor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(5px)",
          borderRadius: 2,
        }}
      >
        <TextField
          placeholder="What service do you need?"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "white" }} />
              </InputAdornment>
            ),
            sx: {
              bgcolor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.3)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& input::placeholder": {
                color: "rgba(255, 255, 255, 0.7)",
              },
            },
          }}
        />
        <TextField
          placeholder="Location"
          variant="outlined"
          sx={{
            ml: isMobile ? 0 : 2,
            mt: isMobile ? 2 : 0,
            width: isMobile ? "100%" : "200px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            sx: {
              bgcolor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.3)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& input::placeholder": {
                color: "rgba(255, 255, 255, 0.7)",
              },
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            ml: isMobile ? 0 : 2,
            mt: isMobile ? 2 : 0,
            height: "56px",
            width: isMobile ? "100%" : "auto",
            bgcolor: theme.palette.primary.main,
            "&:hover": {
              bgcolor: theme.palette.primary.dark,
            },
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Find Services
        </Button>
      </Box> */}
      </Container>
    </Box>
  );
}

export default Hero;
