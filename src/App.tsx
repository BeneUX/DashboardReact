import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Container } from "@mui/material"

import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import TablePage from "./pages/TablePage"
import TilesPage from "./pages/TilesPage"
import DatagridPage from "./pages/DatagridPage"
import ChartsPage from "./pages/ChartsPage"

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
          <Route path="/tables" element={<TablePage />} />
          <Route path="/tiles" element={<TilesPage />} />
          <Route path="/charts" element={<ChartsPage />} />
          <Route path="/datagrids" element={<DatagridPage />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
