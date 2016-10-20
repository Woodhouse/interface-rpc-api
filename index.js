const http = require('http');

class Api {
    constructor() {
        this.name = `rpc-api`;
        this.displayname = `RPC API`;
        this.description = 'Issue commands through an API';
    }

    init() {
        const server = http.createServer((request, response) => {
            let body = '';
            request.on('data', (chunk) => {
                body += chunk;
            });
            request.on('end', () => {
                this.messageRecieved('api-user', body).then((message) => {
                    response.end(message)
                });
            });
        });

        server.listen(8080);
    }
}

module.exports = Api;
