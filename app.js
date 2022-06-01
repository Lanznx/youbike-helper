const { initCrawler1 } = require('./service/crawler');
const { initWorker1 } = require('./service/worker');
const express = require('express');
const app = express();
const port = 3000;

initCrawler1();
(async() => {
  await initWorker1();
})()

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});