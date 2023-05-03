const express = require('express')
const {spawn} = require('child_process');
const app = express()

const launchBash = function(res, fileName) {
  // Allow origin
  res.header("Access-Control-Allow-Origin", "http://192.168.56.2:8080")

  // spawn child process to execute bash script
  spawn('bash', ['./shell/' + fileName + '.sh']);

  res.send(fileName)
}

app.get('/default', (req, res) => {
  launchBash(res, 'default')
})

app.get('/stop', (req, res) => {
  launchBash(res, 'reset')
})

app.get('/critical1', (req, res) => {
  launchBash(res, 'critical1')
})

app.get('/critical2', (req, res) => {
  launchBash(res, 'critical2')
})

app.get('/critical12', (req, res) => {
  launchBash(res, 'critical1+2')
})

 
app.listen(8081, () => {
  console.log('Server listening on port 8081!')
})
