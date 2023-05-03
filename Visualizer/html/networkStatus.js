const topology = document.getElementById("topology");
const netSatusContainer = document.createElement("div");
netSatusContainer.id = "netStatusContainer";
const netStatus = document.createElement("p");
netStatus.id = "netStatus"

netSatusContainer.appendChild(netStatus)

topology.parentNode.insertBefore(netSatusContainer, topology.nextSibling)

// id assignment -> to remove and replace with manual config.
setTimeout(() => {  
    var children = topology.children;
    for(var i=0; i<children.length; i++){
        var child = children[i];
        child.id = 'node'+i;
    }
}, 2000);