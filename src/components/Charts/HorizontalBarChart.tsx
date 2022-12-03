import React from "react"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { Bar } from "react-chartjs-2"
import Paper from "@mui/material/Paper"
import { Box } from "@mui/material"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  events: [], // turns out onHover
  indexAxis: "y" as const, // Horizontal Bar Chart
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  scales: {
    y: {
      ticks: {},
      grid: {
        display: false, // y-axis grid off
      },
    },
    x: {
      ticks: { display: false }, // turn off x axis labels
      grid: {
        display: false, // x-axis grid off
      },
    },
  },
  plugins: {
    legend: {
      display: false, // legend off
    },
  },
}

const labels = ["1", "2", "3", "4", "5"]

const UserData = {
  labels,
  datasets: [
    {
      label: "Reviews count",
      data: [1, 2, 5, 4, 10],
      backgroundColor: "#FAAF00",
    },
  ],
}

export default function HorizontalBarChart() {
  return (
    <Box p={"1rem"}>
      <Paper style={{ height: 250 }} elevation={15}>
        <Bar options={options} data={UserData} />
      </Paper>
    </Box>
  )
}
