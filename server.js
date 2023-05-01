const express = require('express')
const {spawn} = require('child_process');
const {exec} = require('child_process');
const app = express()

app.get('/start', (req, res) => {
  // Allow origin
  res.header("Access-Control-Allow-Origin", "http://192.168.56.2:8080")

  // spawn child process to execute bash script
  const child = spawn('bash', ["./ciao.sh"]);

  // get PID of child process
  PID = child.pid;

  // redirect input from terminal (father) to child process
  process.stdin.pipe(child.stdin);

  // redirect output from child process to terminal (father)
  child.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
  });

  child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
  });

  // when child process terminates
  child.on('exit', function(code, signal) {
    console.log('Child terminated with code: ' + code);
  });

  if (child.pid){
    setTimeout(function(){
      res.send('true');
    }, 6000);
  }else{
    res.send('false');
  }
})

app.get('/stop', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://192.168.56.2:8080")
  res.send('stop')
})

app.get('/reset', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://192.168.56.2:8080")
  res.send('reset')
})

app.get('/critical1', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://192.168.56.2:8080")
  res.send('critical1')
})

app.get('/critical2', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://192.168.56.2:8080")
  res.send('critical2')
})

 
app.listen(8081, () => {
  console.log('Server listening on port 8081!')
})
