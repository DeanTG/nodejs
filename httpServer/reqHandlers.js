var exec = require("child_process").exec;
var queryString = require("querystring");
function start (res,postData) {
    console.log("request handler 'start' was called");
    
    var html = '<!DOCTYPE html>'+'<html>'+'<head>'+'<meta http-equiv="Content-Type" content="text/html" charset=UTF-8" />'+'</head>'+
'<body>'+
'<form action="/upload" method="post">'+
'<textarea name="text"></textarea>'+
'<input type="submit" value="submit"/>'+
'</form>'+
'</body>'+
'</html>';
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write(html);
    res.end();
    
}
function upload (res,postData) {
    console.log("request handler 'upload' was called");
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.write("has send: "+queryString.parse(postData).text);
    res.end();
}
exports.start = start;
exports.upload = upload;