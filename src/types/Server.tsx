import File from "./File";
import ServerStatus from "./ServerStatus";

type Server = {
    id: string;
    ip: string;
    port: string;
    name: string;
    avatarSeed: string;
    avatarColor: string; 
    connectedPlayers: number;
    maxConnectedPlayers: number;
    onlineSince: Date;
    pingInMS: number;
    loadedScene: string;
    loadedProject: string;
    lastSaved: Date;
    status: ServerStatus;
    projectFiles: File[];
}

export default Server