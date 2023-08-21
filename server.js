const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('build'));

app.get('/screenshot', async (req, res) => {
    const { url } = req.query;

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const screenshot = await page.screenshot();

        await browser.close();

        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': screenshot.length,
        });
        res.end(screenshot);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error capturing screenshot');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
