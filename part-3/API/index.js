const http = require('http');
const port = 3000;
const host = '127.0.0.1';

const routes = (req, res) => {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Ola mundo!</h1>');
  }

  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(
    '<div style="widht: 100vw; height: 50vh;"><iframe height="100%" scrolling="no" width="100%" frameborder="0" title="404" src="http://wayou.github.io/t-rex-runner" /> </div>'
  );
};

const server = http.createServer((req, res) => {
  routes(req, res);
});

if (process.env.NODE_ENV !== 'test') {
  server.listen(port, host, () => {
    console.log(`Server running in: http://${host}:${port}`);
  });
}

module.exports = server;
