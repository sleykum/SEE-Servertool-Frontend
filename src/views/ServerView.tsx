import { Alert, Box, Button, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, List, ListItem, ListItemText, Modal, Snackbar, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDownload, faPlay, faShare, faStop, faTrash } from "@fortawesome/free-solid-svg-icons";
import { grey } from "@mui/material/colors";
import Avatar from "../components/Avatar";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { dummyServers } from "../exampledata/exampledata";
import Server from "../types/Server";
import ServerStatus from "../types/ServerStatus";
import { AuthContext } from "../contexts/AuthContext";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: "1200px",
  minWidth: "400px",
  bgcolor: 'background.paper',
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

function ServerView() {
    const {axiosInstance} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const [server, setServer] = useState<Server|undefined>(undefined);
    const [showDeleteServerModal, setShowDeleteServerModal] = useState(false);
    const [showLinkCopiedMessage, setShowLinkCopiedMessage] = useState(false);

    useEffect(() => {
      let isApiSubscribed = true;
      const serverID = location.state.serverID; 
      if(serverID && isApiSubscribed){
        axiosInstance.get(`/server/${serverID}`).then(
          (response) => setServer(response.data)
        )  
      }
      return () => {
        isApiSubscribed = false;
      }
    }, [location.state])
    
    if(!server){
      return <CircularProgress/>
    }
    return (
      <Container sx={{padding: "3em", height:"100vh"}}>
        <Snackbar open={showLinkCopiedMessage} autoHideDuration={5000} onClose={() => setShowLinkCopiedMessage(false)}>
          <Alert onClose={() => setShowLinkCopiedMessage(false)} severity="success" sx={{width: "100%", borderRadius: "25px"}}>
            Link in Zwischenablage kopiert.
          </Alert>
        </Snackbar>
        <Modal
          open={showDeleteServerModal}
          onClose={() => setShowDeleteServerModal(false)}
          aria-labelledby="delete-server-modal-title"
          aria-aria-describedby="delete-server-modal-description">
            <Box sx={modalStyle}>
                <Typography id="delete-server-modal-title" variant="h6">
                  Server löschen
                </Typography>
                <Typography id="delete-server-modal-description" sx={{marginTop: "2em"}}>
                  Sind Sie sich sicher, dass Sie den Server <b>{server? server.name : ""}</b> löschen möchten?
                </Typography>
                <Stack justifyContent="end" direction="row" spacing={2} sx={{marginTop: "2em"}}>
                  <Button variant="contained" color="secondary" sx={{borderRadius:"25px"}} onClick={() => setShowDeleteServerModal(false)}>
                    Abbrechen
                  </Button>
                  <Button variant="contained" color="error" sx={{borderRadius:"25px"}} onClick={() => 
                  axiosInstance.delete("/server/delete", {params: {id: server.id}}).then(() => navigate("/", {replace: true}))}>
                    Löschen
                  </Button>
                </Stack>
            </Box>
        </Modal>
        <Header/>
        <Card sx={{marginTop: "2em", borderRadius: "25px", height: "calc(100% - 100px)", overflow: "auto"}}>
          <CardContent sx={{height: "calc(100% - 3em)"}}>
            <Stack direction="column" spacing={2} height={"100%"}>
              <Stack direction="row" sx={{justifyContent: 'space-between'}}>
                <Stack direction="row">
                  <Typography variant="h4"><Box display={"inline"} sx={{"&:hover" : {cursor: "pointer"}}}><FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)}/></Box> {server.name}</Typography>
                </Stack>
                <Stack direction="row">
                  <IconButton 
                        aria-label="start"
                        disabled = {server.status == ServerStatus.Online}
                        onMouseDown={(e) => {e.stopPropagation()}} 
                        onClick={(e) => {e.stopPropagation();
                                        e.preventDefault();
                    }}>
                      <FontAwesomeIcon icon={faPlay}/>
                  </IconButton>
                  <IconButton 
                        aria-label="stop"
                        disabled = {server.status == ServerStatus.Offline}
                        onMouseDown={(e) => {e.stopPropagation()}} 
                        onClick={(e) => {e.stopPropagation();
                                        e.preventDefault();
                    }}>
                      <FontAwesomeIcon icon={faStop}/>
                  </IconButton>
                  <IconButton
                        aria-label="delete"
                        onMouseDown={(e) => {e.stopPropagation()}} 
                        onClick={(e) => {e.stopPropagation();
                                        e.preventDefault();
                                        setShowDeleteServerModal(true);
                    }}>
                      <FontAwesomeIcon icon={faTrash}/>
                  </IconButton>
                  <Stack direction="column" sx={{justifyContent: "center", marginLeft: "1em"}}>
                    {server.status == ServerStatus.Online ? 
                      <Chip color="success" label="Online"/>
                        :
                      <Chip color="error" label="Offline"/>
                    }
                  </Stack>
                </Stack>
              </Stack>
              <Grid container spacing={2} sx={{paddingRight: "32px"}}>
                <Grid item md={3} xs={12}>
                  <Stack direction="column" spacing={1}>
                    <Box width={140} height={140}>
                      <Card sx={{width: "100%", height: "100%"}}>
                        <Avatar width={140} height={140} avatarSeed={server.avatarSeed} avatarColor={server.avatarColor}/>
                      </Card>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Stack direction="column" spacing={1}>
                    <Typography variant="h6">Status</Typography>
                    <Typography>Spieler: {server.connectedPlayers}/{server.maxConnectedPlayers}</Typography>
                    {server.status == ServerStatus.Online ? 
                      <Typography>Online seit: {server.onlineSince.toLocaleDateString()} {server.onlineSince.toLocaleTimeString()}</Typography>
                      : <></>
                    }
                    <Typography>Ping: {server.pingInMS}ms</Typography>
                  </Stack>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Stack direction="column" spacing={1}>
                    <Typography variant="h6">Welt</Typography>
                    {server.loadedScene? <Typography>Geladene Szene: {server.loadedScene}</Typography> : <></>}
                    {server.loadedProject? <Typography>Geladenes Projekt: {server.loadedProject}</Typography> : <></>}
                    {server.lastSaved? <Typography>Zuletzt gespeichert: {server.lastSaved.toLocaleDateString()} {server.lastSaved.toLocaleTimeString()}</Typography>: <></>}
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
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              navigator.clipboard.writeText(`${window.location.origin}/conntectTo?serverIp:${server.ip}&serverPort:${server.port}`);
                              setShowLinkCopiedMessage(true);
                      }}>
                          <FontAwesomeIcon icon={faShare}/>
                          <Typography variant="button">Link teilen</Typography>
                      </IconButton>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
              <Stack direction="row" sx={{justifyContent: 'space-between'}}>
                <Typography variant="h6">Projektdaten: {server.loadedProject}</Typography>
                <IconButton 
                            onMouseDown={(e) => {e.stopPropagation()}} 
                            onClick={(e) => {e.stopPropagation();
                                            e.preventDefault();
                        }}>
                          <FontAwesomeIcon icon={faDownload}/>
                      </IconButton>
              </Stack>
              <Card sx={{borderRadius: "25px", backgroundColor: grey[200], flexGrow: 1, overflow: "auto", minHeight: "100px"}}>
                <CardContent>
                  <List>
                    {
                      server.projectFiles?.map((projectFile) => 
                        <ListItem sx={{backgroundColor: "white", borderRadius:"25px", marginBottom:"1em"}} key={projectFile.id}>
                          <ListItemText> <Typography variant="subtitle2">{projectFile.name}</Typography> </ListItemText>
                        </ListItem>
                      )
                    }
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