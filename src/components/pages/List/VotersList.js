import React from 'react'
import Page from "../../utils/Page";
import {
    Stack,
    Container,
    Typography,
    Grid,
} from "@mui/material";

import DataTable from "../../utils/DataTable";

const TABLE_HEAD=[
    {
        id:"candidateName",
        label:"Candidate Name",
        alignRight:false,
        type:"text",
    },
    {
        id:"department",
        label:"Department Name",
        alignRight:false,
        type:"text",
    },
    {
        id:"post",
        label:"Post",
        alignRight:false,
        type:"text",
    },
    {
        id:"year",
        label:"Year",
        alignRight:false,
        type:"text",
    },

];

const TABLE_DATA =[
    {
        id:"candidateName",
        candidateName:"Aseel",
        department:"microsoft",
        post:"Pentester",
        year:"fdsf",
    },
    {
        id:"candidateName",
        candidateName:"Aseel",
        department:"microsoft",
        post:"Pentester",
        year:"fdsf",
    },
    {
        id:"candidateName",
        candidateName:"Aseel",
        department:"microsoft",
        post:"Pentester",
        year:"fdsf",
    },
    {
        id:"candidateName",
        candidateName:"Aseel",
        department:"microsoft",
        post:"Pentester",
        year:"fdsf",
    },
]



export default function VotersList() {
    return (
        <Page title="candidatelist">
            <Container>
                <Stack
                    direction="row"
                    alignItems="left"
                    justifyContent="space-between"
                    mb={2}
                >
                    <Typography variant="h5" gutterBottom>
                        Voter's List
                    </Typography>
                    <Grid>
                        <h1>welcome</h1>
                    </Grid>
                </Stack>
                <DataTable TABLE_HEAD={TABLE_HEAD} TABLE_DATA={TABLE_DATA}/>

            </Container>
        </Page>
    )
};
