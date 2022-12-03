import React from "react"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { Line } from "react-chartjs-2"
import Paper from "@mui/material/Paper"
import { Box } from "@mui/material"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  // responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Line Chart",
    },
  },
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 4, 7, 2, 4, 9],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [4, 4, 6, 2, 4, 3, 7],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}

export default function LineChart() {
  return (
    <Box p={"1rem"}>
      <Paper style={{ height: "100%" }} elevation={15}>
        <Line height={300} options={options} data={data} />
      </Paper>
    </Box>
  )
}
