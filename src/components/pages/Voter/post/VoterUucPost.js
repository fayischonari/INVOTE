import React,{useState } from 'react'
import { Container, Box, Typography, Grid,Button } from "@mui/material";
import Page from '../../../utils/Page';
import { Link as RouterLink } from "react-router-dom";
import DataTable from "../../../utils/DataTable";

// material icons
import AddIcon from "@mui/icons-material/Add";

// table header cell config
const TABLE_HEAD = [
  {
    id: "item",
    label: "Name",
    alignRight: false,
    type: "stack",
    // baseUrl: "/app/student/view",
  },
  { id: "icon", label: "icon", alignRight: false, type: "text" },
  { id: "vote", label: "Vote",alignRight: false, type: "radio" },
];

const TABLE_DATA = [
  {
    id: "134",
    item: "KK Shailaja",
    icon: "CPIM",
  },
  {
    id: "34",
    item: "K sudhakaran",
    icon: "Congress",
  },
  {
    id: "343433ojnn",
    item: "Kumaran",
    icon: "IUML",
  },
  {
    id: "eonkn2434",
    item: "Thanka",
    icon: "CPIM",
  },
];

export default function VoterUucPost() {

  const [vote, setVote] = useState(null);
  const handleVote = (polledVote)=>(e) =>{
    console.log(polledVote);
    setVote(polledVote)};
  const TABLE_HEAD = [
    {
      id: "item",
      label: "Name",
      alignRight: false,
      type: "stack",

      // baseUrl: "/app/student/view",
    },
    { id: "icon", label: "icon", alignRight: false, type: "text" },
    { id: "vote", label: "Vote",alignRight: false, type: "button",},
  ]
  return (
    <Page title={"Home Page"} sx={{mt:6}}>
      <Container maxWidth="xl">
        <Grid container spacing={3} rowSpacing={1} direction="row">
     
        <Typography variant="h4" gutterBottom>
           UUC: Candidate List
          </Typography>
    
        <DataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={TABLE_HEAD} />
          </Grid>
      </Container>
    </Page>
  )
}
