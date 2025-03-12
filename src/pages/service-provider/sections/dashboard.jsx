import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import { Box, Paper, Typography } from "@mui/material";
import BarChart from "../charts/bar";
import ServiceTable from "../tables/services-tb";
import DoughnutChart from "../charts/doughnut";
import {
  revenueChartData,
  paymentsChartData,
  bookingsChartData,
} from "../data/dashboard";
import LineChart from "../charts/line";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "oklch(0.929 0.013 255.508)",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
  ...theme.applyStyles("dark", {}),
}));

const Dashboard = () => {
  return (
    <Box sx={{ overflowX: "hidden", p: 3 }}>
      <Grid container spacing={2} sx={{ overflowX: "hidden" }}>
        <Grid size={{ lg: 8, xs: 12 }}>
          <Item sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                marginBottom: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 900 }}>
                Appointments Snapshot
              </Typography>
              <Typography variant="" color="text.secondary">
                Appointments scheduled over the past 6 months
              </Typography>
            </Box>
            <LineChart />
          </Item>
        </Grid>
        <Grid size={{ lg: 4, xs: 12 }}>
          <Item>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 900 }}>
                  Services
                </Typography>
                <Typography variant="" color="text.secondary">
                  Total services offered
                </Typography>
              </Box>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 900 }}>
                5
              </Typography>
            </Box>
            <BarChart />
            <ServiceTable />
          </Item>
        </Grid>

        {/* 2nd row */}
        <Grid size={{ md: 4, xs: 12 }}>
          <Item>
            <Typography
              variant="h5"
              align="left"
              sx={{ fontWeight: 900, marginBottom: "15px" }}
            >
              Reviews Breakdown
            </Typography>
            <Box sx={{ width: "90%", margin: "auto" }}>
              <DoughnutChart chartData={revenueChartData} />
            </Box>
          </Item>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Item>
            <Typography
              variant="h5"
              align="left"
              sx={{ fontWeight: 900, marginBottom: "15px" }}
            >
              Earnings Breakdown
            </Typography>
            <Box sx={{ width: "90%", margin: "auto" }}>
              <DoughnutChart chartData={paymentsChartData} />
            </Box>
          </Item>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Item>
            <Typography
              variant="h5"
              align="left"
              sx={{ fontWeight: 900, marginBottom: "15px" }}
            >
              Appointments Breakdown
            </Typography>
            <Box sx={{ width: "90%", margin: "auto" }}>
              <DoughnutChart chartData={bookingsChartData} />
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
