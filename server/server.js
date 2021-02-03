"use strict"

const http = require("http");
const hostname = "localhost";
const port = Number(process.argv[2]) || 3000;

module.exports = {
  start(router) {
    const server = http.createServer();

    server.on("request", function (req, res) {
      //console.log(res)
      let body = [];
      req.on("data", function (bodyData) {
        body.push(bodyData);
      });
      req.on("end", function () {
        body = Buffer.concat(body).toString();
        router.route(req, res, body);
      });
    });

    server.listen(port, hostname, function () {
      console.log(`Log: Server started on http://${hostname}:${port}/`);
    })
  }
}
