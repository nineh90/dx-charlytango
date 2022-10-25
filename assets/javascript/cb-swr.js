const SWR = [{"swr":"1","loss":"0"},{"swr":"1.22","loss":"1"},{"swr":"1.5","loss":"4"},{"swr":"1.85","loss":"9"},{"swr":"2.33","loss":"16"},{"swr":"3","loss":"25"},{"swr":"4","loss":"36"},{"swr":"5.66","loss":"49"},{"swr":"9","loss":"64"},{"swr":"19","loss":"81"},{"swr":"00","loss":"100"}]
const RG58C = [{"length":"5","absorption":"0.45","reduction":"10","deterioration":"5"},{"length":"7.5","absorption":"0.67","reduction":"14","deterioration":"8"},{"length":"10","absorption":"0.9","reduction":"19","deterioration":"11"},{"length":"12.5","absorption":"1.12","reduction":"23","deterioration":"16"},{"length":"15","absorption":"1.35","reduction":"27","deterioration":"17"},{"length":"20","absorption":"1.8","reduction":"34","deterioration":"23"},{"length":"25","absorption":"2.25","reduction":"40","deterioration":"29"},{"length":"30","absorption":"2.7","reduction":"47","deterioration":"36"},{"length":"40","absorption":"3.6","reduction":"57","deterioration":"51"},{"length":"50","absorption":"4.5","reduction":"65","deterioration":"68"}]
const RG213 = [{"length":"5","absorption":"0.15","reduction":"3","deterioration":"1.7"},{"length":"7.5","absorption":"0.22","reduction":"5","deterioration":"2.5"},{"length":"10","absorption":"0.3","reduction":"7","deterioration":"3.5"},{"length":"12.5","absorption":"0.37","reduction":"8","deterioration":"4.3"},{"length":"15","absorption":"0.45","reduction":"10","deterioration":"5.3"},{"length":"20","absorption":"0.6","reduction":"13","deterioration":"7.2"},{"length":"25","absorption":"0.75","reduction":"15","deterioration":"9"},{"length":"30","absorption":"0.9","reduction":"19","deterioration":"11"},{"length":"40","absorption":"0.9","reduction":"24","deterioration":"15"},{"length":"50","absorption":"1.5","reduction":"29","deterioration":"18.8"}]

function initCbSWR(){
    forLoopSwr();
    forLoopRg58c();
    forLoopRg213();
    renderCbSwrHeadLine();
}

function renderCbSwrHeadLine(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `SWR - Dämpfung - Verlust`;
            clearInterval(intervall)
            }
       });
}

function forLoopSwr(){
    for (let i = 0; i < SWR.length; i++) {
        const swr = SWR[i]['swr'];
        const loss = SWR[i]['loss'];
        renderSwrTable(swr, loss);
    }
}

function renderSwrTable(swr, loss){
    let swrTable = document.getElementById('swr');
        swrTable.innerHTML += `<tr>
                                <td>${swr}</td>
                                <td>${loss} %</td>
                                </tr>`
}

function forLoopRg58c(){
    for (let j = 0; j  < RG58C.length; j++) {
        const length = RG58C[j]['length'];
        const absorption = RG58C[j]['absorption'];
        const reduction = RG58C[j]['reduction'];
        const deterioration = RG58C[j]['deterioration'];
        renderRg58cTable(length, absorption, reduction, deterioration)
        
    }
}

function renderRg58cTable(length, absorption, reduction, deterioration){
    let rg58cTable = document.getElementById('rg58c');
    rg58cTable.innerHTML += `<tr>
                                <td>${length} M</td>
                                <td>${absorption}db</td>
                                <td>${reduction} %</td>
                                <td>${deterioration} %</td>
                            </tr>`;
}

function forLoopRg213(){
    for (let k = 0; k < RG213.length; k++) {
        const length = RG213[k]['length'];
        const absorption = RG213[k]['absorption'];
        const reduction = RG213[k]['reduction'];
        const deterioration = RG213[k]['deterioration'];
        renderRg213Table(length, absorption, reduction, deterioration);
    }
}

function renderRg213Table(length, absorption, reduction, deterioration){
    let rg213Table = document.getElementById('rg213');
    rg213Table.innerHTML += `<tr>
                                <td>${length} M</td>
                                <td>${absorption}db</td>
                                <td>${reduction} %</td>
                                <td>${deterioration} %</td>
                            </tr>`;
}