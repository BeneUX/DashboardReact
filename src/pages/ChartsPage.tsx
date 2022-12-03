import { Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import HorizontalBarChart from "../components/Charts/HorizontalBarChart"

import LineChart from "../components/Charts/LineChart"
import MultitypeChart from "../components/Charts/MultitypeChart"
import PieChart from "../components/Charts/PieChart"
import VerticalBarChart from "../components/Charts/VerticalBarChart"

export default function ChartsPage() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} p={2}>
        <Grid item xs={12} mb={"1rem"}>
          <Divider orientation="horizontal" flexItem>
            <Typography variant="h6">Line Chart</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12}>
          <LineChart />
        </Grid>
        <Grid item xs={12} mb={"1rem"} mt={"1rem"}>
          <Divider orientation="horizontal" flexItem>
            <Typography variant="h6">Multitype Chart</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12}>
          <MultitypeChart />
        </Grid>

        <Grid item xs={12} mb={"1rem"} mt={"1rem"}>
          <Divider orientation="horizontal" flexItem>
            <Typography variant="h6">Vertical Bar Chart</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12}>
          <VerticalBarChart />
        </Grid>
        <Grid item xs={12} mb={"1rem"} mt={"1rem"}>
          <Divider orientation="horizontal" flexItem>
            <Typography variant="h6">Horizontal Bar Chart eg. Reviews</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12}>
          <HorizontalBarChart />
        </Grid>
        <Grid item xs={12} mb={"1rem"} mt={"1rem"}>
          <Divider orientation="horizontal" flexItem>
            <Typography variant="h6">Pie Chart</Typography>
          </Divider>
        </Grid>
        <Grid container justifyContent={"center"}>
          <PieChart />
        </Grid>
      </Grid>
    </>
  )
}
