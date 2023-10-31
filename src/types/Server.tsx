import ServerStatus from "./ServerStatus";

type Server = {
    id: string;
    ip: string;
    port: string;
    avatarSeed: string;
    avatarColor: string; 
    connectedPlayers: number;
    maxConnectedPlayers: number;
    onlineSince: Date;
    pingInMS: number;
    loadedScene: string;
    loadedProject: string;
    lastSaved: Date;
    status: ServerStatus
}

export default Server