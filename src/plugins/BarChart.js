import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Customer vs Satage",
    },
  },
};

const labels = ["January", "February", "March", "April"];

export const data = {
  labels,
  datasets: [
    {
      label: "Stage",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      data: [1, 5, 6, 7],
      backgroundColor: "rgb(56, 195, 139)",
    },
  ],
};
