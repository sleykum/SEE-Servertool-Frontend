import { Box, Button, Card, CardActionArea, CardContent, Chip, Container, Grid, IconButton, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import ServerList from "../components/ServerList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPause, faPenToSquare, faPlay, faRotate, faShare, faStop } from "@fortawesome/free-solid-svg-icons";
import { blueGrey, grey } from "@mui/material/colors";

function ServerView() {
    return (
      <Container sx={{padding: "3em", height:"100vh"}}>
        <Header/>
        <Card sx={{marginTop: "2em", borderRadius: "25px", height: "calc(100% - 100px)"}}>
          <CardContent sx={{height: "100%"}}>
            <Stack direction="column" spacing={2} height={"calc(100% - 32px)"}>
              <Stack direction="row" sx={{justifyContent: 'space-between'}}>
                <Stack direction="row">
                  <Typography variant="h4">Gameserver#01</Typography>
                  <IconButton><FontAwesomeIcon icon={faPenToSquare}/></IconButton>
                </Stack>
                <Stack direction="row">
                  <IconButton 
                        aria-label="start"
                        disabled
                        onMouseDown={(e) => {e.stopPropagation()}} 
                        onClick={(e) => {e.stopPropagation();
                                        e.preventDefault();
                    }}>
                      <FontAwesomeIcon icon={faPlay}/>
                  </IconButton>
                  <IconButton 
                        aria-label="stop"
                        onMouseDown={(e) => {e.stopPropagation()}} 
                        onClick={(e) => {e.stopPropagation();
                                        e.preventDefault();
                    }}>
                      <FontAwesomeIcon icon={faStop}/>
                  </IconButton>
                  <IconButton
                        aria-label="reload"
                        onMouseDown={(e) => {e.stopPropagation()}} 
                        onClick={(e) => {e.stopPropagation();
                                        e.preventDefault();
                    }}>
                      <FontAwesomeIcon icon={faRotate}/>
                  </IconButton>
                  <Stack direction="column" sx={{justifyContent: "center", marginLeft: "1em"}}>
                    <Chip color="success" label="Online"/>
                  </Stack>
                </Stack>
              </Stack>
              <Grid container spacing={2} sx={{paddingRight: "32px"}}>
                <Grid item md={3} xs={12}>
                  <Stack direction="column" spacing={1}>
                    <Box width={140} height={140}>
                      <Card sx={{width: "100%", height: "100%"}}>
                        <CardActionArea>
                          
                        </CardActionArea>
                      </Card>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Stack direction="column" spacing={1}>
                    <Typography variant="h6">Status</Typography>
                    <Typography>Spieler: 0/10</Typography>
                    <Typography>Online seit: 10m</Typography>
                    <Typography>Ping: 30ms</Typography>
                  </Stack>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Stack direction="column" spacing={1}>
                    <Typography variant="h6">Welt</Typography>
                    <Typography>Geladene Szene: Beispielszene</Typography>
                    <Typography>Geladenes Projekt: Beispielprojekt</Typography>
                    <Typography>Zuletzt gespeichert: Vor 30 Sekunden</Typography>
                  </Stack>
                </Grid>
                <Grid item md={2} textAlign="end" display="flex" justifyContent="end" alignContent="end">
                  <Stack direction="column" justifyContent="center">
                    <Box display="flex">
                      <IconButton 
                            aria-label="Link teilen" 
                            size="large" 
                            sx={{display: "flex", flexDirection: "column"}} 
                            onMouseDown={(e) => {e.stopPropagation()}} 
                            onClick={(e) => {e.stopPropagation();
                                            e.preventDefault();
                        }}>
                          <FontAwesomeIcon icon={faShare}/>
                          <Typography variant="button">Link teilen</Typography>
                      </IconButton>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
              <Stack direction="row" sx={{justifyContent: 'space-between'}}>
                <Typography variant="h6">Projektdaten: Beispielprojekt</Typography>
                <IconButton 
                            onMouseDown={(e) => {e.stopPropagation()}} 
                            onClick={(e) => {e.stopPropagation();
                                            e.preventDefault();
                        }}>
                          <FontAwesomeIcon icon={faDownload}/>
                      </IconButton>
              </Stack>
              <Card sx={{borderRadius: "25px", backgroundColor: grey[200], flexGrow: 1, overflow: "auto"}}>
                <CardContent>
                  <List>
                    <ListItem sx={{backgroundColor: "white", borderRadius:"25px"}}>
                      <ListItemText> <Typography variant="subtitle2">test.gxl</Typography> </ListItemText>
                    </ListItem>
                    <ListItem sx={{backgroundColor: "white", borderRadius:"25px", marginTop:"1em"}}>
                      <ListItemText> <Typography variant="subtitle2">test.csv</Typography> </ListItemText>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    )
  }

  export default ServerView;