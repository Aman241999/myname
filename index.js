const Http = require("http");
Http.createServer((req, res) => {
  res.write("Aman kumar Singh");
  res.end();
}).listen(4000);
