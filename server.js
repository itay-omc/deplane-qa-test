// QA sample for Deplane's pull request previews: the page says which branch
// of the sample this is (version.txt), so each preview can be told apart.
const fs = require("fs");
const http = require("http");

const port = Number(process.env.PORT || 3000);
const version = fs.readFileSync(__dirname + "/version.txt", "utf8").trim();

http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("ok\n");
    return;
  }
  res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
  res.end("qa previews sample\nversion: " + version + "\n");
}).listen(port, () => console.log("listening on " + port));
