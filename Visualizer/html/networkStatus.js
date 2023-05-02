const topology = document.getElementById("topology");
const netSatusContainer = document.createElement("div");
netSatusContainer.id = "netStatusContainer";
const netStatus = document.createElement("p");
netStatus.id = "netStatus"
netStatus.innerHTML = "prova"

netSatusContainer.appendChild(netStatus)

topology.parentNode.insertBefore(netSatusContainer, topology.nextSibling)

// prove
setTimeout(() => {  
    var children = topology.children;
    for(var i=0; i<children.length; i++){
        var child = children[i];
        child.id = i;
    }
}, 1000);
