import { Box, Button, Card, CardActionArea, CardContent, Chip, Container, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import ServerList from "../components/ServerList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faShare } from "@fortawesome/free-solid-svg-icons";
import { grey } from "@mui/material/colors";

function PersonalSettingsView() {
    return (
      <Container sx={{padding: "3em", height:"100vh"}}>
        <Header/>
        <Card sx={{marginTop: "2em", borderRadius: "25px", height: "calc(100% - 100px)"}}>
          <CardContent sx={{height: "100%"}}>
            <Stack direction="column" spacing={2} height={"calc(100% - 32px)"}>
              <Typography variant="h4">Benutzereinstellungen</Typography>              
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