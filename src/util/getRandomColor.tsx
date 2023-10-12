function getRandomColor(){
    const red = (Math.floor(Math.random() * 150) + 100).toString();
    const green = (Math.floor(Math.random() * 150) + 100).toString();
    const blue = (Math.floor(Math.random() * 150) + 100).toString();

    return `rgb(${red}, ${green}, ${blue})`;
}

export default getRandomColor;