const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 7000

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.post('/fi', db.insertfi)


app.listen(7000, () => {
  console.log(`Server is running.`);
});
