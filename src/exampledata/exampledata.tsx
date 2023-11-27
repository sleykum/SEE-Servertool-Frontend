import Organisation from "../types/Organisation"
import Role from "../types/Role"
import Server from "../types/Server"
import ServerStatus from "../types/ServerStatus"
import User from "../types/User"

const dummyOrganisation: Organisation = {id: "0", name:"Testorganisation"}

const dummyUsers: Array<User> = [
    {username: "Administrator", role: Role.Admin},
    {username: "Benutzer1", role: Role.User},
    {username: "Benutzer2", role: Role.User}
]

const userPasswordMap = new Map<User, string>(
    [
        [dummyUsers[0], 'passwort'],
        [dummyUsers[1], '12345'],
        [dummyUsers[2], 'test'],
    ]
)

const dummyServers: Array<Server> = [
    {
        id: "0", 
        ip: "127.0.0.1", 
        port: "1111", 
        name: "Server #01",
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
        projectFiles: [
            {id: "0", name: "test.gxl"},
            {id: "1", name: "test.csv"}
        ]
    },
    {
        id: "1", 
        ip: "127.0.0.1", 
        port: "2222", 
        name: "Server #02",
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
        projectFiles: [
            {id: "2", name: "test1.gxl"},
            {id: "3", name: "test1.csv"}
        ]
    },
    {
        id: "2", 
        ip: "127.0.0.1", 
        port: "3333", 
        name: "Server #03",
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
        projectFiles: [
            {id: "4", name: "test2.gxl"},
            {id: "5", name: "test2.csv"}
        ]
    },
]

export {dummyServers, dummyUsers, userPasswordMap, dummyOrganisation}