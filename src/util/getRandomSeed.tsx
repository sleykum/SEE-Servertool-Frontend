function getRandomSeed(){
    let avatarSeed = "";
    for(let i = 0; i < 18; i++){
        avatarSeed = avatarSeed + Math.round(Math.random()).toString();
    }
    return avatarSeed;
}

export default getRandomSeed;