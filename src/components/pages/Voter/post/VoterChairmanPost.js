import React, { useEffect, useState } from 'react'
import { Container, Box, Typography, Grid, Button, responsiveFontSizes } from "@mui/material";
import Page from '../../../utils/Page';
import { Link as RouterLink } from "react-router-dom";
import DataTable from "../../../utils/DataTable";

// material icons
import AddIcon from "@mui/icons-material/Add";
import invoteService from '../../../../services/invoteService';

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
  { id: "vote", label: "Vote", alignRight: false, type: "button" ,},
];

const TABLE_DATA = [
  {
    id: "134",
    item: "Pinarayi Vijayan",
    icon: "CPIM",
  },
  {
    id: "34",
    item: "Ummen Chandy",
    icon: "Congress",
  },
  {
    id: "343433ojnn",
    item: "PK Kunjalikkutty",
    icon: "IUML",
  },
  {
    id: "eonkn2434",
    item: "KT Jaleel",
    icon: "CPIM",
  },
];

export default function VoterChairmanPost() {
  const [vote, setVote] = useState(null);
  const [posts ,setPosts] = useState([])

  useEffect(()=>{
    const getPosts = async()=>{
      try {
        const response = await invoteService.getCandidate();
        console.log(response)
        setPosts(response.data)
      } catch (err) {
        
      }
    }
    getPosts()
  },[])
  

  const handleVote = (polledVote) => (e) => {
    console.log(polledVote);
    setVote(polledVote)
  };
  const TABLE_HEAD = [
    {
      id: "item",
      label: "Name",
      alignRight: false,
      type: "stack",

      // baseUrl: "/app/student/view",
    },
    { id: "icon", label: "icon", alignRight: false, type: "text" },
    {
      id: "vote", label: "Vote", alignRight: false, type: "radio", handleRadioChange: handleVote,
      radioState: vote
    },
  ]
  return (
    <Page title={"Home Page"} sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Chairman:Candidate list
      </Typography>
      <Container >
        <Grid container spacing={3} rowSpacing={1} direction="row">
          <DataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={posts} />
        </Grid>
        <Grid>
          <Button>Vote</Button>
        </Grid>
      </Container>
    </Page>
  )
}
