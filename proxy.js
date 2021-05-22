// var express  = require('express');
// var app      = express();
// var httpProxy = require('http-proxy');
// var apiProxy = httpProxy.createProxyServer();
// var serverOne = 'http://localhost:4001',
//     ServerTwo = 'http://localhost:4002',
//     ServerThree = 'http://localhost:4003';
 
// app.all("/photogallery/", function(req, res) {
//     console.log('redirecting to Server1');
//     apiProxy.web(req, res, {target: serverOne, changeOrigin: true});
// });

// app.all("/overview/", function(req, res) {
//     console.log('redirecting to Server2');
//     apiProxy.web(req, res, {target: ServerTwo});
// });

// app.all("/reviews/", function(req, res) {
//     console.log('redirecting to Server3');
//     apiProxy.web(req, res, {target: ServerThree});
// });

// app.listen(4000);

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('/users/michaelgallien/HackReactor/FEC/photogallery-proxy'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', cors(), (req, res) => {
  console.log('hello world');
  res.send('hi');
});


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})