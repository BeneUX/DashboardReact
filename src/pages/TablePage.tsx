import { Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"

import AuthorsTable from "../components/Tables/AuthorsTable"
import ProjectsTable from "../components/Tables/ProjectsTable"
export default function TablePage() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} p={2}>
        <Grid item xs={12} mb={"1rem"}>
          <Divider orientation="horizontal" flexItem>
            <Typography variant="h6">Authors Table</Typography>
          </Divider>

          <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
              <AuthorsTable />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={"1rem"}>
          <Divider orientation="horizontal" flexItem>
            <Typography variant="h6">Projects Table</Typography>
          </Divider>

          <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
              <ProjectsTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
