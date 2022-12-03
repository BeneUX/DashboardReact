import { Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import DatagridNormal from "../components/Datagrids/DatagridNormal"
export default function DatagridPage() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} p={2}>
        <Grid item xs={12}>
          <Divider orientation="horizontal" flexItem>
            <Typography variant="h6">Datagrid (in Progress)</Typography>
          </Divider>
          <Grid container justifyContent={"center"} mt={2}>
            <Grid item xs={12}>
              <DatagridNormal />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
