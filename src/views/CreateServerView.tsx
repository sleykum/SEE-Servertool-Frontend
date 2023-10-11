import { Box, Button, Card, CardActionArea, CardContent, Chip, Container, Grid, Icon, IconButton, Stack, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import ServerList from "../components/ServerList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faShare } from "@fortawesome/free-solid-svg-icons";
import { grey } from "@mui/material/colors";

function CreateServerView() {
    return (
      <Container sx={{padding: "3em", height:"100vh"}}>
        <Header/>
        <Card sx={{marginTop: "2em", borderRadius: "25px", height: "calc(100% - 100px)"}}>
          <CardContent sx={{height: "100%"}}>
            <Stack direction="column" spacing={2} height={"calc(100% - 32px)"}>
              <Typography variant="h4">Gameserver erstellen</Typography>
              <Stack direction="row" spacing={2}>
                <Stack direction="column" flexGrow={1}>
                  <Typography variant="h6">Gameservereinstellungen:</Typography>
                  <TextField label="Name" variant="standard"/>
                  <TextField label="Serverpasswort" variant="standard"/>
                  <TextField label="Maximale Spieleranzahl" variant="standard"/>
                </Stack>
                <Stack direction="column" >
                  <Typography variant="h6">Server-Bild:</Typography>
                  <Box width={140} height={140} paddingTop="1.5em">
                        <Card sx={{width: "100%", height: "100%"}}>
                        </Card>
                      </Box>
                </Stack>
                
              </Stack>
              <Typography variant="h6">Projekteinstellungen:</Typography>
              <TextField label="Projektname" variant="standard"/>
              <Card sx={{borderRadius: "25px", backgroundColor: grey[200], flexGrow: 1}}>
                <CardActionArea sx={{ height: "100%"}}>
                  <CardContent sx={{ height: "100%"}}>
                    <Box width={"100%"} height={"100%"}>
                      <Typography>
                        Hier klicken um Dateien hochzuladen
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card> 
              <Stack justifyContent="end" direction="row" spacing={2}>
                <Button variant="contained" color="secondary" sx={{borderRadius:"25px"}}>
                    Abbrechen
                </Button>
                <Button variant="contained" sx={{borderRadius:"25px"}}>
                    Erstellen
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    )
  }

  export default CreateServerView;