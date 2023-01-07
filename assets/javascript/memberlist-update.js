window.onload = getAllData();

let loadedData;
let renderedMember;
let allMember;
let activeMember;
let unknownMember;
let deadMember;

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

function showMember(i){
    window.scrollTo(0, 0);
    renderedMember = 50;
    generateTable();
    document.getElementById('land').innerHTML = loadedData[i]['country'];
    allMember = loadedData[i]['member'];
    generateMemberFilter();
    document.getElementById('memberMenu').style.display = 'flex';
    for (let i = 0; i < allMember.length; i++) {
        const callsign = allMember[i]['callsign'];
        const name = allMember[i]['name'];
        const city = allMember[i]['city'];
        const status = allMember[i]['status'];
        renderMemberList(callsign, name, city, status);
        if(i == renderedMember) break
        if(i == allMember.length -1) {
            renderedMember = allMember.length
            break
        }
    }
    document.addEventListener("scroll", renderNextMembers); 
}

function renderNextMembers(){
    let plusMember = +50;
    let result = renderedMember + plusMember;
        for (let i =  renderedMember; i < allMember.length; i++) {
            const callsign = allMember[i]['callsign'];
            const name = allMember[i]['name'];
            const city = allMember[i]['city'];
            const status = allMember[i]['status'];
            if (i == result){
                renderedMember = result;
                document.addEventListener('scroll', renderNextMembers);  
                break;
            }
            if (i == allMember.length -1){
                renderedMember = allMember.length;
                document.removeEventListener("scroll", renderNextMembers);  
            }
            renderMemberList(callsign, name, city, status);
    }  
}

function generateMemberFilter(){
    activeMember = allMember.filter(status => status.status == `active`);
    unknownMember = allMember.filter(status => status.status == `unknown`);
    deadMember = allMember.filter(status => status.status == `dead`);
}

function generateTable(){
    let memberTableContainer = document.getElementById('memberTableContainer');
    memberTableContainer.classList.remove('d-none');
    memberTableContainer.classList.add('d-flex');
    document.getElementById('memberlist-container').classList.add('d-none');

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

function checkMemberFilter(filter){
    document.removeEventListener('scroll', renderNextMembers);
    document.removeEventListener('scroll', renderNextFilteredMember);
    renderedMember = 0;
    ifStatusIsAllMember(filter);
    ifStatusIsActive(filter);
    ifStatusIsUnknown(filter);
    ifStatusIsDead(filter);
}

function ifStatusIsAllMember(filter){
    if(filter === 'all'){
        
        renderFilteredMember(allMember);
        closeSearchContainer();
    }
}

function ifStatusIsActive(filter){
    if(filter === 'active'){
        if(activeMember.length < 1){
            alert('keine Aktiven Mitglieder vorhanden')
        } else {
            renderFilteredMember(activeMember);
            closeSearchContainer();
        }    
    }
}

function ifStatusIsUnknown(filter){
    if(filter === 'unknown'){
        renderFilteredMember(unknownMember);
        closeSearchContainer();
    }
}

function ifStatusIsDead(filter){
    if(filter === 'dead'){
        if(deadMember.length < 1){
            alert('Keine Mitglieder gefunden')
        } else {
            renderFilteredMember(deadMember);
            closeSearchContainer();
        }    
    }
}


function renderFilteredMember(choosenFilter){
    window.scrollTo(0, 0);
    renderedMember = 50;
    let memberList = document.getElementById('currentMemberList');
    memberList.innerHTML = '';
    for (let i = 0; i < choosenFilter.length; i++) {
        const callsign = choosenFilter[i]['callsign'];
        const name = choosenFilter[i]['name'];
        const city = choosenFilter[i]['city'];
        const status = choosenFilter[i]['status'];
        renderMemberList(callsign, name, city, status);
        if(i == renderedMember) break   
        if (i == choosenFilter.length -1){
            renderedMember = choosenFilter.length;
            break 
        } 
    }
    document.addEventListener('scroll', renderNextFilteredMember(choosenFilter));
}

function renderNextFilteredMember(choosenFilter){
    let plusMember = +50;
    let result = renderedMember + plusMember;
        for (let i =  renderedMember; i < choosenFilter.length; i++) {
            const callsign = choosenFilter[i]['callsign'];
            const name = choosenFilter[i]['name'];
            const city = choosenFilter[i]['city'];
            const status = choosenFilter[i]['status'];
            if (i == result){
                renderedMember = result;
                document.addEventListener('scroll', renderNextFilteredMember(choosenFilter));  
                break;
            }
            if (i == choosenFilter.length -1){
                renderedMember = choosenFilter.length;
                document.removeEventListener('scroll', renderNextFilteredMember(choosenFilter));  
            }
            renderMemberList(callsign, name, city, status);
    }  
}

function openSearchContainer(){
    document.body.classList.add('overflow-hidden');
    document.getElementById('memberMenu').style.display = 'none';
    document.getElementById('searchContainerOverlay').style.display = 'flex';
}

function closeSearchContainer(){
    let searchContainerOverlay = document.getElementById('searchContainerOverlay');
    document.body.classList.remove('overflow-hidden');
    document.getElementById('memberMenu').style.display = 'flex'; 
    searchContainerOverlay.style.display = 'none';
        
}