const s1x = '350'
const s1y = '400'
const s2x = '600'
const s2y = '400'
const s3x = '480'
const s3y = '250'
const row1 = '100'
const row2 = '250'
const row3 = '450'
const row4 = '600'
const col1 = '100'
const col2 = '200'
const col3 = s3x
const col4 = '700'
const col5 = '800'
const portOffset = 35


export const positionLink = function(child, i){
    child.id = 'link'+i
    switch (i) {
        case 0:
            child.setAttribute('x1', col1)
            child.setAttribute('y1', row2)
            child.setAttribute('x2', s1x)
            child.setAttribute('y2', s1y)
            child.classList.add('slice1')
            break;
        case 1:
            child.setAttribute('x1', s1x)
            child.setAttribute('y1', s1y)
            child.setAttribute('x2', s3x)
            child.setAttribute('y2', s3y)
            child.classList.add('slice1')
            child.classList.add('crit2')
            break;
        case 2:
            child.setAttribute('x1', s3x)
            child.setAttribute('y1', s3y)
            child.setAttribute('x2', s2x)
            child.setAttribute('y2', s2y)
            child.classList.add('slice1')
            break;
        case 3:
            child.setAttribute('x1', s2x)
            child.setAttribute('y1', s2y)
            child.setAttribute('x2', col5)
            child.setAttribute('y2', row2)
            child.classList.add('slice1')
            break;
        case 4:
            child.setAttribute('x1', col1)
            child.setAttribute('y1', row3)
            child.setAttribute('x2', s1x)
            child.setAttribute('y2', s1y)
            child.classList.add('slice2')
            break;
        case 5:
            child.setAttribute('x1', s1x)
            child.setAttribute('y1', s1y)
            child.setAttribute('x2', s2x)
            child.setAttribute('y2', s2y)
            child.classList.add('slice2')
            child.classList.add('crit1')
            break;
        case 6:
            child.setAttribute('x1', s2x)
            child.setAttribute('y1', s2y)
            child.setAttribute('x2', col5)
            child.setAttribute('y2', row3)
            child.classList.add('slice2')
            break;
        case 7:
            child.setAttribute('x1', col2)
            child.setAttribute('y1', row4)
            child.setAttribute('x2', s1x)
            child.setAttribute('y2', s1y)
            child.classList.add('crit1')
            break;
        case 8:
            child.setAttribute('x1', s2x)
            child.setAttribute('y1', s2y)
            child.setAttribute('x2', col4)
            child.setAttribute('y2', row4)
            child.classList.add('crit1')
            break;
        case 9:
            child.setAttribute('x1', s1x)
            child.setAttribute('y1', s1y)
            child.setAttribute('x2', col2)
            child.setAttribute('y2', row1)
            child.classList.add('crit2')
            break;
        case 10:
            child.setAttribute('x1', s3x)
            child.setAttribute('y1', s3y)
            child.setAttribute('x2', col3)
            child.setAttribute('y2', row1)
            child.classList.add('crit2')
            break;
        default:
            break;
    }
}

export const positionNode = function(child, text) {
    switch (text) {
        case 'dpid: 1':
            child.id = 'sw1'
            child.style.transform = 'translate('+ s1x+'px, '+s1y+'px)'
            break;
        case 'dpid: 2':
            child.id = 'sw2'
            child.style.transform = 'translate('+ s2x+'px, '+s2y+'px)'
            break;
        case 'dpid: 3':
            child.id = 'sw3'
            child.style.transform = 'translate('+ s3x+'px, '+s3y+'px)'
            break;
        case 'mac: 00:00:00:00:00:01':
            child.id = 'h1'
            child.style.transform = 'translate('+ col1+'px, '+row2+'px)'
            break;
        case 'mac: 00:00:00:00:00:02':
            child.id = 'h2'
            child.style.transform = 'translate('+ col1+'px, '+row3+'px)'
            break;
        case 'mac: 00:00:00:00:00:03':
            child.id = 'h3'
            child.style.transform = 'translate('+ col5+'px, '+row2+'px)'
            break;
        case 'mac: 00:00:00:00:00:04':
            child.id = 'h4'
            child.style.transform = 'translate('+ col5+'px, '+row3+'px)'
            break;
        case 'mac: 00:00:00:00:00:05':
            child.id = 'h5'
            child.style.transform = 'translate('+ col2+'px, '+row4+'px)'
            break;
        case 'mac: 00:00:00:00:00:06':
            child.id = 'h6'
            child.style.transform = 'translate('+ col4+'px, '+row4+'px)'
            break;
        case 'mac: 00:00:00:00:00:07':
            child.id = 'h7'
            child.style.transform = 'translate('+ col2+'px, '+row1+'px)'
            break;
        case 'mac: 00:00:00:00:00:08':
            child.id = 'h8'
            child.style.transform = 'translate('+ col3+'px, '+row1+'px)'
            break;
        default:
            break;
    }
}

