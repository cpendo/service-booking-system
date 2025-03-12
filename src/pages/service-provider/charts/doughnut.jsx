import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(...registerables);

import PropTypes from "prop-types";

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 10,
      },
    },
  },
};

const DoughnutChart = ({ chartData }) => {
  return (
    <div>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

DoughnutChart.propTypes = {
  chartData: PropTypes.object.isRequired,
  // chartOptions: PropTypes.object.isRequired
};

export default DoughnutChart;
