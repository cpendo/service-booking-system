import React from "react";
import { Card, Typography } from "@mui/material";
import photo from "../../assets/landing-page-pic.jpg"

function LandingPage() {
  return (
    <>
    <img src={photo}/>
      <Typography variant="h2">Find and book services instantly!!</Typography>
      <Typography variant="h4">
        At Service Hub, we connect you to services from the best rated
        professionals.
      </Typography>
    </>
  );
}

export default LandingPage;