var ports = [3, 3, 3, 2, 2, 1]
var tmpCoordX = 0
var tmpCoordY = 0
export const positionPort = function(child, text) {
    if (text === '1') {
        switch (ports[0]) {
            case 3:
                ports[0] -= 1
                child.id = '1first'
                tmpCoordX = parseInt(s1x) + portOffset
                tmpCoordY = parseInt(s1y) + 0
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            case 2:
                ports[0] -= 1
                child.id = '1second'
                tmpCoordX = parseInt(s2x) - portOffset
                tmpCoordY = parseInt(s2y) + 0
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            case 1:
                ports[0] -= 1
                child.id = '1third'
                tmpCoordX = parseInt(s3x) + portOffset * 3/4
                tmpCoordY = parseInt(s3y) + portOffset
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            default:
                break;
        }
    } else if (text === '2') {
        switch (ports[1]) {
            case 3:
                ports[1] -= 1
                child.id = '2first'
                tmpCoordX = parseInt(s1x) + portOffset * 3/4
                tmpCoordY = parseInt(s1y) - portOffset * 3/4
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            case 2:
                ports[1] -= 1
                child.id = '2second'
                tmpCoordX = parseInt(s2x) - portOffset * 3/4
                tmpCoordY = parseInt(s2y) - portOffset * 3/4
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            case 1:
                ports[1] -= 1
                child.id = '2third'
                tmpCoordX = parseInt(s3x) - portOffset * 3/4
                tmpCoordY = parseInt(s3y) + portOffset
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            default:
                break;
        }
    } else if (text === '3') {
        switch (ports[2]) {
            case 3:
                ports[2] -= 1
                child.id = '3first'
                tmpCoordX = parseInt(s1x) - portOffset 
                tmpCoordY = parseInt(s1y) - portOffset/2
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            case 2:
                ports[2] -= 1
                child.id = '3second'
                tmpCoordX = parseInt(s2x) + portOffset 
                tmpCoordY = parseInt(s2y) - portOffset/2
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            case 1:
                ports[2] -= 1
                child.id = '3third'
                tmpCoordX = parseInt(s3x) + 0
                tmpCoordY = parseInt(s3y) - portOffset
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            default:
                break;
        }
    } else if (text === '4') {
        switch (ports[3]) {
            case 2:
                ports[3] -= 1
                child.id = '4first'
                tmpCoordX = parseInt(s1x) - portOffset 
                tmpCoordY = parseInt(s1y) + portOffset/2
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            case 1:
                ports[3] -= 1
                child.id = '4second'
                tmpCoordX = parseInt(s2x) + portOffset 
                tmpCoordY = parseInt(s2y) + portOffset/2
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            default:
                break;
        }
    } else if (text === '5') {
        switch (ports[4]) {
            case 2:
                ports[4] -= 1
                child.id = '5first'
                tmpCoordX = parseInt(s1x) - portOffset/2 
                tmpCoordY = parseInt(s1y) + portOffset * 3/4
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            case 1:
                ports[4] -= 1
                child.id = '5second'
                tmpCoordX = parseInt(s2x) + portOffset/2 
                tmpCoordY = parseInt(s2y) + portOffset * 3/4
                child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
                break;
            default:
                break;
        }
    } else if (text === '6') {
        child.id = '6first'
        tmpCoordX = parseInt(s1x) - portOffset/2 
        tmpCoordY = parseInt(s1y) - portOffset * 3/4
        child.style.transform = 'translate('+ (tmpCoordX)+'px, '+(tmpCoordY)+'px)'
    }
}