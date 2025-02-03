import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import errands from "../../../assets/errands.png";
import stylist from "../../../assets/stylist.png";
import groceries from "../../../assets/groceries.png";

function Service() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, padding: "30px", backgroundColor: "#f9f4ef" }}>
      <Typography
        variant="h5"
        sx={{ marginBottom: theme.spacing(3), fontWeight: 600 }}
      >
        Popular Services
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "100%",
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: theme.spacing(3),
              }}
            >
              <img
                src={groceries}
                alt="Grocery Shopping"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginTop: theme.spacing(2),
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                Grocery Shopping
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "100%",
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: theme.spacing(3),
              }}
            >
              <img
                src={stylist}
                alt="Hairstylists"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginTop: theme.spacing(2),
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                Hairstylists
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "100%",
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: theme.spacing(3),
              }}
            >
              <img
                src={errands}
                alt="Errand Runners"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginTop: theme.spacing(2),
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                Errand Runners
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Service;
