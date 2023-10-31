import {Alert, Box, Card, CardActionArea, CardContent, Chip, Grid, IconButton, Snackbar, Stack, Typography} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";
import Avatar from "./Avatar";
import Server from "../types/Server";
import ServerStatus from "../types/ServerStatus";
import { useState } from "react";

function ServerListItem(props: {server: Server}) {
    const navigate = useNavigate();

    const [showLinkCopiedMessage, setShowLinkCopiedMessage] = useState(false);

    const server = props.server;

    return (
        <Box width={"100%"}>
            <Snackbar open={showLinkCopiedMessage} autoHideDuration={5000} onClose={() => setShowLinkCopiedMessage(false)}>
              <Alert onClose={() => setShowLinkCopiedMessage(false)} severity="success" sx={{width: "100%", borderRadius: "25px"}}>
                Link in zwischenablage kopiert
              </Alert>
            </Snackbar>
            <Card sx={{borderRadius:"25px"}}> 
              <CardActionArea onClick={() => navigate('/server', {state: {serverID : server.id}})}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item md={3} xs={12}>
                      <Stack direction="column" spacing={1}>
                        <Typography variant="h6">Gameserver #01</Typography>
                        <Box width={100} height={100}>
                          <Card sx={{width: "100%", height: "100%"}}>
                            <Avatar width={100} height={100} avatarSeed={server.avatarSeed} avatarColor={server.avatarColor}/>
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
                        <Typography>Geladene Szene: {server.loadedScene}</Typography>
                        <Typography>Geladenes Projekt: {server.loadedProject}</Typography>
                        <Typography>Zuletzt gespeichert: {server.lastSaved.toLocaleDateString()} {server.lastSaved.toLocaleTimeString()}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item md={2} textAlign="end" display="flex" justifyContent="end" alignContent="end">
                      <Stack direction="column" spacing={1}>
                        {server.status == ServerStatus.Online ? 
                          <Chip color="success" label="Online"/>
                            :
                          <Chip color="error" label="Offline"/>
                        }
                        <Box display="flex" height="100%">
                          <IconButton 
                                aria-label="Link teilen" 
                                size="large" 
                                sx={{display: "flex", flexDirection: "column"}} 
                                onMouseDown={(e) => {e.stopPropagation()}} 
                                onClick={(e) => {e.stopPropagation();
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
                </CardContent>
              </CardActionArea> 
            </Card>
          </Box>
    )
}

export default ServerListItem;