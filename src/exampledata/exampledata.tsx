import Role from "../types/Role"
import Server from "../types/Server"
import ServerStatus from "../types/ServerStatus"
import User from "../types/User"

const dummyUsers: Array<User> = [
    {id: "0", username: "Administrator", role: Role.Admin},
    {id: "1", username: "Benutzer 1", role: Role.Admin},
    {id: "2", username: "Benutzer 2", role: Role.Admin}
]

const dummyServers: Array<Server> = [
    {
        id: "0", 
        ip: "127.0.0.1", 
        port: "1111", 
        avatarSeed: "101101101110001011", 
        avatarColor: `rgb(145, 177, 227)`,
        connectedPlayers: 5,
        maxConnectedPlayers: 10,
        onlineSince: new Date("2023-10-10T14:48:00.000+09:00"),
        pingInMS: 120,
        loadedScene: "defaultScene",
        loadedProject: "testProject1",
        lastSaved: new Date("2011-10-04T10:21:00.000+09:00"),
        status: ServerStatus.Online,
    },
    {
        id: "1", 
        ip: "127.0.0.1", 
        port: "2222", 
        avatarSeed: "110101011010111010", 
        avatarColor: `rgb(250, 200, 227)`,
        connectedPlayers: 2,
        maxConnectedPlayers: 8,
        onlineSince: new Date(),
        pingInMS: 40,
        loadedScene: "otherScene",
        loadedProject: "testProject2",
        lastSaved: new Date(),
        status: ServerStatus.Offline,
    },
    {
        id: "2", 
        ip: "127.0.0.1", 
        port: "3333", 
        avatarSeed: "010001010010101011", 
        avatarColor: `rgb(237, 225, 166)`,
        connectedPlayers: 20,
        maxConnectedPlayers: 20,
        onlineSince: new Date(),
        pingInMS: 5,
        loadedScene: "defaultScene",
        loadedProject: "testProject3",
        lastSaved: new Date(),
        status: ServerStatus.Online,
    },
]

export {dummyServers, dummyUsers}