import { Button, Card, CardContent, CardMedia, TextField } from "@mui/material";
import  seeLogo from "../img/see-logo.png";
import { useNavigate } from "react-router";

function LoginForm() {
    const navigate = useNavigate();

    return (
      <Card sx={{borderRadius: "25px"}}>
        <CardMedia
            sx={{objectFit: "contain", paddingBottom: "0.5em", paddingTop: "0.5em"}}
            component="img"
            height="64"
            image={seeLogo}
            title="SEE Logo"
        />
        <CardContent>
            <TextField label="Benutzername" type="text" sx={{width: "100%", marginBottom:"1em"}} InputProps={{sx: {borderRadius: "15px"}}} variant="standard"/>
            <TextField label="Passwort" type="password" sx={{width: "100%", marginBottom:"1em"}} InputProps={{sx: {borderRadius: "15px"}}} variant="standard"/>
            <Button variant="contained" sx={{width:"100%", borderRadius: "15px", marginTop: "1em"}} onClick={() => navigate("/home")}>Anmelden</Button>
        </CardContent>
      </Card>
    )
  }

  export default LoginForm;