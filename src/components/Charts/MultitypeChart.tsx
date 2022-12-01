import React from "react"
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js"
import { Chart } from "react-chartjs-2"
import { Paper } from "@mui/material"

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController)

const labels = ["January", "February", "March", "April", "May", "June", "July"]

export const options = {
  maintainAspectRatio: false,
  // responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Multitype Chart",
    },
  },
}

export const data = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: [244, 353, 333, 456, 534, 215, 353],
    },
    {
      type: "bar" as const,
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: [23, 44, 436, 322, 53, 325, 973],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar" as const,
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: [32, 25, 124, 145, 543, 63, 325],
    },
  ],
}

export default function MultitypeChart() {
  return (
    <Paper style={{ height: "100%" }} elevation={15}>
      <Chart height={300} options={options} type="bar" data={data} />
    </Paper>
  )
}
