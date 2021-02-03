"use strict";

var server = require("./server/server");            // make server module available
var router = require("./server/router");            // router module

server.start(router);                               // start server
                                                    // callback to route
