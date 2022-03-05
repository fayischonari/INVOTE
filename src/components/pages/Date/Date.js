import React from "react";
import Page from "../../utils/Page";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import Button from '@material-ui/core/Button';
import { Stack, Container, Typography, Grid, TextField,Button } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";

export default function ViewPersonalDtls() {
  const [startingDate, setStartingDate] = React.useState(new Date());
  const [endingDate, setEndingDate] = React.useState(new Date());

  return (
    <Page title="Department Data">
      <Container>
        <Stack
          direction="row"
          alignItems="left"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Set Your Election date
          </Typography>
          <Grid>
            <h1>welcome EMEA</h1>
          </Grid>
        </Stack>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Starting Date"
            value={startingDate}
            onChange={(newValue) => {
              setStartingDate(newValue);
            }}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Ending Date"
            value={endingDate}
            onChange={(newValue) => {
              setEndingDate(newValue);
            }}
          />
        </LocalizationProvider>
        <Grid>
        <Button variant="outlined">Submit</Button>
        </Grid>
      </Container>
    </Page>
  );
}
