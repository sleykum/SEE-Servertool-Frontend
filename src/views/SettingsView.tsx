import { Box, Button, Card, CardActionArea, CardContent, Chip, Container, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import ServerList from "../components/ServerList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faDownload, faShare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { grey } from "@mui/material/colors";

function SettingsView() {
    return (
      <Container sx={{padding: "3em", height:"100vh"}}>
        <Header/>
        <Card sx={{marginTop: "2em", borderRadius: "25px", height: "calc(100% - 100px)"}}>
          <CardContent sx={{height: "100%"}}>
            <Stack direction="column" spacing={2} height={"calc(100% - 32px)"}>
              <Typography variant="h4">Einstellungen</Typography>              
              <Typography variant="h6">Organisationseinstellungen:</Typography>
              <TextField label="Name" variant="standard"/>
              <Stack justifyContent="end" direction="row" spacing={2}>
                <Button variant="contained" sx={{borderRadius:"25px"}}>
                  Speichern
                </Button>
              </Stack>
              <Typography variant="h6">Benutzerverwaltung:</Typography>
              <Card sx={{borderRadius: "25px", backgroundColor: grey[200], flexGrow: 1, overflow: "auto"}}>
                <CardContent>
                  <List>
                    <ListItem sx={{backgroundColor: "white", borderRadius:"25px"}}
                    secondaryAction={
                      <IconButton>
                        <FontAwesomeIcon icon={faCog}/>
                      </IconButton>
                    }>
                      <ListItemText> 
                        <Typography variant="subtitle2">benutzer1</Typography> 
                      </ListItemText>
                    </ListItem>
                    <ListItem sx={{backgroundColor: "white", borderRadius:"25px", marginTop:"1em"}}
                    secondaryAction={
                      <IconButton>
                        <FontAwesomeIcon icon={faCog}/>
                      </IconButton>
                    }>
                      <ListItemText> 
                        <Typography variant="subtitle2">benutzer1</Typography> 
                      </ListItemText>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
              <Stack justifyContent="end" direction="row" spacing={2}>
                <Button variant="contained" sx={{borderRadius:"25px"}}>
                    Benutzer hinzufügen
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    )
  }

  export default SettingsView;