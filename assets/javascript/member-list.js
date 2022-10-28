let loadedData;
let allMemberList;
let spinner;

window.onload = function () { 
    waitForMemberlist();
}

function waitForMemberlist() {
    setTimeout(() => {
        allMemberList = document.getElementById('memberlist-container'); 
        if (allMemberList) {
            init();
        } else {
            waitForMemberlist();
        }
    });
}

async function init(){
    let JSON = './assets/json/member.json';
    let responseFromJSON = await fetch(JSON);
    spinner = document.getElementById('loading-spinner');
    loadedData = await responseFromJSON.json();
    forLoopCountryList();
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
    
    for (let i = 0; i < loadedData.length; i++) {
        const countryImage = loadedData[i]['flag'];
        const countryName = loadedData[i]['country'];
        const preFix = loadedData[i]['prefix'];
        renderCountryList(countryImage, countryName, preFix, i);

    }
 
}   

function renderCountryList(countryImage, countryName, preFix, i){
    allMemberList.innerHTML += `<div onclick="openDetailview(${i})" class="country-card">
                                    <div id="${countryName.toLowerCase()}" class="country-card-wrapper txt-center">
                                        <h3>
                                            ${countryName.toUpperCase()}
                                        </h3>
                                            <span class="fi fi-${countryImage} flag-icon"></span>
                                        <p class="prefix-wrapper">
                                            "${preFix}"
                                        </p>
                                        
                                    </div>
                                </div>
                                `;
}

function openDetailview(i){
    allMemberList.innerHTML = '';
    allMemberList.style.display = 'none';
    spinner.style.display = "block";
    setTimeout( () => {
        createMembers(i);
    }, 100)
}

function createMembers(i) {
    let memberJSON = loadedData[i]["member"];
    generateTableCurrentCountry();
    for (let j = 0; j < memberJSON.length; j++) {
        const callsign = memberJSON[j]['callsign'];
        const name = memberJSON[j]['name'];
        const city = memberJSON[j]['city'];
        const status = memberJSON[j]['status'];
        renderMemberListCurrentCountry(callsign, name, city, status);        
        if (j == memberJSON.length -1) {
            allMemberList.style.display = 'flex';
            spinner.style.display = "none";
        }
    }
}

function generateTableCurrentCountry(){
    allMemberList.innerHTML = ` <div class="w-70"> 
                                    <h2 class="mobile-d-flex d-none txt-center">Tabellen sind Mobil nicht verfügbar.<br>
                                        schau gerne in der Desktop Version vorbei
                                    </h2>
                                </div>    
                                    <table class="txt-center mobile-hide">
                                        <thead>
                                            <tr>
                                                <th>Rufzeichen</th>
                                                <th>Name</th>
                                                <th>Stadt</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody id="currentMemberList"></tbody>    
                                    </table>  `;
                             
                    
}

function renderMemberListCurrentCountry(callsign, name, city, status){
    currentMemberList.innerHTML += `<tr>
                                        <td>${callsign}</td>
                                        <td>${name.toUpperCase()}</td>
                                        <td>${city.toUpperCase()}</td>
                                        <td>${status.toUpperCase()}</td>
                                    </tr>`
}