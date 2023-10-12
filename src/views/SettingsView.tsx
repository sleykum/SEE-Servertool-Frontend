import { Box, Button, Card, CardContent, Container, IconButton, List, ListItem, ListItemText, Modal, Stack, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { grey } from "@mui/material/colors";
import { useState } from "react";

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

function SettingsView() {
    const [addUserModalOpen, setAddUserModalOpen] = useState(false);
    const [removeUserModalOpen, setRemoveUserModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    return (
      <Container sx={{padding: "3em", height:"100vh"}}>
        <Modal
          open={addUserModalOpen}
          onClose={() => setAddUserModalOpen(false)}
          aria-labelledby="add-user-modal-title">
            <Box sx={modalStyle}>
                <Typography id="add-user-modal-title" variant="h6">
                  Benutzer hinzufügen
                </Typography>
                <Stack direction="column" spacing={2}>
                  <TextField label="Benutzername" variant="standard"/>
                  <TextField label="Passwort" variant="standard"/>
                  <Stack justifyContent="end" direction="row" spacing={2}>
                    <Button variant="contained" color="secondary" sx={{borderRadius:"25px"}} onClick={() => setAddUserModalOpen(false)}>
                        Abbrechen
                    </Button>
                    <Button variant="contained" sx={{borderRadius:"25px"}}>
                        Hinzufügen
                    </Button>
                  </Stack>
                </Stack>
                
            </Box>
          </Modal>
          <Modal
            open={removeUserModalOpen}
            onClose={() => setRemoveUserModalOpen(false)}
            aria-labelledby="remove-user-modal-title"
            aria-aria-describedby="remove-user-modal-description">
              <Box sx={modalStyle}>
                  <Typography id="remove-user-modal-title" variant="h6">
                    Benutzer hinzufügen
                  </Typography>
                  <Typography id="remove-user-modal-description" sx={{marginTop: "2em"}}>
                    Sind Sie sich sicher, dass Sie den Benutzer {selectedUser? selectedUser.username : ""} entfernen möchten?
                  </Typography>
                  <Stack justifyContent="end" direction="row" spacing={2} sx={{marginTop: "2em"}}>
                    <Button variant="contained" color="secondary" sx={{borderRadius:"25px"}} onClick={() => setRemoveUserModalOpen(false)}>
                        Abbrechen
                    </Button>
                    <Button variant="contained" color="error" sx={{borderRadius:"25px"}}>
                        Entfernen
                    </Button>
                  </Stack>
              </Box>
            </Modal>
        <Header/>
        <Card sx={{marginTop: "2em", borderRadius: "25px", height: "calc(100% - 100px)", overflow: "auto"}}>
          <CardContent sx={{height: "calc(100% - 3em)"}}>
            <Stack direction="column" spacing={2} height={"100%"}>
              <Typography variant="h4">Einstellungen</Typography>              
              <Typography variant="h6">Organisationseinstellungen:</Typography>
              <TextField label="Name" variant="standard"/>
              <Stack justifyContent="end" direction="row" spacing={2}>
                <Button variant="contained" sx={{borderRadius:"25px"}}>
                  Speichern
                </Button>
              </Stack>
              <Typography variant="h6">Benutzerverwaltung:</Typography>
              <Card sx={{borderRadius: "25px", backgroundColor: grey[200], flexGrow: 1, overflow: "auto", minHeight: "100px", maxHeight: "100%"}}>
                <CardContent>
                  <List>
                    <ListItem sx={{backgroundColor: "white", borderRadius:"25px"}}
                    secondaryAction={
                      <IconButton onClick={() => {setSelectedUser({id: '0', username: 'benutzer2'}); setRemoveUserModalOpen(true);}}>
                        <FontAwesomeIcon icon={faUserMinus}/>
                      </IconButton>
                    }>
                      <ListItemText> 
                        <Typography variant="subtitle2">benutzer2</Typography> 
                      </ListItemText>
                    </ListItem>
                    <ListItem sx={{backgroundColor: "white", borderRadius:"25px", marginTop:"1em"}}
                    secondaryAction={
                      <IconButton onClick={() => {setSelectedUser({id: '1', username: 'benutzer1'}); setRemoveUserModalOpen(true);}}>
                        <FontAwesomeIcon icon={faUserMinus}/>
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
                <Button variant="contained" sx={{borderRadius:"25px"}} onClick={() => setAddUserModalOpen(true)}>
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