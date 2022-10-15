let loadedData;


async function init(){
    let JSON = './assets/JSON/member.json';
    let responseFromJSON = await fetch(JSON);
    loadedData = await responseFromJSON.json();
    // renderCountryList();
    setTimeout(renderCountryList, 500);
}

function renderCountryList(){ 
    allMemberList.innerHTML ="";
    for (let i = 0; i < loadedData.length; i++) {
        const countryImage = loadedData[i]['flag'];
        const countryName = loadedData[i]['country'];
        const preFix = loadedData[i]['prefix'];
        allMemberList.innerHTML += `
                                <div class="country-card">
                                    <div id="loadedData-${i}" class="country-card-wrapper txt-center">
                                        <h3>
                                            ${countryName}
                                        </h3>
                                            <span class="fi fi-${countryImage} flag-icon"></span>
                                        <div class="prefix-wrapper">
                                            "${preFix}"
                                        </div>
                                        
                                    </div>
                                </div>
                                `;
        console.log(countryImage, countryName,loadedData[i] );
    }
    
}    