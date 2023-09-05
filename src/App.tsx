import { Route, Routes } from 'react-router'
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginView/>}/> 
      <Route path="/home" element={<HomeView/>}/> 
    </Routes>
  )
}

export default App
