function startHandler(){

    fetch("http://192.168.56.2:8081/start")
    .then(response => response.text())
    .then(text => console.log(text))
}

function stopHandler(){

    fetch("http://192.168.56.2:8081/stop")
    .then(response => response.text())
    .then(text => console.log(text))
}

function resetHandler(){

    fetch("http://192.168.56.2:8081/reset")
    .then(response => response.text())
    .then(text => console.log(text))
}

function critical1Handler(){

    fetch("http://192.168.56.2:8081/critical1")
    .then(response => response.text())
    .then(text => console.log(text))
}

function critical2Handler(){

    fetch("http://192.168.56.2:8081/critical2")
    .then(response => response.text())
    .then(text => console.log(text))
}