import { Box, Container, Grid, Link, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";

function LoginView() {
    return (
      <Container>
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{minHeight: '100vh'}}
        >
            <Grid item xs={4}>
                <LoginForm/>
            </Grid>
        </Grid>
        <Box sx={{position:"fixed", right: 0, bottom: 0}}>
          <Typography variant="caption">Developed by Thorsten Friedewold and <Link href="http://leykum.net">Simon Leykum</Link></Typography>
        </Box>
      </Container>
    )
  }

  export default LoginView;