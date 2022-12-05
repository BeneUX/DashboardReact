import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { Stack } from "@mui/material"

interface Props {
  TileContext: string
  TileValue: string
  TileIcon: any
  IconBackgroundColor?: string
}

export default function AdvancedTile(props: Props) {
  const Icon = props.TileIcon
  return (
    <Box p={"1rem"} style={{ borderRadius: "0.75rem" }}>
      <Paper elevation={1}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Box
            style={{
              background: props.IconBackgroundColor || "linear-gradient(114deg, #0093E9 59%, #80D0C7 100%)",
              borderRadius: "0.75rem",
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

        <Divider variant="middle" />
        <Box>
          <Typography p={2} style={{ opacity: "60%" }}>
            Just updated
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}
