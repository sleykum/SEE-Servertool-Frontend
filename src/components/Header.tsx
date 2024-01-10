import { AppBar, Box, Container, IconButton, Toolbar} from "@mui/material";
import  seeLogo from "../img/see-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog, faRightFromBracket, faBuilding, faBuildingUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Role from "../types/Role";

function Header() {
    const {axiosInstance, user, setUser} = useContext(AuthContext);

    function logout(){
      axiosInstance.post("/user/signout");
      setUser(null);
      sessionStorage.setItem("username", "")
    }

    const navigate = useNavigate();

    return (
        <AppBar position="relative" color="transparent" elevation={0}>
            <Container disableGutters>
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, "&:hover" : {cursor: "pointer"}}}>
                        <img src={seeLogo} height="64"  onClick={() => navigate('/')}/>
                    </Box>
                    {
                        user?.roles.some((item) => item.name == "ROLE_ADMIN") ?
                            <IconButton size="large" onClick={() => navigate('/settings')}>
                                <FontAwesomeIcon icon={faBuildingUser}/>
                            </IconButton>
                        : <></>
                    }
                    <IconButton size="large" onClick={() => navigate('/personalSettings')}>
                        <FontAwesomeIcon icon={faCog}/>
                    </IconButton>
                    <IconButton size="large" onClick={() => logout()}>
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                    </IconButton>
                </Toolbar>
            </Container>

        </AppBar>
    )
  }

  export default Header;