import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import avatar1 from "./../../assets/avatar1.jpg"
import avatar2 from "./../../assets/avatar2.jpg"
import Paper from "@mui/material/Paper"
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress"

import PersonAddIcon from "@mui/icons-material/PersonAdd"

import Typography from "@mui/material/Typography"
import { Avatar, Chip, Icon, makeStyles, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

interface Props {
  TileContext: string
  TileValue: string
  TileIcon: any
  IconBackgroundColor?: string
}

function createData(project: string, budget: number, status: number, completion: number) {
  return { project, budget, status, completion }
}

const rows = [
  createData("Project 1", 13500, 1, 45),
  createData("Project 2", 25000, 0, 20),
  createData("Project 3", 12500, 2, 100),
  createData("Project 4", 2500, 0, 35),
  createData("Project 5", 90000, 2, 100),
]

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ minWidth: 40 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  )
}

export default function ProjectsTable() {
  return (
    <Box p={"1rem"} mt={"1.5rem"}>
      <Paper elevation={1} style={{ display: "flex", position: "relative", flexDirection: "column" }}>
        <Box
          mt={"-24px"}
          ml={"16px"}
          mr={"16px"}
          style={{
            background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
            borderRadius: "0.5rem",
            padding: "24px 16px",
          }}
        >
          <Typography color={"white"} variant="h6">
            Projects Table
          </Typography>
        </Box>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead style={{ opacity: 0.7, textTransform: "uppercase" }}>
                <TableRow>
                  <TableCell style={{ fontSize: "0.7rem" }}>Project</TableCell>
                  <TableCell style={{ fontSize: "0.7rem" }}>Budget</TableCell>
                  <TableCell style={{ fontSize: "0.7rem" }}>Status</TableCell>
                  <TableCell style={{ fontSize: "0.7rem" }}>Completion</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.project} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      <Typography style={{ lineHeight: 1.25 }}>{row.project}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="button" style={{ textTransform: "none", lineHeight: 1.25 }}>
                        {"$" + row.budget}
                      </Typography>
                      <br />
                    </TableCell>
                    <TableCell>
                      {row.status === 0 ? (
                        <Chip size="small" style={{ borderRadius: 4, color: "white", minWidth: "70px" }} color="error" label="canceled" />
                      ) : row.status === 1 ? (
                        <Chip size="small" style={{ borderRadius: 4, color: "white", minWidth: "70px" }} color="warning" label="working" />
                      ) : (
                        <Chip size="small" style={{ borderRadius: 4, color: "white", minWidth: "70px" }} color="success" label="done" />
                      )}
                    </TableCell>
                    <TableCell>
                      {row.completion < 30 ? (
                        <LinearProgressWithLabel color="error" value={row.completion} />
                      ) : row.completion > 30 && row.completion < 70 ? (
                        <LinearProgressWithLabel color="warning" value={row.completion} />
                      ) : row.completion > 70 ? (
                        <LinearProgressWithLabel color="success" value={row.completion} />
                      ) : (
                        <LinearProgressWithLabel value={row.completion} />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </Box>
  )
}
