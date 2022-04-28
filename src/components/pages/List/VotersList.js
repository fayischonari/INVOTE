import React , {useEffect , useState} from 'react'
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
        label:"Voter Name",
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
        id:"semester",
        label:"Year",
        alignRight:false,
        type:"text",
    },

];

export default function VotersList() {
    const [votersList , setVotersList]=useState();
    // console.log(candidateList);
    useEffect(() => {
        const getVoter = async () => {
          try {
            // get candidates
            const voter = await invoteService.getAllVoters();
            setVotersList(voter.data);
            console.log(voter.data);
          } catch (err) {
            console.error(err?.response?.data?.message);
          }
        };
        getVoter();
      }, []);
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
                {votersList && <DataTable TABLE_HEAD={TABLE_HEAD} TABLE_DATA={votersList}/>}

            </Container>
        </Page>
    )
};
