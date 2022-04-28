import React, { useState , useEffect } from 'react'
import Page from "../../utils/Page";
import {
    Stack,
    Container,
    Typography,
    Grid,
} from "@mui/material";
import DataTable from "../../utils/DataTable";
import invoteService from '../../../services/invoteService';

const TABLE_HEAD=[
    {
        id:"name",
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
        id:"semester",
        label:"Semester",
        alignRight:false,
        type:"text",
    },

];

export default function CandidateList() {
    const [candidateList , setCandidateList]=useState();
    // console.log(candidateList);
    useEffect(() => {
        const getCandidate = async () => {
          try {
            // get candidates
            const candidate = await invoteService.getCandidate();
            setCandidateList(candidate.data);
            console.log(candidate.data);
          } catch (err) {
            console.error(err?.response?.data?.message);
          }
        };
        getCandidate();
      }, []);
    return (
        <Page title="candidate List">
            <Container>
                <Stack
                    direction="row"
                    alignItems="left"
                    justifyContent="space-between"
                    mb={2}
                >
                    <Typography variant="h5" gutterBottom>
                        Candidate List
                    </Typography>
                </Stack>
                    {candidateList && <DataTable TABLE_HEAD={TABLE_HEAD} TABLE_DATA={candidateList}/>}
            </Container>
        </Page>

    )
};
