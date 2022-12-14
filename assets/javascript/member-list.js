let loadedData;
let allMemberList;
let spinner;
let renderedMember;

window.onload = function() { 
    waitForMemberlist();
}

function waitForMemberlist() {
    setTimeout(() => {
        allMemberList = document.getElementById('memberlist-container'); 
        if (allMemberList) {
            initMember();
        } else {
            waitForMemberlist();
        }
    });
}

async function initMember(){
    let JSON = './assets/JSON/member.json';
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
    // let searchContainer = document.getElementById('searchContainerOverlay');
    // if(searchContainer){
    //     searchContainer.style.display = 'none';
    //     document.body.classList.remove('overflow-hidden');
    // }
    allMemberList.innerHTML = '';
    allMemberList.style.display = 'none';
    spinner.style.display = "block";
    setTimeout( () => {
        createMembers(i);
    }, 100)
}

function createMembers(i) {
    renderedMember = 50
    const scroll = window.scrollTo(0, 0); 
    let memberJSON = loadedData[i]["member"];
    const statusActive = memberJSON.filter(status => status.status =="active");
    console.table(statusActive);
    // memberJSON = memberJSON.reverse();
    generateTableCurrentCountry(i);
    document.getElementById('land').innerHTML = loadedData[i]['country'];
    for (let j = 0; j < memberJSON.length; j++) {
        const callsign = memberJSON[j]['callsign'];
        const name = memberJSON[j]['name'];
        const city = memberJSON[j]['city'];
        const status = memberJSON[j]['status'];
        renderMemberListCurrentCountry(callsign, name, city, status);
        if (j == renderedMember-1){
            scroll;
            allMemberList.style.display = 'flex';
                spinner.style.display = "none";
            break;    
        } 
        if (j == memberJSON.length - 1){
            scroll;
            allMemberList.style.display = 'flex';
            spinner.style.display = "none";

        }    
    }
    addEventlistenterOnScroll(i);

}


function addEventlistenterOnScroll(i){
    window.onscroll = (function() {   
        if(($(window).scrollTop() / $(document).height() * 100) > 45) {
            renderNextMembers(i);
        }
    });
    document.addEventListener("touchMove",renderNextMembers(i),true);
}

function renderNextMembers(i){
    let plusMember = +50;
    let result = renderedMember + plusMember;
    let memberJSON = loadedData[i]["member"];
    // memberJSON = memberJSON.reverse();
    for (let k =  renderedMember; k < memberJSON.length; k++) {
        const callsign = memberJSON[k]['callsign'];
        const name = memberJSON[k]['name'];
        const city = memberJSON[k]['city'];
        const status = memberJSON[k]['status'];
        if (k == result){
            allMemberList.style.display = 'flex';
            renderedMember = result;
            break;
        }
        if(k == memberJSON.length -1 ){
            renderedMember = memberJSON.length; 
        }
        renderMemberListCurrentCountry(callsign, name, city, status);
    }
    

}


function closeDetailView(){
    allMemberList.innerHTML = '';
    const scroll = window.scrollTo(0, 0);
    scroll;
    waitForMemberlist();
}

// function openSearchContainer(i){
//     document.body.classList.add('overflow-hidden');
//     document.getElementById('memberMenu').style.display = 'none';
//     renderMemberSearchContainer(i);
// }

// function renderMemberSearchContainer(i){
//     const allMember = loadedData[i]["member"];
//     const statusUnknown = allMember.filter(status => status.status =="unknown");
//     const statusDead = allMember.filter(status => status.status =="dead");
//     console.log("allMember-ARR:", allMember, "unknown-ARR:", statusUnknown, "dead-arr", statusDead);
//     let searchContainer = document.getElementById('searchContainerOverlay');
//     searchContainer.style.display = 'flex';
//     searchContainer.innerHTML = `<div class="search-container">
//                                     <div class="d-flex">
//                                         <input type="checkbox" id="all" onclick="openDetailview(${i})">
//                                         <label for="all">Alle Mitglieder</label>
//                                     </div>
//                                     <div class="d-flex">    
//                                         <input type="checkbox" id="active" onclick="renderActiveMember(${i})">
//                                         <label for="active">Aktive Mitglieder</label>
//                                     </div>
//                                     <div class="d-flex">    
//                                         <input type="checkbox" id="unknown" onclick="myFunction()">
//                                         <label for="unknown">Status unbekannt</label>
//                                     </div>
//                                     <div class="d-flex">    
//                                         <input type="checkbox" id="dead" onclick="myFunction()">
//                                         <label for="dead">verstorben</label>
//                                     </div>    
//                                 </div>`;
// }

// function renderActiveMember(i){
//     delete window.addEventlistenterOnScroll(i);
//     const allMember = loadedData[i]["member"];
//     const statusActive = allMember.filter(status => status.status =="active");
//     console.table(statusActive);
//     generateTableCurrentCountry(i);
//     let searchContainer = document.getElementById('searchContainerOverlay');
//         searchContainer.style.display = 'none';
//         document.body.classList.remove('overflow-hidden');
//     for (let ai = 0; ai < statusActive.length; ai++) {
//         const callsign = statusActive[ai]['callsign'];
//         const name = statusActive[ai]['name'];
//         const city = statusActive[ai]['city'];
//         const status = statusActive[ai]['status'];
//         generateActiveMemberHTML(callsign, name, city, status)
//         console.log('callsign', callsign, 'name', name, 'city', city, 'status', status);
//         if(ai == statusActive.length -1){
//         delete loadedData;
//            break
//         }
//     }
// }


// function generateActiveMemberHTML(callsign, name, city, status){
//     let currentMemberList = document.getElementById('currentMemberList');
//     if(currentMemberList){
//         currentMemberList.innerHTML += `<tr>
//                                             <td>${callsign}</td>
//                                             <td>${name.toUpperCase()}</td>
//                                             <td>${city.toUpperCase()}</td>
//                                             <td>${status.toUpperCase()}</td>
//                                         </tr>`
//     };    
// }


//  add to funcion generateTableCurrentCountry 

function generateTableCurrentCountry(i){
    allMemberList.innerHTML = ` 
                                <div class="w-70 ws-100 d-flex align-center justify-center column">
                                    <div id="memberMenu" class="member-menu-container">
                                        <div  onclick="closeDetailView()" class="back">zur??ck</div>
                                        <img onclick="openSearchContainer(${i})" class="search" src="./assets/img/search.png">
                                    </div>
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

function renderMemberListCurrentCountry(callsign, name, city, status){
    let currentMemberList = document.getElementById('currentMemberList');
    if(currentMemberList){
        currentMemberList.innerHTML += `<tr>
                                            <td>${callsign}</td>
                                            <td>${name.toUpperCase()}</td>
                                            <td>${city.toUpperCase()}</td>
                                            <td>${status.toUpperCase()}</td>
                                        </tr>`
    };                                    
}
