export const servicesData = [
  { label: "Cleaning", value: 5 },
  { label: "Shopping", value: 20 },
  { label: "Styling", value: 25 },
  { label: "Make-up", value: 30 },
  { label: "Sales", value: 30 },
];

const revenueData = [
  { stars: "1 star", users: 4 },
  { stars: "2 stars", users: 2 },
  { stars: "3 stars", users: 8 },
  { stars: "4 stars", users: 4 },
  { stars: "5 stars", users: 2 },
];

const bookingsData = [
  { label: "cancelled", value: 5 },
  { label: "pending", value: 5 },
  { label: "completed", value: 20 },
];

export const revenueChartData = {
  labels: revenueData.map((data) => data.stars),
  datasets: [
    {
      label: "Clients",
      data: revenueData.map((data) => data.users),
      backgroundColor: ["#ff4545", "#ffa534", "#fff220", "#1976d2", "#81c784"],
      borderWidth: 0,
    },
  ],
};

export const paymentsChartData = {
  labels: ["Earnings", "Refunds"],
  datasets: [
    {
      label: "Clients",
      data: [50000, 5000],
      backgroundColor: ["#1976d2", "#ff4545"],
      borderWidth: 0,
    },
  ],
};

export const bookingsChartData = {
  labels: bookingsData.map((data) => data.label),
  datasets: [
    {
      label: "Appointments",
      data: bookingsData.map((data) => data.value),
      backgroundColor: ["#ff4545", "#ffa534", "#1976d2"],
      borderWidth: 0,
    },
  ],
};

