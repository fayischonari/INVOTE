import React, { useState } from "react";
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

import invoteService from "../../../services/invoteService";

export default function CandidateAdd() {
  const [post,setPost] = useState();
  const [Image,setImgUrl] = useState();
  const [name,setName] = useState();
  const [department,setDepartment] = useState();
  const [semester,setSemester] = useState();
  const [admNo,setAdmnNumber] = useState();
  const [backlogs,setBackLog] = useState();

  const handlePostChange = (event) => setPost(event.target.value);
  const handleImgUrlChange = (event) => setImgUrl(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleDepartmentChange = (event) => setDepartment(event.target.value);
  const handleSemChange = (event) => setSemester(event.target.value);
  const handleAdmnNumberChange = (event) => setAdmnNumber(event.target.value);
  const handleBlockLogChange = (event) => setBackLog(event.target.value);

  const handleAddDetails = async () => {
    try{
      const candidateDetails = {
        post,
        Image,
        name,
        department,
        semester,
        admNo,
        // backlogs
      }
      console.log(candidateDetails);
      const res = await invoteService.addCandidate(candidateDetails);
      console.log(res);
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
              onChange={handlePostChange}
          >
            <MenuItem value="Chairman">Chairman</MenuItem>
            <MenuItem value="Editor">Editor</MenuItem>
            <MenuItem value="UUC">UUC</MenuItem>
            {/* <MenuItem value={40}>AssociationSecretery</MenuItem> */}
          </Select>
        </FormControl>
        <TextField
          sx={{ margin: "10px",width:"100%"}}
          id="outlined-basic"
          label="Image"
          onChange={handleImgUrlChange}
          value={Image}
          variant="outlined"
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="Enter candidate's Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="Department"
          variant="outlined"
          value={department}
          onChange={handleDepartmentChange}
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="Semester"
          variant="outlined"
          value={semester}
          onChange={handleSemChange}
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="Addmission No"
          variant="outlined"
          value={admNo}
          onChange={handleAdmnNumberChange}
        />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">If any backlogs?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="No"
            name="radio-buttons-group"
            onChange={(e)=>e.target.value}
          >
            <FormControlLabel
              value="No"
              control={<Radio />}
              label="No"
              // onChange={handleBlockLogChange}
            />
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          
          </RadioGroup>
        </FormControl>
        <Grid>
        <Button variant="outlined" onClick={handleAddDetails}>Submit</Button>
        </Grid>
      </Container>
    </Page>
  );
}
