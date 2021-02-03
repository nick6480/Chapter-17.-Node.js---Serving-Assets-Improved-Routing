"use strict";

const handlers = require("./handlers.js");
const requestHandlers = {
  "/": handlers.home,
  "/home": handlers.home,
  "/about": handlers.about,
  "/contact": handlers.contact,
  "/notfound": handlers.notfound,
  "js": handlers.js,
  "css": handlers.css,
  "png": handlers.png,
  "svg": handlers.svg,
  "ico": handlers.ico,
}

module.exports = {
    route(req, res, body) {
        let arr = req.url.split(".");
        let ext = arr[arr.length - 1];



        if (typeof requestHandlers[req.url] === 'function') {  // look for route
            requestHandlers[req.url](req, res);                // if found use it
            //console.log(req, res)
        } else if (typeof requestHandlers[ext] === "function") {
            requestHandlers[ext](req, res);
        } else {
            console.log("5: " + ext);
            requestHandlers["/notfound"](req, res);        // use notfound
        }
    }
}
