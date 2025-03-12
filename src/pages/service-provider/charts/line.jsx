import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

const LineChart = () => {
  return (
    <div style={{ width: "100%", flexGrow: 1, minHeight: "250px" }}>
      <Line
        data={{
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "Appointments",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: true,
              borderColor: "#1976d2",
              borderWidth: 4,
              backgroundColor: "rgba(25, 118, 210, 0.7)",
              tension: 0.45,
              pointRadius: 1
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default LineChart;
