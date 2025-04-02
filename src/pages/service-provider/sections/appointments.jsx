import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import { Paper, Box, Typography } from "@mui/material";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "oklch(0.929 0.013 255.508)",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
  ...theme.applyStyles("dark", {}),
}));

const Appointments = () => {
  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: "20px" }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          Appointments
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Latest data for the last 7 days
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "5px",
                  backgroundColor: "rgba(25, 118, 210, 1)",
                  borderRadius: "8px",
                }}
              >
                <EventAvailableIcon sx={{ color: "white", fontSize: "30px" }} />
              </div>

              <Typography variant="h5">Completed</Typography>
              <Typography variant="body2">Appointments</Typography>
              
            </Box>
            <Box >
              <Typography
                variant="h2"
                fontWeight={900}
                sx={{ color: "rgba(25, 118, 210, 1)" }}
              >
                20
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Item></Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Item></Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Item></Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Appointments;
