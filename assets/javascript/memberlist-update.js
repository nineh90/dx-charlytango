window.onload = getAllData();     


let loadedData;
let renderedMember;
let allMember;
let activeMember;
let unknownMember;
let deadMember;
let memberFilter = false;
let chosenFilter;

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
    document.getElementById('memberMenu').style.display = 'flex';
    if(memberFilter == true){
        let memberList = document.getElementById('currentMemberList');
        memberList.innerHTML = '';
        for (let i = 0; i < chosenFilter.length; i++) {
            const callsign = chosenFilter[i]['callsign'];
            const name = chosenFilter[i]['name'];
            const city = chosenFilter[i]['city'];
            const status = chosenFilter[i]['status'];
            renderMemberList(callsign, name, city, status);
            if(i == renderedMember) break   
            if (i == chosenFilter.length -1){
                renderedMember = chosenFilter.length;
                break 
            } 
        }
    }else{
        document.getElementById('land').innerHTML = loadedData[i]['country'];
        allMember = loadedData[i]['member'];
        generateMemberFilter();
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
    }
    document.addEventListener('scroll', renderNextMembers, chosenFilter);  
}    

function renderNextMembers(){
    let plusMember = 50;
    let result = renderedMember + plusMember;
    if(memberFilter == true){
        for (let i =  renderedMember; i < chosenFilter.length; i++) {
            const callsign = chosenFilter[i]['callsign'];
            const name = chosenFilter[i]['name'];
            const city = chosenFilter[i]['city'];
            const status = chosenFilter[i]['status'];
            if (i == result){
                renderedMember = result; 
                break;
            }
            if (i == chosenFilter.length -1){
                renderedMember = chosenFilter.length;  
            }
            renderMemberList(callsign, name, city, status);
        }  
    }else{
            for (let i =  renderedMember; i < allMember.length; i++) {
                const callsign = allMember[i]['callsign'];
                const name = allMember[i]['name'];
                const city = allMember[i]['city'];
                const status = allMember[i]['status'];
                if (i == result){
                    renderedMember = result;
                    break;
                }
                if (i == allMember.length -1){
                    renderedMember = allMember.length;  
                }
                renderMemberList(callsign, name, city, status);
        }
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
    renderedMember = 0;
    window.removeEventListener('scroll', renderNextMembers);
    ifStatusIsAllMember(filter);
    ifStatusIsActive(filter);
    ifStatusIsUnknown(filter);
    ifStatusIsDead(filter);
}

function ifStatusIsAllMember(filter){
    if(filter === 'all'){
        chosenFilter = allMember;
        memberFilter = true;
        showMember();
        closeSearchContainer();
    }
}

function ifStatusIsActive(filter){
    if(filter === 'active'){
        if(activeMember.length < 1){
            alert('keine Aktiven Mitglieder vorhanden')
        } else {
            chosenFilter = activeMember;
            memberFilter = true;
            showMember();
            closeSearchContainer();
        }    
    }
}

function ifStatusIsUnknown(filter){
    if(filter === 'unknown'){
        chosenFilter = unknownMember;
        memberFilter = true;
        showMember();
        closeSearchContainer();
    }
}

function ifStatusIsDead(filter){
    if(filter === 'dead'){
        if(deadMember.length < 1){
            alert('Keine Mitglieder gefunden')
        } else {
            memberFilter = true;
            chosenFilter = deadMember;
            showMember();
            closeSearchContainer();
        }    
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

function closeDetailView(){
    memberFilter = false;
    document.getElementById('memberTableContainer').innerHTML = '';
    location.reload();
    window.scrollTo(0, 0);
}

function searchMember(){
    let searchResult = [];
    document.removeEventListener('scroll', renderNextMembers);
    window.scrollTo(0,0);
    let searchInput = document.getElementById('inputField').value;
    let searchList = document.getElementById('currentMemberList');
    for (let i = 0; i < allMember.length; i++) {
        const callsign = allMember[i]['callsign'];
        const member = allMember[i]['name'].toLowerCase();
        const city = allMember[i]['city'].toLowerCase();
        if(callsign == searchInput.toUpperCase()){
            renderCallSignSearchResult(searchList, searchResult, i);
            document.getElementById('inputField').value = '';
        }
        if(member == searchInput.toLowerCase()){
            renderMemberSearchresult(searchResult, searchList, i);
            document.getElementById('inputField').value = '';
        }
        if(city == searchInput.toLowerCase()){
            renderCitySearchResult(searchResult, searchList, i);
            document.getElementById('inputField').value = '';
        }

}

function renderCallSignSearchResult(searchList, searchResult, i){
    searchList.innerHTML = '';
            searchResult.push(allMember[i]);
            for (let j = 0; j < searchResult.length; j++) {
                const callsign = searchResult[j]['callsign'];
                const name = searchResult[j]['name'].toLowerCase();
                const city = searchResult[j]['city'];
                const status = searchResult[j]['status'];
                renderMemberList(callsign, name, city, status);
                closeSearchContainer();
            } 
}

function renderMemberSearchresult(searchResult, searchList, i){
    searchResult.push(allMember[i]);
            searchList.innerHTML = '';
            for (let k = 0; k < searchResult.length; k++) {
                const callsign = searchResult[k]['callsign'];
                const name = searchResult[k]['name'].toLowerCase();
                const city = searchResult[k]['city'];
                const status = searchResult[k]['status'];
                renderMemberList(callsign, name, city, status);
                closeSearchContainer();
            } 
}

function renderCitySearchResult(searchResult, searchList, i){
    searchResult.push(allMember[i]);
            searchList.innerHTML = '';
            for (let k = 0; k < searchResult.length; k++) {
                const callsign = searchResult[k]['callsign'];
                const name = searchResult[k]['name'].toLowerCase();
                const city = searchResult[k]['city'];
                const status = searchResult[k]['status'];
                renderMemberList(callsign, name, city, status);
                closeSearchContainer();
            } 
        }
}