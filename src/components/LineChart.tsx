import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

// Register the necessary components from Chart.js
ChartJS.register(...registerables);

// Define types for chart data
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    tension: number;
  }[];
}

// Define types for chart options
interface ChartOptions {
  responsive: boolean;
  plugins: {
    legend: {
      position: "top";
    };
    title: {
      display: boolean;
      text: string;
    };
  };
}

const LineChart: React.FC = () => {
  // Define the chart data
  const data: ChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Revenue",
        data: [3000, 2000, 4000, 5000, 7000, 6000, 8000],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  // Define the chart options
  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue Overview",
      },
    },
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-md h-full w-full">
      <Line
        data={data}
        options={options}
        width={undefined}
        height={undefined}
      />
    </div>
  );
};

export default LineChart;
