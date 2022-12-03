import Grid from "@mui/material/Grid"
import IconTile from "../components/DashboardTiles/IconTile"
import StorageIcon from "@mui/icons-material/Storage"
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck"
import TwitterIcon from "@mui/icons-material/Twitter"
import DiscFullIcon from "@mui/icons-material/DiscFull"
import AdvancedTile from "../components/DashboardTiles/AdvancedTile"

import { Divider, Typography } from "@mui/material"
export default function TilesPage() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} p={2}>
        <Grid item xs={12} mb={"1rem"}>
          <Divider orientation="horizontal" flexItem>
            <Typography variant="h6">Advanced Tile</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AdvancedTile
            TileContext="Capacity"
            TileValue="950 GB"
            TileIcon={StorageIcon}
            IconBackgroundColor={"linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AdvancedTile TileContext="Occupied" TileValue="105 GB" TileIcon={DiscFullIcon} IconBackgroundColor={"purple"} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AdvancedTile TileContext="Network" TileValue="233 MB/s" TileIcon={NetworkCheckIcon} IconBackgroundColor={"orange"} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AdvancedTile TileContext="Followers" TileIcon={TwitterIcon} TileValue="+91" IconBackgroundColor="#00acee" />
        </Grid>

        <Grid item xs={12}>
          <Divider orientation="horizontal" flexItem>
            <Typography variant="h6">Icon Tile</Typography>
          </Divider>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <IconTile
            TileContext="Capacity"
            TileValue="950 GB"
            TileIcon={StorageIcon}
            IconColor={"linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconTile TileContext="Occupied" TileValue="105 GB" TileIcon={DiscFullIcon} IconColor={"purple"} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconTile TileContext="Network" TileValue="233 MB/s" TileIcon={NetworkCheckIcon} IconColor={"orange"} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconTile TileContext="Followers" TileIcon={TwitterIcon} TileValue="+91" IconColor="#00acee" />
        </Grid>
      </Grid>
    </>
  )
}
