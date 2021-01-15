// Investigate if make sense use without external dependencies
const express = require('express');
const app = express();
const targetBaseUrl = process.env.TARGET_URL;

function handleRedirect(req, res) {
  const targetUrl = targetBaseUrl + req.originalUrl;
  res.redirect(targetUrl);
}

app.get('*', handleRedirect);const port = 80;
app.listen(port);
