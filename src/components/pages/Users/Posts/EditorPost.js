import React from 'react'
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
  { id: "vote", label: "Vote",alignRight: false, type: "text" },
];

const TABLE_DATA = [
  {
    id: "134",
    item: "M Swaraj",
    icon: "CPIM",
    vote:"234",
  },
  {
    id: "34",
    item: "Shafi Parambil",
    icon: "Congress",
    vote:"132",
  
  },
  {
    id: "343433ojnn",
    item: "PK Firos",
    icon: "IUML",
    vote:"434",
  },
  {
    id: "eonkn2434",
    item: "Zaman",
    icon: "CPIM",
    vote:"544",
  },
];

export default function EditorPost() {
  return (
    <Page title={"Home Page"} sx={{mt:6}}>
      <Container maxWidth="xl">
        <Grid container spacing={3} rowSpacing={1} direction="row">
     
        <Typography variant="h4" gutterBottom>
            Candidate List
          </Typography>
    
        <DataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={TABLE_HEAD} />
          </Grid>
      </Container>
    </Page>
  )
}
