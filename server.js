const express = require('express')
const {spawn} = require('child_process');
const {exec} = require('child_process');
const app = express()

var PID = 0

app.get('/default', (req, res) => {
  // Allow origin
  res.header("Access-Control-Allow-Origin", "http://192.168.56.2:8080")

  // spawn child process to execute bash script
  const child = spawn('bash', ["./shell/default.sh"]);

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

  res.send('default')
})

app.get('/stop', (req, res) => {
  // Allow origin
  res.header("Access-Control-Allow-Origin", "http://192.168.56.2:8080")

  // spawn child process to execute bash script
  const child = spawn('bash', ["./shell/reset.sh"]);

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
   
  res.send('stop')
})

app.get('/critical1', (req, res) => {
  // Allow origin
  res.header("Access-Control-Allow-Origin", "http://192.168.56.2:8080")

  // spawn child process to execute bash script
  const child = spawn('bash', ["./shell/critical1.sh"]);

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
   
  res.send('critical1')
})

app.get('/critical2', (req, res) => {

  // Allow origin
  res.header("Access-Control-Allow-Origin", "http://192.168.56.2:8080")

  // spawn child process to execute bash script
  const child = spawn('bash', ["./shell/critical2.sh"]);

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
   
  res.send('critical2')
})

app.get('/critical12', (req, res) => {

  // Allow origin
  res.header("Access-Control-Allow-Origin", "http://192.168.56.2:8080")

  // spawn child process to execute bash script
  const child = spawn('bash', ["./shell/critical1+2.sh"]);

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
   
  res.send('critical1+2')
})

 
app.listen(8081, () => {
  console.log('Server listening on port 8081!')
})
