import React,{useState} from "react";
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
  Button,

} from "@mui/material";
import invoteService from "../../../services/invoteService";

export default function VotterAdd() {
  const[name,setVotterName]=useState();
  const[department,setVotterDepartment]=useState();
  const[semester,setVotterSemester]=useState();
  const[admNo,setVotterAdmNo]=useState();
  const[phoneNo,setVotterPhoneNo]=useState();
  const[email,setVotterEmail]=useState();

  const handleVotterNameChange = (event) => setVotterName(event.target.value);
  const handleVotterDepartmentChange = (event) => setVotterDepartment(event.target.value);
  const handleVotterSemesterChange = (event) => setVotterSemester(event.target.value);
  const handleVotterAdmNoChange = (event) => setVotterAdmNo(event.target.value);
  const handleVotterPhoneNoChange = (event) => setVotterPhoneNo(event.target.value);
  const handleVotterEmailChange = (event) => setVotterEmail(event.target.value);

  
  const handleAddVotterDetails = async () => {
    try{
      const votterDetails = {
        name,
        department,
        semester,
        admNo,
        phoneNo,
        email,
      }

      const res = await invoteService.addVoter(votterDetails);
      console.log(votterDetails);
    }catch(err){
      console.log(err.message);
    }
  }

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
            Add Votter
          </Typography>
          <Grid>
            <h1>welcome</h1>
          </Grid>
        </Stack>
        <TextField
          sx={{ margin: "10px",width:"100%"}}
          id="outlined-basic"
          label="votter's name"
          onChange={handleVotterNameChange}
          value={name}
          variant="outlined"
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="Department"
          onChange={handleVotterDepartmentChange}
          value={department}
          variant="outlined"
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="Semester"
          onChange={handleVotterSemesterChange}
          value={semester}
          variant="outlined"
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="admNo"
          onChange={handleVotterAdmNoChange}
          value={admNo}
          variant="outlined"
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="phoneNo"
          onChange={handleVotterPhoneNoChange}
          value={phoneNo}
          variant="outlined"
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="email"
          onChange={handleVotterEmailChange}
          value={email}
          variant="outlined"
        />
        {/* <FormControl>
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
        </FormControl> */}
        <Grid>
        <Button variant="outlined"
         onClick={handleAddVotterDetails}>Submit</Button>

        </Grid>
      </Container>
    </Page>
  );
}

