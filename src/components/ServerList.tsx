import {Card, CardContent, Stack } from "@mui/material";
import ServerListItem from "./ServerListItem";

function ServerList() {
  return (
    <Card elevation={0} sx={{margin: "2em 0 1em 0", maxHeight: "calc(100% - 150px)", overflow: "auto"}}>
    <CardContent>
      <Stack direction="column" spacing={2}>
          <ServerListItem/>
          <ServerListItem/>
          <ServerListItem/>
      </Stack>
    </CardContent>
    </Card>
  )
}

export default ServerList;