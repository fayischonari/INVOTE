import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Card, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PasswordField from "./utils/PasswordField";
import TextInput from "./utils/TextInput";
import SubmitButton from "./utils/SubmitButton";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export default function UserLogin() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => console.log(username, password);

  return (
    <Container>
      <ContentStyle>
        <Card sx={{ p: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography textAlign="center" variant="h3" gutterBottom>
              InVote
            </Typography>
          </Box>
          <Stack spacing={2}>
            <TextInput
              label="UserName"
              type="username"
              value={username}
              setValue={setUserName}
            />
            <PasswordField
              label="Password"
              value={password}
              setValue={setPassword}
            />

            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <Link
                component={RouterLink}
                variant="subtitle2"
                to="/user/forgot"
              >
                Forgot password
              </Link>

              <Link
                component={RouterLink}
                variant="subtitle2"
                to="/user/register"
              >
                Don’t have an account? Register
              </Link>
            </Stack>
            <SubmitButton
              disabled={!username || !password ? true : false}
              name="Login"
              onClick={handleClick}
              to="/user/landing"

            />
          </Stack>
        </Card>
      </ContentStyle>
    </Container>
  );
}
