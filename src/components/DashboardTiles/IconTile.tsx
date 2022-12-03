import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import StorageIcon from "@mui/icons-material/Storage"
import SyncIcon from "@mui/icons-material/Sync"
import Paper from "@mui/material/Paper"

import Typography from "@mui/material/Typography"
import { Icon, makeStyles } from "@mui/material"

interface Props {
  TileContext: string
  TileValue: string
  TileIcon: any
  IconColor?: string
}

export default function IconTile(props: Props) {
  const Icon = props.TileIcon

  return (
    <Box p={"1rem"}>
      <Paper elevation={15}>
        <Card>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              {/* <StorageIcon fontSize="large" color="warning" />
               */}
              <Icon fontSize="large" style={{ color: props.IconColor }} />
              <Stack>
                <Typography variant="h6">{props.TileContext}</Typography>
                <Typography variant="h5">{props.TileValue}</Typography>
              </Stack>
            </Stack>
          </CardContent>
          <Divider />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              // marginLeft: 10,
              padding: 10,
            }}
          >
            <SyncIcon fontSize="small" style={{ color: "grey" }} />
            <Typography variant="body2" color="grey" align="right">
              Updated now
            </Typography>
          </div>
        </Card>
      </Paper>
    </Box>
  )
}
