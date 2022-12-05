import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import SyncIcon from "@mui/icons-material/Sync"
import Paper from "@mui/material/Paper"

import Typography from "@mui/material/Typography"

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
