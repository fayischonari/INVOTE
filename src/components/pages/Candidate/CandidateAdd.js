import React from "react";
import Page from "../../utils/Page";
import {
  Stack,
  Container,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  TextField,
  RadioGroup,
  FormLabel,
  Radio,
  Button,
} from "@mui/material";

export default function CandidateAdd() {
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
            Add Candidate
          </Typography>
          <Grid>
            <h1>welcome</h1>
          </Grid>
        </Stack>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select the post</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="Select the post"
            //   onChange={handleChange}
          >
            <MenuItem value={10}>Chairman</MenuItem>
            <MenuItem value={20}>Editor</MenuItem>
            <MenuItem value={30}>UUC</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ margin: "10px",width:"100%"}}
          id="outlined-basic"
          label="Image"
          
          variant="outlined"
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="Enter candidate's Name"
          variant="outlined"
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="Department"
          variant="outlined"
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="Semester"
          variant="outlined"
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="Addmission No"
          variant="outlined"
        />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">If any backlogs?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="No"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="No"
              control={<Radio />}
              label="No"
            />
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          
          </RadioGroup>
        </FormControl>
        <Grid>
        <Button variant="outlined">Submit</Button>
        </Grid>
      </Container>
    </Page>
  );
}
