const shuffle = (array) => {
    return JSON.parse(JSON.stringify(array.sort(() => Math.random() - 0.5)));
}

export default shuffle