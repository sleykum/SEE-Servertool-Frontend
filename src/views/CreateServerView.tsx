import { Box, Button, Card, CardActionArea, CardContent, Container, Stack, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router";
import Avatar from "../components/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFileUpload, faRepeat, faX } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import getRandomSeed from "../util/getRandomSeed";
import getRandomColor from "../util/getRandomColor";
import { MuiFileInput } from 'mui-file-input';

function CreateServerView() {
    const navigate = useNavigate();

    const [code, setCode] = useState<File|null>(null);
    const [gxl, setGxl] = useState<File|null>(null);
    const [csv, setCsv] = useState<File|null>(null);
    const [configuration, setConfiguration] = useState<File|null>(null);
    const [solution, setSolution] = useState<File|null>(null);

    const [avatarSeed, setAvatarSeed] = useState(getRandomSeed());
    const [avatarColor, setAvatarColor] = useState(getRandomColor());
    const [displayReloadIcon, setDisplayReloadIcon] = useState(false);

    return (
      <Container sx={{padding: "3em", height:"100vh"}}>
        <Header/>
        <Card sx={{marginTop: "2em", borderRadius: "25px", height: "calc(100% - 100px)", overflow: "auto"}}>
          <CardContent sx={{height: "calc(100% - 3em)"}}>
            <Stack direction="column" spacing={2} height={"100%"}>
              <Typography variant="h4"><Box display={"inline"} sx={{"&:hover" : {cursor: "pointer"}}}><FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)}/></Box> Gameserver erstellen</Typography>
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
              <Typography variant="h6">Dateien:</Typography>
              <Card sx={{borderRadius: "0px", flexGrow: 1, overflow: "auto"}} elevation={0}>
                <MuiFileInput label="Code" placeholder="Code hochladen.." variant="standard" fullWidth value={code} onChange={(value) => setCode(value)} clearIconButtonProps={{title: "Entfernen", children: <FontAwesomeIcon icon={faX}/>}} inputProps={{accept: '.zip'}}/>
                <MuiFileInput label="GXL" placeholder="GXL hochladen.." variant="standard" fullWidth value={gxl} onChange={(value) => setGxl(value)} clearIconButtonProps={{title: "Entfernen", children: <FontAwesomeIcon icon={faX}/>}} inputProps={{accept: '.gxl'}}/>
                <MuiFileInput label="CSV" placeholder="CSV hochladen.." variant="standard" fullWidth value={csv} onChange={(value) => setCsv(value)} clearIconButtonProps={{title: "Entfernen", children: <FontAwesomeIcon icon={faX}/>}} inputProps={{accept: '.csv'}}/>
                <MuiFileInput label="Config" placeholder="Config hochladen.." variant="standard" fullWidth value={configuration} onChange={(value) => setConfiguration(value)} clearIconButtonProps={{title: "Entfernen", children: <FontAwesomeIcon icon={faX}/>}} inputProps={{accept: '.cfg'}}/>
                <MuiFileInput label="Solution" placeholder="Solution hochladen.." variant="standard" fullWidth value={solution} onChange={(value) => setSolution(value)} clearIconButtonProps={{title: "Entfernen", children: <FontAwesomeIcon icon={faX}/>}}/>
              </Card> 
              <Stack justifyContent="end" direction="row" spacing={2}>
                <Button variant="contained" color="secondary" sx={{borderRadius:"25px"}} onClick={() => navigate('/')}>
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