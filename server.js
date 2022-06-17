// // Build a server with Node's HTTP module
// const http = require('http');
// const port = 6969;
// const server = http.createServer(function (response, request) {
//     response.writeHand(200,{'Content-Type' : 'text-plain'});
//     response.write('Welcome to the Node server!');
//     response.end(); 
// }).listen(port);
// http.end(function (response, request) {
//     response.writeHand(200,{'Content-Type' : 'text/plain'});
//     response.write('Off');
//     response.end();
// }).listen(port);
/*Chúng ta sẽ thiết lập server của chúng ta để xử lý một yêu cầu và hiển thị
 URL yêu cầu ở phía server và hiển thị thông điệp Hello, server! cho client.*/
// server.on('request'(request, response) {
//     console.log(`URL: ${request.url}`);
//     response.end('Hello, server!');
// })

