const port = process.env.PORT || 13380;
const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});

    const html = `<html>
    <head>
        <title>Contoso goes global</title>
    </head>
    <body>
    <h2>Contoso goes global</h2>
    WEBSITE_SITE_NAME:<br />
    <b>${process.env.WEBSITE_SITE_NAME}</b><br /><br />

    REGION_NAME:<br />
    <b>${process.env.REGION_NAME}</b><br /><br />

    COMPUTERNAME:<br /><b>${process.env.COMPUTERNAME}</b>
    </body>
    </html>`;
    response.end(html);
});

server.listen(port);
console.log("Contoso global running at http://localhost:%d", port);
