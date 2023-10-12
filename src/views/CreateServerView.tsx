import { Box, Button, Card, CardActionArea, CardContent, Container, Stack, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router";
import Avatar from "../components/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import getRandomSeed from "../util/getRandomSeed";
import getRandomColor from "../util/getRandomColor";


function CreateServerView() {
    const navigate = useNavigate();

    const [avatarSeed, setAvatarSeed] = useState(getRandomSeed());
    const [avatarColor, setAvatarColor] = useState(getRandomColor());
    const [displayReloadIcon, setDisplayReloadIcon] = useState(false);

    return (
      <Container sx={{padding: "3em", height:"100vh"}}>
        <Header/>
        <Card sx={{marginTop: "2em", borderRadius: "25px", height: "calc(100% - 100px)", overflow: "auto"}}>
          <CardContent sx={{height: "calc(100% - 3em)"}}>
            <Stack direction="column" spacing={2} height={"100%"}>
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
                          <CardActionArea onMouseEnter={() => setDisplayReloadIcon(true)} onMouseLeave={() => setDisplayReloadIcon(false)} onClick={() => {setAvatarSeed(getRandomSeed()); setAvatarColor(getRandomColor());}}>
                            <Box 
                              visibility={displayReloadIcon? "visible" : "hidden"} 
                              position="absolute" color={grey[500]} 
                              display="flex" 
                              width={140}
                              height={140} 
                              justifyContent="center"
                              sx={{mixBlendMode : "difference"}}
                            >
                              <Stack direction="column" justifyContent="center">
                                <FontAwesomeIcon icon={faRepeat} size="4x"/>
                              </Stack>
                            </Box>
                            <Avatar width={140} height={140} avatarSeed={avatarSeed} avatarColor={avatarColor}/>
                          </CardActionArea>
                        </Card>
                      </Box>
                </Stack>
                
              </Stack>
              <Typography variant="h6">Projekteinstellungen:</Typography>
              <TextField label="Projektname" variant="standard"/>
              <Card sx={{borderRadius: "25px", backgroundColor: grey[200], flexGrow: 1, minHeight:"200px"}}>
                <CardActionArea sx={{ height: "100%"}}>
                  <CardContent>
                    <Box width={"100%"} height={"100%"} display="flex" justifyContent="center">
                      <Stack direction="column" justifyContent="center">
                        <FontAwesomeIcon icon={faFileUpload} size="10x" color={grey[500]}/>
                        <Typography variant="h6" sx={{marginTop: "1em"}} color={grey[500]}>
                          Hier klicken um Dateien hochzuladen
                        </Typography>
                      </Stack>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card> 
              <Stack justifyContent="end" direction="row" spacing={2}>
                <Button variant="contained" color="secondary" sx={{borderRadius:"25px"}} onClick={() => navigate('/home')}>
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