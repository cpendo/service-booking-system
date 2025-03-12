import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);

import { servicesData as data } from "../data/dashboard";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: data.map((data) => data.label),
          datasets: [
            {
              label: "Clients",
              data: data.map((data) => data.value),
              backgroundColor: "rgba(25, 118, 210, 0.7)",
              barThickness: 40
            },
          ],
        }}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: { display: false,  }, // Remove gridlines
                ticks: { display: false }, // Hide axis labels
              },
              y: {
                grid: { display: true,  },
                ticks: { display: false },
              }
            },
        }}
      />
    </div>
  );
};

export default BarChart;
