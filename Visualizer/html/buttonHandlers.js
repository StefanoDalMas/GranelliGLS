var text = document.getElementById("netStatus")

var started = false
var crit1 = false
var crit2 = false

var currentText = ''

document.getElementById("crit1").disabled = true
document.getElementById("crit2").disabled = true

var textDefault = 
    'Slice 1 (h1 <-> h3) : Active, Bandwidth: 10 Mbps <br>' +
    'Slice 2 (h2 <-> h4) : Active, Bandwidth: 10 Mbps <br>' +
    'Slice Crit1 (h5 <-> h6): Not Active <br>' +
    'Slice Crit2 (h7 <-> h8): Not Active'

var textCrit1 = 
    'Slice 1 (h1 <-> h3) : Active, Bandwidth: 10 Mbps <br>' +
    'Slice 2 (h2 <-> h4) : Active, Bandwidth: 3 Mbps <br>' +
    'Slice Crit1 (h5 <-> h6): Active, Bandwidth: 7 Mbps <br>' +
    'Slice Crit2 (h7 <-> h8): Not Active'

var textCrit2 = 
    'Slice 1 (h1 <-> h3) : Active, Bandwidth: 3 Mbps <br>' +
    'Slice 2 (h2 <-> h4) : Active, Bandwidth: 10 Mbps <br>' +
    'Slice Crit1 (h5 <-> h6): Not Active <br>' +
    'Slice Crit2 (h7 <-> h8): Active, Bandwidth: 7 Mbps'

var textBoth =
    'Slice 1 (h1 <-> h3) : Active, Bandwidth: 3 Mbps <br>' +
    'Slice 2 (h2 <-> h4) : Active, Bandwidth: 3 Mbps <br>' +
    'Slice Crit1 (h5 <-> h6): Active, Bandwidth: 7 Mbps <br>' +
    'Slice Crit2 (h7 <-> h8): Active, Bandwidth: 7 Mbps'


function startHandler(){

    if (!started){

        started = true
        document.getElementById("crit1").disabled = false
        document.getElementById("crit2").disabled = false

        // link coloring
        // 1 <-> 3
        // cambia e metti nel css -> qua devi solo assegnare la classe o toglierla
        // const color1 = '#0061b0'
        // document.getElementById("0").style.stroke = color1
        // document.getElementById("0").style.strokeWidth = '5'
        // document.getElementById("2").style.stroke = color1
        // document.getElementById("2").style.strokeWidth = '5'
        // document.getElementById("4").style.stroke = color1
        // document.getElementById("4").style.strokeWidth = '5'
        // document.getElementById("6").style.stroke = color1
        // document.getElementById("6").style.strokeWidth = '5'
        // // 2 <-> 4
        // const color2 = '#0014a8'
        // document.getElementById("10").style.stroke = color2
        // document.getElementById("10").style.strokeWidth = '5'
        // document.getElementById("1").style.stroke = color2
        // document.getElementById("1").style.strokeWidth = '5'
        // document.getElementById("5").style.stroke = color2
        // document.getElementById("5").style.strokeWidth = '5'

        currentText = textDefault

        text.innerHTML = currentText
        
        fetch("http://192.168.56.2:8081/default")
        .then(response => response.text())
        .then(text => console.log(text))
    } else {
        text.innerHTML = 'Network already started'
        setTimeout(() => {  
            text.innerHTML = currentText
        }, 2000);
    }
    
}

function stopHandler(){

    if (started){
        started = false
        crit1 = false
        crit2 = false

        document.getElementById("crit1").checked = false
        document.getElementById("crit2").checked = false

        document.getElementById("crit1").disabled = true
        document.getElementById("crit2").disabled = true

        text.innerHTML = 'Network stopped'

        currentText = ''
        setTimeout(() => {  
            text.innerHTML = currentText
        }, 2000);

        fetch("http://192.168.56.2:8081/stop")
        .then(response => response.text())
        .then(text => console.log(text))
    } else {
        text.innerHTML = 'Network already stopped'

        setTimeout(() => {  
            text.innerHTML = currentText
        }, 2000);
    }

}


function critical1Handler(){

    if (started){

        if (!crit1 && !crit2){
            crit1 = true

            currentText = textCrit1

            fetch("http://192.168.56.2:8081/critical1")
            .then(response => response.text())
            .then(text => console.log(text))

        } else if (crit1 && !crit2) {
            
            crit1 = false

            currentText = textDefault

            fetch("http://192.168.56.2:8081/default")
            .then(response => response.text())
            .then(text => console.log(text))
        } else if (!crit1 && crit2) {

            crit1 = true

            currentText = textBoth

            fetch("http://192.168.56.2:8081/critical12")
            .then(response => response.text())
            .then(text => console.log(text))
        } else {    

            crit1 = false

            currentText = textCrit2

            fetch("http://192.168.56.2:8081/critical2")
            .then(response => response.text())
            .then(text => console.log(text))
        }

        text.innerHTML = currentText
    }

    // link coloring
    // const normalColor = '#099e2f'
    // const critColor = '#f55c0a'
    // document.getElementById("3").style.stroke = normalColor
    // document.getElementById("3").style.strokeWidth = '5'
    // document.getElementById("1").style.stroke = critColor
    // document.getElementById("1").style.strokeWidth = '5'
    // document.getElementById("8").style.stroke = normalColor
    // document.getElementById("8").style.strokeWidth = '5'

    // document.getElementById("netStatus").innerHTML = 
    // 'Slice 1 (h1 <-> h3) : Active, Bandwidth: 10 Mbps <br>' +
    // 'Slice 2 (h2 <-> h4) : Active, Bandwidth: 3 Mbps <br>' +
    // 'Slice Crit1 (h5 <-> h6): Active, Bandwidth: 7 Mbps <br>' +
    // 'Slice Crit2 (h7 <-> h8): Not Active <br>'

    
}

function critical2Handler(){

    if (started){
        if (!crit1 && !crit2){

            crit2 = true

            currentText = textCrit2

            fetch("http://192.168.56.2:8081/critical2")
            .then(response => response.text())
            .then(text => console.log(text))
        } else if (crit1 && !crit2) {

            crit2 = true

            currentText = textBoth

            fetch("http://192.168.56.2:8081/critical12")
            .then(response => response.text())
            .then(text => console.log(text))
        } else if (!crit1 && crit2) {

            crit2 = false

            currentText = textDefault

            fetch("http://192.168.56.2:8081/default")
            .then(response => response.text())
            .then(text => console.log(text))
        } else {

            crit2 = false

            currentText = textCrit1

            fetch("http://192.168.56.2:8081/critical1")
            .then(response => response.text())
            .then(text => console.log(text))
        }
    }

    text.innerHTML = currentText
    // link coloring
    // const normalColor = '#11d698'
    // const critColor = '#b00222'
    // document.getElementById("7").style.stroke = normalColor
    // document.getElementById("7").style.strokeWidth = '5'
    // document.getElementById("0").style.stroke = critColor
    // document.getElementById("0").style.strokeWidth = '5'
    // document.getElementById("9").style.stroke = normalColor
    // document.getElementById("9").style.strokeWidth = '5'

    // document.getElementById("netStatus").innerHTML = 
    //     'Slice 1 (h1 <-> h3) : Active, Bandwidth: 3 Mbps <br>' +
    //     'Slice 2 (h2 <-> h4) : Active, Bandwidth: 10 Mbps <br>' +
    //     'Slice Crit1 (h5 <-> h6): Not Active <br>' +
    //     'Slice Crit2 (h7 <-> h8): Active, Bandwidth: 7 Mbps <br>'
}