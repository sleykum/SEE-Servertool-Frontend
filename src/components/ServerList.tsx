import { Box, Card, CardActionArea, CardContent, Chip, Grid, IconButton, Stack, Typography} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

function ServerList() {
    return (
        <Stack direction="row" spacing={2} sx={{marginTop: "2em"}}>
          <Box width={"100%"}>
          <Card sx={{borderRadius:"25px"}}> 
            <CardActionArea>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="h6">Gameserver #01</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h6">Status</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6">Welt</Typography>
                  </Grid>
                  <Grid item xs={2} textAlign="end">
                    <Chip color="success" label="Online"/>
                  </Grid>
                  <Grid item xs={3}>
                    <Box width={100} height={100}>
                      <Card sx={{width: "100%", height: "100%"}}>
                      </Card>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Stack direction="column" spacing={1}>
                      <Typography>Spieler: 0/10</Typography>
                      <Typography>Online seit: 10m</Typography>
                      <Typography>Ping: 30ms</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack direction="column" spacing={1}>
                      <Typography>Geladene Szene: Beispielszene</Typography>
                      <Typography>Geladenes Projekt: Beispielprojekt</Typography>
                      <Typography>Zuletzt gespeichert: Vor 30 Sekunden</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={2} justifyContent="end" display="flex">
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
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea> 
          </Card>
          </Box>
        </Stack>
    )
  }

  export default ServerList;