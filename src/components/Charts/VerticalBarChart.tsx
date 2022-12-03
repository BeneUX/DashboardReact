import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { Bar } from "react-chartjs-2"
import Paper from "@mui/material/Paper"
import { Box } from "@mui/material"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  // responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Vertical Bar Chart",
    },
  },
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 23, 3, 53, 5, 235, 34],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [1, 23, 3, 53, 5, 235, 34],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}

export default function VerticalBarChart() {
  return (
    <Box p={"1rem"}>
      <Paper style={{ height: "100%" }} elevation={15}>
        <Bar height={300} options={options} data={data} />
      </Paper>
    </Box>
  )
}
