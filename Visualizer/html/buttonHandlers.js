// capire come fare per resettare lo stile dei link quando si disattiva un link o si stoppa il network
// l'handler dovrebbe prendere un parametro per dire se lo switch è stato spento o acceso
    // basta fare una variabile globale per ogni switch che cambia ogni volta che viene premuto
// attenzione anche agli altri bottoni


function startHandler(){
    // link coloring
    // 1 <-> 3
    const color1 = '#0061b0'
    document.getElementById("0").style.stroke = color1
    document.getElementById("0").style.strokeWidth = '5'
    document.getElementById("2").style.stroke = color1
    document.getElementById("2").style.strokeWidth = '5'
    document.getElementById("4").style.stroke = color1
    document.getElementById("4").style.strokeWidth = '5'
    document.getElementById("6").style.stroke = color1
    document.getElementById("6").style.strokeWidth = '5'
    // 2 <-> 4
    const color2 = '#0014a8'
    document.getElementById("10").style.stroke = color2
    document.getElementById("10").style.strokeWidth = '5'
    document.getElementById("1").style.stroke = color2
    document.getElementById("1").style.strokeWidth = '5'
    document.getElementById("5").style.stroke = color2
    document.getElementById("5").style.strokeWidth = '5'
    

    fetch("http://192.168.56.2:8081/start")
    .then(response => response.text())
    .then(text => console.log(text))
}

function stopHandler(){
    // prove
    document.getElementById("netStatus").innerHTML = 'ciao'
    document.getElementById("0").style.stroke = 'red'
    // ----

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

    // link coloring
    const normalColor = '#099e2f'
    const critColor = '#f55c0a'
    document.getElementById("3").style.stroke = normalColor
    document.getElementById("3").style.strokeWidth = '5'
    document.getElementById("1").style.stroke = critColor
    document.getElementById("1").style.strokeWidth = '5'
    document.getElementById("8").style.stroke = normalColor
    document.getElementById("8").style.strokeWidth = '5'

    fetch("http://192.168.56.2:8081/critical1")
    .then(response => response.text())
    .then(text => console.log(text))
}

function critical2Handler(){

    // link coloring
    const normalColor = '#11d698'
    const critColor = '#b00222'
    document.getElementById("7").style.stroke = normalColor
    document.getElementById("7").style.strokeWidth = '5'
    document.getElementById("0").style.stroke = critColor
    document.getElementById("0").style.strokeWidth = '5'
    document.getElementById("9").style.stroke = normalColor
    document.getElementById("9").style.strokeWidth = '5'

    fetch("http://192.168.56.2:8081/critical2")
    .then(response => response.text())
    .then(text => console.log(text))
}