let loadedData;


async function init(){
    let JSON = './assets/JSON/member.json';
    let responseFromJSON = await fetch(JSON);
    loadedData = await responseFromJSON.json();
    setTimeout(forLoopCountryList, 500);

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
        renderMemberListCurrentCountry(callsign, name, city, status);        

    }

}

function generateTableCurrentCountry(){
    allMemberList.innerHTML = ` <div class="w-50">
                                    <table class="txt-center mobile-table">
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

function renderMemberListCurrentCountry(callsign, name, city, status){
    currentMemberList.innerHTML += `<tr>
                                        <td>${callsign}</td>
                                        <td>${name.toUpperCase()}</td>
                                        <td>${city.toUpperCase()}</td>
                                        <td>${status.toUpperCase()}</td>
                                    </tr>`
}