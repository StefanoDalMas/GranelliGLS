import {positionLink, positionNode, positionPort} from './topologyLinks.js'

const topology = document.getElementById("topology");
const netStatusContainer = document.createElement("div");
netStatusContainer.id = "netStatusContainer";

const netStatus = document.createElement("p");
netStatus.id = "netStatus"

netStatusContainer.appendChild(netStatus)


topology.parentNode.insertBefore(netStatusContainer, topology.nextSibling)
setTimeout(() => {  
    var children = topology.children;
    let j = 0;
    for(var i=0; i<children.length; i++){
        var child = children[i];
        if(child.className.baseVal === 'link') {
            positionLink(child, i)
        } else if (child.className.baseVal === 'node') {
            positionNode(child, child.getElementsByTagName('text').item(0).innerHTML)
        } else if (child.className.baseVal === 'port') {
            positionPort(child, child.getElementsByTagName('text').item(0).innerHTML)
        }
    }
}, 7000);