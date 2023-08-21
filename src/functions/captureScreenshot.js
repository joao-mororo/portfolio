const captureScreenshot = async (url) => {
    try {
        const response = await fetch(`/screenshot?url=${encodeURIComponent(url)}`);
        const screenshotBlob = await response.blob();
        const screenshotUrl = URL.createObjectURL(screenshotBlob);
        console.log('image url: ' + screenshotUrl);
        return screenshotUrl;
    } catch (error) {
        console.error('Error capturing screenshot:', error);
    }
};

export default captureScreenshot