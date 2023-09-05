import { Box, Card, CardActionArea, CardContent, Chip, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import ServerList from "../components/ServerList";

function HomeView() {
    return (
      <Container sx={{padding: "3em"}}>
        <Header/>
        <ServerList/>
      </Container>
    )
  }

  export default HomeView;