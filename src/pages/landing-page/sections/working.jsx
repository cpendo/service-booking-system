import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import BookOnline from "@mui/icons-material/BookOnline";
import Paid from "@mui/icons-material/Paid";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
function Working() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, padding: "30px" }}>
      <Typography
        variant="h5"
        sx={{ marginBottom: theme.spacing(3), fontWeight: 600 }}
      >
        How it works
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <Card
            sx={{
              height: "100%",
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
              backgroundColor: "#f9f4ef",
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
              <Search sx={{ width: "80px", height: "40px" }} />

              <Typography
                variant="body2"
                sx={{
                  marginTop: theme.spacing(2),
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                1. Search
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            sx={{
              height: "100%",
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
              backgroundColor: "#f9f4ef",
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
              <BookOnline sx={{ width: "80px", height: "40px" }} />

              <Typography
                variant="body2"
                sx={{
                  marginTop: theme.spacing(2),
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                2. Book
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            sx={{
              height: "100%",
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
              backgroundColor: "#f9f4ef",
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
              <Paid sx={{ width: "80px", height: "40px" }} />

              <Typography
                variant="body2"
                sx={{
                  marginTop: theme.spacing(2),
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                3. Pay
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            sx={{
              height: "100%",
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
              backgroundColor: "#f9f4ef",
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
              <ManageAccounts sx={{ width: "80px", height: "40px" }} />

              <Typography
                variant="body2"
                sx={{
                  marginTop: theme.spacing(2),
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                4. Service
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Working;
