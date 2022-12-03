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
import PersonAddIcon from "@mui/icons-material/PersonAdd"

import Typography from "@mui/material/Typography"
import { Avatar, Chip, Icon, makeStyles, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

interface Props {
  TileContext: string
  TileValue: string
  TileIcon: any
  IconBackgroundColor?: string
}

function createData(name: string, roleFunction: string, departement: string, status: boolean, employed: string, action: string) {
  return { name, roleFunction, departement, status, employed, action }
}

const rows = [
  createData("John Michael", "Manager", "Organization", true, "25/02/2022", "Edit"),
  createData("Alex Liras", "Programator", "Developer", false, "25/02/2022", "Edit"),
  createData("Michael Livas", "Executive", "Projects", true, "25/02/2022", "Edit"),
  createData("Richard Gran", "Programator", "Developer", true, "25/02/2022", "Edit"),
  // createData("Miriam Eric", "Manager", "Executive", false, "25/02/2022", "Edit"),
]

export default function AuthorsTable() {
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
            Authors Table
          </Typography>
        </Box>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead style={{ opacity: 0.7, textTransform: "uppercase" }}>
                <TableRow>
                  <TableCell style={{ fontSize: "0.7rem" }}>Author</TableCell>
                  <TableCell style={{ fontSize: "0.7rem" }}>Function</TableCell>
                  <TableCell style={{ fontSize: "0.7rem" }}>Status</TableCell>
                  <TableCell style={{ fontSize: "0.7rem" }}>Employed</TableCell>
                  <TableCell style={{ fontSize: "0.7rem" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      <Stack direction={"row"}>
                        <Avatar alt="Placeholder" />
                        <Box ml={1.5}>
                          <Typography style={{ lineHeight: 1.25 }}>{row.name}</Typography>
                          <Typography variant="caption" style={{ fontWeight: 300, lineHeight: 1.25 }}>
                            {row.name + "@placeholder.com"}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography variant="button" style={{ textTransform: "none", lineHeight: 1.25 }}>
                        {row.roleFunction}
                      </Typography>
                      <br />
                      <Typography variant="caption" style={{ lineHeight: 1.25 }}>
                        {row.departement}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {row.status === true ? (
                        <Chip size="small" style={{ borderRadius: 4, color: "white" }} color="success" label="Online" />
                      ) : (
                        <Chip size="small" style={{ borderRadius: 4 }} color="error" label="Offline" />
                      )}
                    </TableCell>
                    <TableCell style={{ opacity: 0.7 }}>{row.employed}</TableCell>
                    <TableCell>
                      <Button style={{ display: "inline-block", padding: 0, minHeight: 0, minWidth: 0, opacity: 0.9 }} size="small" color="info">
                        {row.action}
                      </Button>
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
