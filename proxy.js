var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
const proxy = httpProxy.createProxyServer({
  target: `http://${process.env.API_SERVICE_SERVICE_HOST}:${process.env.API_SERVICE_SERVICE_PORT}/`
})

proxy.listen(3000); // See (†)

//
// Listen for the `error` event on `proxy`.
proxy.on('error', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  console.log('Server not found');
  res.end('Something went wrong. And we are reporting a custom error message.');
});