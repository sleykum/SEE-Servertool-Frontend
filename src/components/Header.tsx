import { AppBar, Box, Container, IconButton, Toolbar} from "@mui/material";
import  seeLogo from "../img/see-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <AppBar position="relative" color="transparent" elevation={0}>
            <Container disableGutters>
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1}}>
                        <img src={seeLogo} height="64" />
                    </Box>
                    <IconButton size="large">
                        <FontAwesomeIcon icon={faCog}/>
                    </IconButton>
                    <IconButton size="large">
                        <FontAwesomeIcon icon={faUser}/>
                    </IconButton>
                </Toolbar>
            </Container>

        </AppBar>
    )
  }

  export default Header;