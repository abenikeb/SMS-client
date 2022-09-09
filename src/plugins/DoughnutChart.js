import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughuntData = {
  labels: ["Red", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgb(56, 195, 139)"],
      borderColor: ["rgba(255, 99, 132, 0.2)", "rgb(56, 195, 139)"],
      borderWidth: 1,
    },
  ],
};
