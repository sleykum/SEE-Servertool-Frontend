import {Box, Card, CardActionArea, CardContent, Chip, Grid, IconButton, Stack, Typography} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";
import Avatar from "./Avatar";

function ServerListItem() {
    const navigate = useNavigate();

    let avatarSeed = "";

    for(let i = 0; i < 18; i++){
      avatarSeed = avatarSeed + Math.round(Math.random()).toString();
    }
    
    const red = (Math.floor(Math.random() * 150) + 100).toString();
    const green = (Math.floor(Math.random() * 150) + 100).toString();
    const blue = (Math.floor(Math.random() * 150) + 100).toString();

    return (
        <Box width={"100%"}>
            <Card sx={{borderRadius:"25px"}}> 
              <CardActionArea onClick={() => navigate('/server', {state: {'serverID': 'test'}})}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item md={3} xs={12}>
                      <Stack direction="column" spacing={1}>
                        <Typography variant="h6">Gameserver #01</Typography>
                        <Box width={100} height={100}>
                          <Card sx={{width: "100%", height: "100%"}}>
                            <Avatar width={100} height={100} avatarSeed={avatarSeed} avatarColor={`rgb(${red}, ${green}, ${blue})`}/>
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
                      <Stack direction="column" spacing={1}>
                        <Chip color="success" label="Online"/>
                        <Box display="flex" height="100%">
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
                </CardContent>
              </CardActionArea> 
            </Card>
          </Box>
    )
}

export default ServerListItem;