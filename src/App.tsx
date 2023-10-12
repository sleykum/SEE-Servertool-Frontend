import { Route, Routes } from 'react-router'
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'
import ServerView from './views/ServerView'
import CreateServerView from './views/CreateServerView'
import SettingsView from './views/SettingsView'
import PersonalSettingsView from './views/PersonalSettingsView'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { blueGrey } from '@mui/material/colors'

const theme = createTheme(
  {
    palette: {
      secondary: {
        main: blueGrey[500],
        contrastText: "#fff"
      }
    }
  }
);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LoginView/>}/> 
        <Route path="/home" element={<HomeView/>}/> 
        <Route path="/server" element={<ServerView/>}/> 
        <Route path="/createServer" element={<CreateServerView/>}/> 
        <Route path="/settings" element={<SettingsView/>}/> 
        <Route path="/personalSettings" element={<PersonalSettingsView/>}/> 
      </Routes> 
    </ThemeProvider>
    
  )
}

export default App
