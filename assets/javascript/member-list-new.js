let loadedData;
let renderedMember;
let allMember;
let memberFilter = false;
let filterARR;


window.onload = getAllData();

async function getAllData(){
    renderHeadLine();
    let JSON = './assets/JSON/member.json';
    let responseFromJSON = await fetch(JSON);
    loadedData = await responseFromJSON.json();
    forLoopCountries();
}  

function renderHeadLine(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Mitgliederliste`;
            clearInterval(intervall);
            }
        });
}

function forLoopCountries(){
    for (let i = 0; i < loadedData.length; i++) {
        const countryImage = loadedData[i]['flag'];
        const countryName = loadedData[i]['country'];
        const preFix = loadedData[i]['prefix'];
        renderCountryList(countryImage, countryName, preFix, i);
    }
}

function renderCountryList(countryImage, countryName, preFix, i){
    let countyContainer = document.getElementById('memberlist-container');
    countyContainer.innerHTML += `<div onclick="showMember(${i})" class="country-card">
                                    <div id="${countryName.toLowerCase()}" class="country-card-wrapper txt-center">
                                        <h3>
                                            ${countryName.toUpperCase()}
                                        </h3>
                                            <span class="fi fi-${countryImage} flag-icon"></span>
                                        <p class="prefix-wrapper">
                                            "${preFix}"
                                        </p>
                                    </div>
                                </div>`;
}

function checkMemberFilter(filter){
    if(filter === 'all'){
        memberFilter = true;
        showMember();
        closeSearchContainer();   
        console.table(filterARR);
    }
    if(filter === 'active'){
        closeSearchContainer();
        let filterStatus = allMember.filter(status => status.status == `${filter}`); 
        memberFilter = true;
        filterARR = filterStatus;
        renderedMember = 0;
        showMember();
        console.table(filterStatus);
    }
    if(filter === 'unknown'){
        let filterStatus = allMember.filter(status => status.status == `${filter}`);
        console.table(filterStatus);
   }
   if(filter === 'dead'){
        let filterStatus = allMember.filter(status => status.status == `${filter}`);
        console.table(filterStatus);
   }
    console.log(filter);
}

function showMember(i){
    renderedMember = 50;
    generateTable();
    if(memberFilter === true){
        console.table(filterARR);
        for (let i = 0; i < filterARR.length; i++) {
            const callsign = filterARR[i]['callsign'];
            const name = filterARR[i]['name'];
            const city = filterARR[i]['city'];
            const status = filterARR[i]['status'];
            renderMemberList(callsign, name, city, status);
            if(i == renderedMember - 1)  break
        }
    } else {
        allMember = loadedData[i]['member'];
        document.getElementById('memberMenu').style.display = 'flex';
        for (let i = 0; i < allMember.length; i++) {
            const callsign = allMember[i]['callsign'];
            const name = allMember[i]['name'];
            const city = allMember[i]['city'];
            const status = allMember[i]['status'];
            renderMemberList(callsign, name, city, status);
            if(i == renderedMember) break
            // if(i == allMember.length -1) {
            //     renderedMember = allMember.length
            //     break
            // }
        }
    }    
    document.addEventListener("scroll", renderNextMembers, true);    
    
}

function renderNextMembers(){
    let plusMember = +50;
    let result = renderedMember + plusMember;
    if(memberFilter === true){
        for (let i = 0; i < filterARR.length; i++) {
            const callsign = filterARR[i]['callsign'];
            const name = filterARR[i]['name'];
            const city = filterARR[i]['city'];
            const status = filterARR[i]['status'];
            renderMemberList(callsign, name, city, status);
            if(i == renderedMember - 1) break  
            if(i == filterARR.length){

            }
        }
    } else {
        for (let i =  renderedMember; i < allMember.length; i++) {
            const callsign = allMember[i]['callsign'];
            const name = allMember[i]['name'];
            const city = allMember[i]['city'];
            const status = allMember[i]['status'];
            if (i == result){
                renderedMember = result;
                document.addEventListener('scroll', renderNextMembers, true);  
                break;
            }
            // if(i == allMember.length - 1){
            //     renderedMember = allMember.length; 
            // }
            renderMemberList(callsign, name, city, status);
        }
    }  
}


function generateTable(){
    let memberContainer = document.getElementById('memberlist-container');
    memberContainer.innerHTML = ` 
                                <div class="w-70 ws-100 d-flex align-center justify-center column">
                                    <h2 id="land" class="txt-center"></h2>    
                                    <table class="txt-center">
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

function renderMemberList(callsign, name, city, status){
    let memberList = document.getElementById('currentMemberList');
    memberList.innerHTML += `<tr>
                                <td>${callsign}</td>
                                <td>${name.toUpperCase()}</td>
                                <td>${city.toUpperCase()}</td>
                                <td>${status.toUpperCase()}</td>
                            </tr>`
}

function openSearchContainer(){
    document.body.classList.add('overflow-hidden');
    document.getElementById('memberMenu').style.display = 'none';
    document.getElementById('searchContainerOverlay').style.display = 'flex';
}

function closeSearchContainer(){
    let searchContainerOverlay = document.getElementById('searchContainerOverlay');
    if(searchContainerOverlay){
        document.body.classList.remove('overflow-hidden');
        document.getElementById('memberMenu').style.display = 'flex'; 
        searchContainerOverlay.style.display = 'none';
    }    
}
