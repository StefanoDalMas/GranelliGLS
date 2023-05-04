const pText = document.getElementById("netStatus")

var started = false
var crit1 = false
var crit2 = false

var currentText = ''
var objList = []

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

    const pText = document.getElementById("netStatus")

    if (!started){

        started = true
        document.getElementById("crit1").disabled = false
        document.getElementById("crit2").disabled = false

        objList = document.getElementsByClassName("slice1")
        for(var i=0; i<objList.length; i++){
            var link = objList[i]
            link.classList.add('activeSlice')
        }
        objList = document.getElementsByClassName("slice2")
        for(var i=0; i<objList.length; i++){
            var link = objList[i]
            link.classList.add('activeSlice')
        }   

        currentText = textDefault

        pText.innerHTML = currentText

        fetch("http://192.168.56.2:8081/default")
        .then(response => response.text())
        .then(text => console.log(text))
    } else {
        pText.innerHTML = 'Network already started'
        setTimeout(() => {  
            pText.innerHTML = currentText
        }, 2000);
    }
    
}

function stopHandler(){

    const pText = document.getElementById("netStatus")

    if (started){
        started = false
        crit1 = false
        crit2 = false

        document.getElementById("crit1").checked = false
        document.getElementById("crit2").checked = false

        document.getElementById("crit1").disabled = true
        document.getElementById("crit2").disabled = true

        objList = document.getElementsByClassName("slice1")
        for(var i=0; i<objList.length; i++){
            var link = objList[i]
            link.classList.remove('activeSlice')
        }
        objList = document.getElementsByClassName("slice2")
        for(var i=0; i<objList.length; i++){
            var link = objList[i]
            link.classList.remove('activeSlice')
        }
        objList = document.getElementsByClassName("crit1")
        for(var i=0; i<objList.length; i++){
            var link = objList[i]
            link.classList.remove('activeCrit')
        }
        objList = document.getElementsByClassName("crit2")
        for(var i=0; i<objList.length; i++){
            var link = objList[i]
            link.classList.remove('activeCrit')
        }
        document.getElementById('link1').classList.remove('clogged1')
        document.getElementById('link5').classList.remove('clogged2')

        pText.innerHTML = 'Network stopped'

        currentText = ''
        setTimeout(() => {  
            pText.innerHTML = currentText
        }, 2000);

        fetch("http://192.168.56.2:8081/stop")
        .then(response => response.text())
        .then(text => console.log(text))
    } else {
        pText.innerHTML = 'Network already stopped'

        setTimeout(() => {  
            pText.innerHTML = currentText
        }, 2000);
    }

}


function critical1Handler(){

    const pText = document.getElementById("netStatus")

    if (started){

        if (!crit1 && !crit2){
            crit1 = true

            currentText = textCrit1

            objList = document.getElementsByClassName("crit1")
            for(var i=0; i<objList.length; i++){
                var link = objList[i]
                link.classList.add('activeCrit')
            }
            document.getElementById('link5').classList.add('clogged2')

            fetch("http://192.168.56.2:8081/critical1")
            .then(response => response.text())
            .then(text => console.log(text))

        } else if (crit1 && !crit2) {
            
            crit1 = false

            currentText = textDefault

            objList = document.getElementsByClassName("crit1")
            for(var i=0; i<objList.length; i++){
                var link = objList[i]
                link.classList.remove('activeCrit')
            }
            document.getElementById('link5').classList.remove('clogged2')

            fetch("http://192.168.56.2:8081/default")
            .then(response => response.text())
            .then(text => console.log(text))
        } else if (!crit1 && crit2) {

            crit1 = true

            currentText = textBoth

            objList = document.getElementsByClassName("crit1")
            for(var i=0; i<objList.length; i++){
                var link = objList[i]
                link.classList.add('activeCrit')
            }
            document.getElementById('link5').classList.add('clogged2')

            fetch("http://192.168.56.2:8081/critical12")
            .then(response => response.text())
            .then(text => console.log(text))
        } else {    

            crit1 = false

            currentText = textCrit2

            objList = document.getElementsByClassName("crit1")
            for(var i=0; i<objList.length; i++){
                var link = objList[i]
                link.classList.remove('activeCrit')
            }
            document.getElementById('link5').classList.remove('clogged2')


            fetch("http://192.168.56.2:8081/critical2")
            .then(response => response.text())
            .then(text => console.log(text))
        }

        pText.innerHTML = currentText
    }
    
}

function critical2Handler(){

    const pText = document.getElementById("netStatus")

    if (started){
        if (!crit1 && !crit2){

            crit2 = true

            currentText = textCrit2

            objList = document.getElementsByClassName("crit2")
            for(var i=0; i<objList.length; i++){
                var link = objList[i]
                link.classList.add('activeCrit')
            }
            document.getElementById('link1').classList.add('clogged1')

            fetch("http://192.168.56.2:8081/critical2")
            .then(response => response.text())
            .then(text => console.log(text))
        } else if (crit1 && !crit2) {

            crit2 = true

            currentText = textBoth

            objList = document.getElementsByClassName("crit2")
            for(var i=0; i<objList.length; i++){
                var link = objList[i]
                link.classList.add('activeCrit')
            }
            document.getElementById('link1').classList.add('clogged1')

            fetch("http://192.168.56.2:8081/critical12")
            .then(response => response.text())
            .then(text => console.log(text))
        } else if (!crit1 && crit2) {

            crit2 = false

            currentText = textDefault

            objList = document.getElementsByClassName("crit2")
            for(var i=0; i<objList.length; i++){
                var link = objList[i]
                link.classList.remove('activeCrit')
            }
            document.getElementById('link1').classList.remove('clogged1')

            fetch("http://192.168.56.2:8081/default")
            .then(response => response.text())
            .then(text => console.log(text))
        } else {

            crit2 = false

            currentText = textCrit1

            objList = document.getElementsByClassName("crit2")
            for(var i=0; i<objList.length; i++){
                var link = objList[i]
                link.classList.remove('activeCrit')
            }
            document.getElementById('link1').classList.remove('clogged1')

            fetch("http://192.168.56.2:8081/critical1")
            .then(response => response.text())
            .then(text => console.log(text))
        }
    }

    pText.innerHTML = currentText

}