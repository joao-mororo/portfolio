const captureScreenshot = async (url) => {
    try {
        const response = await fetch(`https://api.apiflash.com/v1/urltoimage?access_key=4d4ec4da842a451a9c275d0fd7742724&url=${url}&format=webp`);
        console.log(response.url);
        return response.url
    } catch (error) {
        console.error('Error capturing screenshot:', error);
    }
};

export default captureScreenshot