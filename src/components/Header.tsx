import { AppBar, Box, Container, IconButton, Toolbar} from "@mui/material";
import  seeLogo from "../img/see-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";

function Header() {
    const navigate = useNavigate();

    return (
        <AppBar position="relative" color="transparent" elevation={0}>
            <Container disableGutters>
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, "&:hover" : {cursor: "pointer"}}}>
                        <img src={seeLogo} height="64"  onClick={() => navigate('/home')}/>
                    </Box>
                    <IconButton size="large" onClick={() => navigate('/settings')}>
                        <FontAwesomeIcon icon={faCog}/>
                    </IconButton>
                    <IconButton size="large" onClick={() => navigate('/personalSettings')}>
                        <FontAwesomeIcon icon={faUser}/>
                    </IconButton>
                </Toolbar>
            </Container>

        </AppBar>
    )
  }

  export default Header;