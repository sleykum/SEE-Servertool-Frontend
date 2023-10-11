type Server = {
    id: string;
    ip: string;
    port: string;
    imageUrl: string;
    connectedPlayers: string;
    onlineSince: number;
    pingInMS: number;
    loadedScene: string;
    loadedProject: string;
    lastSaved: number;
}