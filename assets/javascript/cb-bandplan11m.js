let loadedDataBandPlan;

async function initCbBandplan(){
    let JSON = './assets/JSON/cbbandplan11m.json';
    let responseFromJSON = await fetch(JSON);
    loadedDataBandPlan = await responseFromJSON.json();
    renderCbBandPlan();
    console.log(loadedDataBandPlan);
}        

function renderCbBandPlan(){
    let bandPlanTable = document.getElementById('cbChannelList');
    for (let i = 0; i < loadedDataBandPlan.length; i++) {
        const cbChannel = loadedDataBandPlan[i]['cbChannel'];
        const mhz = loadedDataBandPlan[i]['mhz'];
        const modulationType = loadedDataBandPlan[i]['modulationType'];
        const use = loadedDataBandPlan[i]['use'];
        renderTableElement(bandPlanTable, cbChannel, mhz, modulationType, use);
    }
}

function  renderTableElement(bandPlanTable, cbChannel, mhz, modulationType, use){
    bandPlanTable.innerHTML += `<tr>
                                    <td>${cbChannel}</td>
                                    <td>${mhz}</td>
                                    <td>${modulationType.toUpperCase()}</td>
                                    <td>${use}</td>
                                </tr>`;
}
