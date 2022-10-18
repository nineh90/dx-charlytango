let circuitDiagram;


async function initCbOccupancy(){
    await getDataFromOccupancyJSON();
    setTimeout(forLoopMicrophoneAssignment, 500);
}

async function getDataFromOccupancyJSON(){
    let JSON = './assets/JSON/cb-microphone-assignment.json';
    let responseFromJSON = await fetch(JSON);
    circuitDiagram = await responseFromJSON.json();
}

function forLoopMicrophoneAssignment(){
    let table = document.getElementById('microphoneAssignment');
    for (let i = 0; i < circuitDiagram.length; i++) {
        const deviceType = circuitDiagram[i]['deviceType'];
        const plugType = circuitDiagram[i]['plugType'];
        const pin1 = circuitDiagram[i]['pin1'];
        const pin2 = circuitDiagram[i]['pin2'];
        const pin3 = circuitDiagram[i]['pin3'];
        const pin4 = circuitDiagram[i]['pin4'];
        const pin5 = circuitDiagram[i]['pin5'];
        const pin6 = circuitDiagram[i]['pin6'];
        const pin7 = circuitDiagram[i]['pin7'];
        const pin8 = circuitDiagram[i]['pin8'];
        addAssignmentsToTable(table, deviceType, plugType, pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8);   
    } 
}

function addAssignmentsToTable(table, deviceType, plugType, pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8){
    table.innerHTML += `<tr>
                            <td>${deviceType}</td>
                            <td>${plugType}</td>
                            <td>${pin1}</td>
                            <td>${pin2}</td>
                            <td>${pin3}</td>
                            <td>${pin4}</td>
                            <td>${pin5}</td>
                            <td>${pin6}</td>
                            <td>${pin7}</td>
                            <td>${pin8}</td>
                        </tr>`;
}