import { Box, Button, Card, CardContent, Container, IconButton, List, ListItem, ListItemText, Modal, Stack, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCrown, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { grey, yellow } from "@mui/material/colors";
import { useEffect, useState } from "react";
import User from "../types/User";
import { dummyUsers } from "../exampledata/exampledata";
import Role from "../types/Role";
import { useNavigate } from "react-router";

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
    const navigate = useNavigate();

    const [addUserModalOpen, setAddUserModalOpen] = useState(false);
    const [removeUserModalOpen, setRemoveUserModalOpen] = useState(false);
    const [promoteDemoteUserModalOpen, setPromoteDemoteUserModalOpen] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    useEffect(() => {
      //TODO fetch from backend
      setUsers(dummyUsers);
    
      return () => {
      }
    }, [])
    

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
                    Sind Sie sich sicher, dass Sie den Benutzer <b>{selectedUser? selectedUser.username : ""}</b> entfernen möchten?
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
          <Modal
            open={promoteDemoteUserModalOpen}
            onClose={() => setPromoteDemoteUserModalOpen(false)}
            aria-labelledby="promote-demote-user-modal-title"
            aria-aria-describedby="promote-demote-modal-description">
              <Box sx={modalStyle}>
                  <Typography id="promote-demote-modal-title" variant="h6">
                    Benutzer {selectedUser?.role == Role.Admin ? "herabstufen" : "befördern"}
                  </Typography>
                  <Typography id="promote-demote-modal-description" sx={{marginTop: "2em"}}>
                    Sind Sie sich sicher, dass Sie den Benutzer <b>{selectedUser? selectedUser.username : ""}</b> {selectedUser?.role == Role.Admin ? "zum Benutzer herabstufen" : "zum Admin befördern"} möchten?
                  </Typography>
                  <Stack justifyContent="end" direction="row" spacing={2} sx={{marginTop: "2em"}}>
                    <Button variant="contained" color="secondary" sx={{borderRadius:"25px"}} onClick={() => setPromoteDemoteUserModalOpen(false)}>
                        Abbrechen
                    </Button>
                    <Button variant="contained" sx={{borderRadius:"25px"}}>
                      {selectedUser?.role == Role.Admin ? "Herabstufen" : "Befördern"}
                    </Button>
                  </Stack>
              </Box>
          </Modal>
        <Header/>
        <Card sx={{marginTop: "2em", borderRadius: "25px", height: "calc(100% - 100px)", overflow: "auto"}}>
          <CardContent sx={{height: "calc(100% - 3em)"}}>
            <Stack direction="column" spacing={2} height={"100%"}>
              <Typography variant="h4"><Box display={"inline"} sx={{"&:hover" : {cursor: "pointer"}}}><FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)}/></Box> Einstellungen</Typography>              
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
                    {
                      users && users.length > 0 ?
                        users.map(
                          (user) =>
                            <ListItem key={user.id} sx={{backgroundColor: "white", borderRadius:"25px",  marginBottom:"1em"}}
                            secondaryAction={
                              <>
                                <IconButton onClick={() => {setSelectedUser(user); setPromoteDemoteUserModalOpen(true);}}
                                  disabled={user.role == Role.Admin && (users.filter((u) => u.role == Role.Admin)).length < 2}>
                                  <FontAwesomeIcon icon={faCrown} color={user.role == Role.Admin ? yellow[600] : undefined}/>
                                </IconButton>
                                <IconButton onClick={() => {setSelectedUser(user); setRemoveUserModalOpen(true);}}
                                  disabled={users.length < 2 || (user.role == Role.Admin && (users.filter((u) => u.role == Role.Admin)).length < 2)}>
                                  <FontAwesomeIcon icon={faUserMinus}/>
                                </IconButton>
                              </>
                            }>
                              <ListItemText> 
                                <Typography variant="subtitle2">{user.username}</Typography> 
                              </ListItemText>
                            </ListItem>
                        )
                      : <></>
                    }
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