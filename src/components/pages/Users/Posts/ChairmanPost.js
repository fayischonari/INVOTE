import React from 'react'
import UsersCard from '../../Home/UsersCard'
import PostsConfig from "./PostsConfig";
import { Container, Box, Typography, Grid } from "@mui/material";
import Page from '../../../utils/Page';


export default function ChairmanPost() {
  return (
    <Page title={"Home Page"} sx={{mt:6}}>
      <Container maxWidth="xl">
        <Grid container spacing={3} rowSpacing={1} direction="row">
     {PostsConfig.map((type) => (
            <Grid item xs={12} sm={6} md={3}>
              <UsersCard type={type} />
            </Grid>
          ))}
          </Grid>
      </Container>
    </Page>
  )
}
