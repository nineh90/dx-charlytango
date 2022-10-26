let loadedData;


async function init(){
    let JSON = './assets/JSON/member.json';
    let responseFromJSON = await fetch(JSON);
    loadedData = await responseFromJSON.json();
    setTimeout(forLoopCountryList, 500);
    renderHeadLine(); 
}

function renderHeadLine(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Mitgliederliste`;
            clearInterval(intervall)
            }
       });
    
} 

function forLoopCountryList(){ 
    allMemberList.innerHTML = "";
    for (let i = 0; i < loadedData.length; i++) {
        const countryImage = loadedData[i]['flag'];
        const countryName = loadedData[i]['country'];
        const preFix = loadedData[i]['prefix'];
        renderCountryList(countryImage, countryName, preFix, i);

    }
 
}   

function renderCountryList(countryImage, countryName, preFix, i){
    allMemberList.innerHTML += `
                                <div onclick="openDetailview(${i})" class="country-card">
                                    <div id="${countryName.toLowerCase()}" class="country-card-wrapper txt-center">
                                        <h3>
                                            ${countryName.toUpperCase()}
                                        </h3>
                                            <span class="fi fi-${countryImage} flag-icon"></span>
                                        <div class="prefix-wrapper">
                                            "${preFix}"
                                        </div>
                                        
                                    </div>
                                </div>
                                `;
}

function openDetailview(i){
    allMemberList.innerHTML = '';
    let memberJSON = loadedData[i]["member"];
    generateTableCurrentCountry();
    for (let j = 0; j < memberJSON.length; j++) {
        const callsign = memberJSON[j]['callsign'];
        const name = memberJSON[j]['name'];
        const city = memberJSON[j]['city'];
        const status = memberJSON[j]['status'];
        renderMemberListCurrentCountry(callsign, name, city, status, j);
               
    }
     
}

function checkForCbStatus(status, j){
    if(status == 'unknown'){
        let statusColor = document.getElementById(`CBSTATUS${j}`)
        statusColor.style.color = "orange";
    }
    if(status == 'active'){
        let statusColor = document.getElementById(`CBSTATUS${j}`)
        statusColor.style.color = "lime";
    }
    if(status == 'inactive'){
        let statusColor = document.getElementById(`CBSTATUS${j}`)
        statusColor.style.color = "red";
    }
  
    if(status == 'dead'){
        let statusColor = document.getElementById(`CBSTATUS${j}`)
        statusColor.style.color = "black";
    } 
    }

function generateTableCurrentCountry(){
    allMemberList.innerHTML = ` <div class="w-70">
                                    <h2 class="mobile-d-flex d-none txt-center">Tabellen sind Mobil nicht verfügbar.<br>
                                        schau gerne in der Desktop Version vorbei
                                    </h2>
                                    <table class="txt-center mobile-table mobile-hide">
                                        <thead>
                                            <tr>
                                                <th>Rufzeichen</th>
                                                <th>Name</th>
                                                <th>Stadt</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody id="currentMemberList"></tbody>    
                                    </table>  
                                </div>`;
                             
                    
}

function renderMemberListCurrentCountry(callsign, name, city, status, j ){
    currentMemberList.innerHTML += `<tr>
                                        <td>${callsign}</td>
                                        <td>${name.toUpperCase()}</td>
                                        <td>${city.toUpperCase()}</td>
                                        <td id="CBSTATUS${j}">${status.toUpperCase()}</td>
                                    </tr>`
    checkForCbStatus(status,j)
                                                                   
}