const http = require('http');

let isFirstFetch = true;

const server = http.createServer((req, res) => {
    // Set CORS headers to allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url === '/favicon.ico') {
        res.writeHead(204);
        res.end();
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (isFirstFetch) {
        res.end("https://api.whatsapp.com/send/?phone=905384754702&text=Merhaba&type=phone_number&app_absent=0");
        isFirstFetch = false;
    } else {
        res.end("https://www.youtube.com/shorts/qW2swIU-O8M");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
