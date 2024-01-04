import File from "./File";
import ServerStatus from "./ServerStatus";

type Server = {
    id: string;
    creationTime: number;
    ip: string;
    port: string;
    name: string;
    avatarSeed: string;
    avatarColor: string; 
    startTime: number;
    stopTime: number;
    status: ServerStatus;
}

export default Server