import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"

import Paper from "@mui/material/Paper"
import PersonAddIcon from "@mui/icons-material/PersonAdd"

import Typography from "@mui/material/Typography"
import { Icon, makeStyles, Stack } from "@mui/material"

interface Props {
  TileContext: string
  TileValue: string
  TileIcon: any
  IconBackgroundColor?: string
}

export default function AdvancedTile(props: Props) {
  const Icon = props.TileIcon
  return (
    <Box mb={"12px"} mt={"12px"} style={{ borderRadius: "0.75rem" }}>
      <Paper elevation={1}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Box
            style={{
              background: props.IconBackgroundColor || "linear-gradient(114deg, #0093E9 59%, #80D0C7 100%)",
              borderRadius: "0.75rem",
              // boxShadow: "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(233 30 98 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem",
            }}
            p={2}
            m={2}
            width={"4rem"}
            height={"4rem"}
            marginTop={"-24px"}
          >
            <Icon style={{ display: "flex", marginLeft: "auto", marginRight: "auto", color: "white" }} />
          </Box>

          <Box m={2} p={2}>
            <Typography lineHeight={1.5} variant="button" textTransform={"none"} style={{ opacity: "80%" }}>
              {props.TileContext}
            </Typography>
            <Typography variant="h4" fontSize={"1.5rem"} fontWeight={700}>
              {props.TileValue}
            </Typography>
          </Box>
        </Stack>

        <Divider />
        <Box>
          <Typography p={2} style={{ opacity: "60%" }}>
            Just updated
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}
