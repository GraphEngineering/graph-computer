"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var apollo_server_express_1 = require("apollo-server-express");
var schema = null;
var app = express();
app.use("/graphql", bodyParser.json(), apollo_server_express_1.graphqlExpress({ schema: schema }));
app.get("/graphiql", apollo_server_express_1.graphiqlExpress({ endpointURL: "/graphql" }));
app.listen(8080);
