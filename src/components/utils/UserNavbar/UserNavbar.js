import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./UserNavbarElements";
import { Outlet } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import UsersCard from "../../pages/Home/UsersCard";
import PostsConfig from "../../pages/Users/Posts/PostsConfig";

export default function UserNavbar() {
  return (
    <>
      <Typography>INVOTE</Typography>
        {/* <Nav>
          <NavLogo to="/user/landing">InVote</NavLogo>
          <Bars />

          <NavMenu>
            <NavLink to="/user/landing" activestyle>
              Home
            </NavLink>
            <NavBtn>
              <NavBtnLink to="/">Logout</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </Nav> */}
        <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Cast your vote</Typography>
        </Box>
        <Grid container spacing={3} rowSpacing={1} direction="row">
          {PostsConfig.map((type) => (
            <Grid item xs={12} sm={6} md={3}>
              <UsersCard  post={type.to} type={type} />
            </Grid>
          ))}
        </Grid>
      </Container>

    </>
  );
}
