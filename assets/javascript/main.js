let headLineText;
window.addEventListener('scroll', fixBanner)  

async function includeHTML(link) {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
            if (link === 'prefix_liste') {
                await loadPrefixList();
            }
        } else {
            element.innerHTML = 'Page not found';
        }
    }
    // setTimeout(switchHeadLine, 1000)
    // switchHeadLine();
}

function switchHeadLine(){
    // if('index.html' && 'header.html'){
    //     headLine.innerHTML = 'Deine Mudda'
    // } else {
    //     headLine.innerHTML = 'Sie schwitzt beim kacken'
    // }

        switch (headLine) {
        case  './index.html':
            headLineText = "Hallo";
            break;
        case './ct-today.html':
            headLineText = "Heute";
            break;
        
        }
document.getElementById('headLine').innerHTML = headLineText;
}

function openCtMenu(){
    submenu.classList.remove('d-none');
} 

function closeSubMenu(){
    submenu.classList.add('d-none');
}

function openSTartPage(){
    window.location = ('index.html');
}

function openNavEntry(e) {
    let activeEntry = e.currentTarget;
    let navs = document.getElementsByTagName("nav");
    if (navs) {
        for (let i = 0 ; i < navs.length; i++) {
            navs[i].classList.remove("active");
        }
    }
    activeEntry.classList.add("active");
    
}




function fixBanner(){
    let img = document.getElementById('navImg');
    if (img){
        navImg.classList.remove('d-none');
        navImg.classList.add('w3-animate-top');
    }
    if(window.scrollY == 0){
        navImg.classList.add('d-none');
    }
    console.log('scroll')
}

