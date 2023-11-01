import {Box, Button, Card, CardContent, Container, Stack, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { dummyUsers, userPasswordMap } from "../exampledata/exampledata";

function PersonalSettingsView() {
    const navigate = useNavigate();

    const [newUsername, setNewUsername] = useState("");
    const [changeUsernamePassword, setChangeUsernamePassword] = useState("");
    const [changeUserNameErrors, setChangeUserNameErrors] = useState<Map<string,string>>(new Map<string, string>());

    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
    const [changePasswordPassword, setChangePasswordPassword] = useState("");
    const [changePasswordErrors, setChangePasswordErrors] = useState<Map<string,string>>(new Map<string, string>());

    function updateUsername(){
      if(!newUsername || !changeUsernamePassword){
        return;
      } 
      alert(`new username: ${newUsername}, entered password: ${changeUsernamePassword}`);
    }

    function updatePassword(){
      if(!newPassword || !newPasswordRepeat || !changePasswordPassword){
        return;
      }
      if(newPassword != newPasswordRepeat){
        setChangePasswordErrors(new Map(changePasswordErrors.set('newPasswordRepeat', 'Passwörter stimmen nicht überein.')));
      } else {
        setChangePasswordErrors(new Map(changePasswordErrors.set('newPasswordRepeat', '')));
        alert(`new password: ${newPassword}, new password (repeated): ${newPasswordRepeat}, old password: ${changeUsernamePassword}`);
      }
    }


    return (
      <Container sx={{padding: "3em", height:"100vh"}}>
        <Header/>
        <Card sx={{marginTop: "2em", borderRadius: "25px", height: "calc(100% - 100px)", overflow: "auto"}}>
          <CardContent sx={{height: "calc(100% - 3em)"}}>
            <Stack direction="column" spacing={2} height={"100%"}>
              <Typography variant="h4"><Box display={"inline"} sx={{"&:hover" : {cursor: "pointer"}}}><FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)}/></Box> Benutzereinstellungen</Typography>              
              <Typography variant="h6">Benutzername ändern:</Typography>
              <TextField 
                label="Neuer Benutzername" 
                variant="standard" value={newUsername} 
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <TextField 
                label="Aktuelles Passwort" 
                variant="standard" 
                type="password"
                value={changeUsernamePassword} 
                onChange={(e) => setChangeUsernamePassword(e.target.value)}
              />
              <Stack justifyContent="end" direction="row" spacing={2}>
                <Button variant="contained" sx={{borderRadius:"25px"}} onClick={() => updateUsername()}>
                    Speichern
                </Button>
              </Stack>
              <Typography variant="h6">Passwort ändern:</Typography>
              <TextField 
                label="Neues Passwort" 
                variant="standard" 
                type="password"
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <TextField 
                label="Neues Passwort wiederholen" 
                variant="standard" 
                type="password"
                value={newPasswordRepeat} 
                error={!!changePasswordErrors.get("newPasswordRepeat")}
                helperText={changePasswordErrors.get("newPasswordRepeat")}
                onChange={(e) => setNewPasswordRepeat(e.target.value)}
              />
              <TextField 
                label="Aktuelles Passwort" 
                variant="standard" 
                type="password"
                value={changePasswordPassword} 
                onChange={(e) => setChangePasswordPassword(e.target.value)}
              />
              <Stack justifyContent="end" direction="row" spacing={2}>
                <Button variant="contained" sx={{borderRadius:"25px"}} onClick={() => updatePassword()}>
                    Speichern
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    )
  }

  export default PersonalSettingsView;