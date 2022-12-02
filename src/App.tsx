import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Container } from "@mui/material"

import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
