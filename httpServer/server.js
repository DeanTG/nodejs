var http = require("http");
var url = require("url");

function start (route,handle) {
    function onRequest(req,res) {
        var postData = "";
        var pathname = url.parse(req.url).pathname;
        console.log("request for " + pathname + " received.");

        req.setEncoding("utf8");
        req.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
            console.log("received post data chunk"+postDataChunk);
        });
        req.addListener("end", function (argument) {
            route(handle, pathname, res,postData);
        });
        

    }
    http.createServer(onRequest).listen(3000);
    console.log("server has started in http://localhost:3000");
}
exports.start = start;
