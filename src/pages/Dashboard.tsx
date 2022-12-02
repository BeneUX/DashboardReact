import Grid from "@mui/material/Grid"
import IconTile from "../components/DashboardTiles/IconTile"

// Icon Imports
import StorageIcon from "@mui/icons-material/Storage"
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck"
import TwitterIcon from "@mui/icons-material/Twitter"
import DiscFullIcon from "@mui/icons-material/DiscFull"
import BarChart from "../components/Charts/HorizontalBarChart"
import PieChart from "../components/Charts/PieChart"
import LineChart from "../components/Charts/LineChart"
import VerticalBarChart from "../components/Charts/VerticalBarChart"
import MultitypeChart from "../components/Charts/MultitypeChart"
import DatagridNormal from "../components/Datagrids/DatagridNormal"
export default function Dashboard() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <IconTile TileContext="Capacity" TileValue="950 GB" TileIcon={StorageIcon} IconColor="green" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconTile TileContext="Occupied" TileValue="105 GB" TileIcon={DiscFullIcon} IconColor="red" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconTile TileContext="Network" TileValue="233 MB/s" TileIcon={NetworkCheckIcon} IconColor="orange" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconTile TileContext="Followers" TileValue="+432" TileIcon={TwitterIcon} IconColor="00ACEE" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <VerticalBarChart />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LineChart />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <MultitypeChart />
        </Grid>
      </Grid>
    </>
  )
}
