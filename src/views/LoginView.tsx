import { Container, Grid } from "@mui/material";
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
      </Container>
    )
  }

  export default LoginView;