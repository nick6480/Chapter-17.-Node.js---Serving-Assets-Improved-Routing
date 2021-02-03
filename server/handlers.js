'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the router mechanism
 */
const fs = require("fs");                           // file system access
const httpStatus = require("http-status-codes");    // http sc

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
const getAndServe = async function (res, path, content) {   // asynchronous
    await fs.readFile(path, function(err, data) {           // awaits async read
        if (err) {
            console.log(`Not found file: ${path}`);
        } else {
            res.writeHead(httpStatus.OK, {          // yes, write header
                "Content-Type": content
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        }
    });
}

module.exports = {
    home(req, res) {
        let path = "./html/index.html";
        let content = "text/html; charset=utf-8";
        getAndServe(res, path, content);
    },

    about(req, res) {
        let path = "./html/about.html";
        let content = "text/html; charset=utf-8";
        getAndServe(res, path, content);
    },

    contact(req, res) {
        let path = "./html/contact.html";
        let content = "text/html; charset=utf-8";
        getAndServe(res, path, content);
    },

    notfound(req, res) {
        console.log(`Handler 'notfound' was called for route ${req.url}`);
        res.end();
    },


    css(req, res) {
        let path = "css" + req.url;
        let content = "text/css; charset=utf-8";
        getAndServe(res, path, content);
    },


    svg(req, res) {
        let path = "img" + req.url;
        let content = "image/svg";
        getAndServe(res, path, content);
    },

    png(req, res) {
        let path = "img" + req.url;
        let content = "image/png";
        getAndServe(res, path, content);
    },


    js(req, res) {
    let path = "public/js" + req.url;
    let content = "application/javascript; charset=utf-8";
    getAndServe(res, path, content);
    },

    ico(req, res) {
        let path = "public" + req.url;
        let content = "image/x-icon";
        getAndServe(res, path, content);
    },
}
