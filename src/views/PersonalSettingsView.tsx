import {Box, Button, Card, CardContent, Container, Stack, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

function PersonalSettingsView() {
    const navigate = useNavigate();

    return (
      <Container sx={{padding: "3em", height:"100vh"}}>
        <Header/>
        <Card sx={{marginTop: "2em", borderRadius: "25px", height: "calc(100% - 100px)", overflow: "auto"}}>
          <CardContent sx={{height: "calc(100% - 3em)"}}>
            <Stack direction="column" spacing={2} height={"100%"}>
              <Typography variant="h4"><Box display={"inline"} sx={{"&:hover" : {cursor: "pointer"}}}><FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)}/></Box> Benutzereinstellungen</Typography>              
              <Typography variant="h6">Benutzername ändern:</Typography>
              <TextField label="Neuer Benutzername" variant="standard"/>
              <TextField label="Aktuelles Passwort" variant="standard"/>
              <Stack justifyContent="end" direction="row" spacing={2}>
                <Button variant="contained" sx={{borderRadius:"25px"}}>
                    Speichern
                </Button>
              </Stack>
              <Typography variant="h6">Passwort ändern:</Typography>
              <TextField label="Neues Passwort" variant="standard"/>
              <TextField label="Neues Passwort wiederholen" variant="standard"/>
              <TextField label="Aktuelles Passwort" variant="standard"/>
              <Stack justifyContent="end" direction="row" spacing={2}>
                <Button variant="contained" sx={{borderRadius:"25px"}}>
                    Speichern
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    )
  }

  export default PersonalSettingsView;