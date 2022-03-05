import React from 'react'
import Page from "../../utils/Page";
import {
    Stack,
    Container,
    Typography,
    Grid,
} from "@mui/material";


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
            </Container>
        </Page>
    )
};