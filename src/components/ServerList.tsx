import {Card, CardContent, Stack } from "@mui/material";
import ServerListItem from "./ServerListItem";
import { useEffect, useState } from "react";
import { dummyServers } from "../exampledata/exampledata";
import Server from "../types/Server";

function ServerList() {

  const [servers, setServers] = useState<Server[]>([]);

  useEffect(() => {
    //TODO fetch from backend
    setServers(dummyServers);
    return () => {
    }
  }, [])
  
  return (
    <Card elevation={0} sx={{margin: "2em 0 1em 0", maxHeight: "calc(100% - 150px)", overflow: "auto"}}>
    <CardContent>
      <Stack direction="column" spacing={2}>
          {
            servers && servers.length > 0 ?
              servers.map(
                (server) => <ServerListItem server={server} key={server.id}/>
              ) :
              <></>
          }
      </Stack>
    </CardContent>
    </Card>
  )
}

export default ServerList;