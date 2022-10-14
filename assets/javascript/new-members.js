async function init(){
    let JSON = './assets/JSON/new-member.json';
    let responseFromJSON = await fetch(JSON);
    let loadedData = await responseFromJSON.json();
    renderMemberList(loadedData);
    setTimeout(showWelcomeText, 1000)
}

function showWelcomeText(){
    headLine.innerHTML = 'Neue Mitglieder';  
}

function renderMemberList(loadedData){ 
    for (let i = 0; i < loadedData.length; i++) {
        const date = loadedData[i]['date'];
        const member = loadedData[i]['memberCode'];
        const name = loadedData[i]['name'];
        const locator = loadedData[i]['locator'];
        const placeOfResidence = loadedData[i]['placeOfResidence'];
        generateMemberTable(date, member, name, locator, placeOfResidence);
        console.log(date, member, name, placeOfResidence);
    }    
}    

function generateMemberTable(date, member, name, locator, placeOfResidence){
    memberList.innerHTML += `<tr>
                                <td>${date}</td>
                                <td>${member}</td>
                                <td>${name.toUpperCase()}</td>
                                <td>${locator}</td>
                                <td>${placeOfResidence.toUpperCase()}</td>
                            </tr>`;
} 