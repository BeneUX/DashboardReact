import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Container } from "@mui/material"

import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      {/* <Container maxWidth="xl"> */}
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      {/* </Container> */}
    </>
  )
}

export default App
