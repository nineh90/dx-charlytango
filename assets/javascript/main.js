let headLineText;

window.addEventListener('scroll', fixBanner)  

function loadHeader(){
    setTimeout(showSecondImage, 2000);  
}

function showSecondImage(){
    let image = document.getElementById('headerImageContainer');
        image.style.backgroundImage = "url('./assets/img/aftstation.png')";
    setTimeout(showThirdImage, 2000);
}

function showThirdImage(){
    let image = document.getElementById('headerImageContainer');
        image.style.backgroundImage = "url('./assets/img/antenne1.png')";
    setTimeout(showFirstImage, 2000);
}

function showFirstImage(){
    let image = document.getElementById('headerImageContainer');
        image.style.backgroundImage = "url('./assets/img/antenne2.png')";
    setTimeout(showSecondImage, 2000);
}

async function includeHTML(link) {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text(); 
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
    document.body.classList.add('overflow-hidden');
    overLay.classList.remove('d-none');
} 

function closeSubMenu(){
    submenu.classList.add('d-none');
    document.body.classList.remove('overflow-hidden');
    overLay.classList.add('d-none');

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

// function initQSL(){
//     setTimeout()     

//     let headline = document.getElementById('headLine');
//     if (headline){
//         headline.innerHTML = `CharlyTango QSL-Karten`;
//     } else if(headline){
//         initQSL();
//     }
// }



function fixBanner(){
    let img = document.getElementById('navImg');
    if (img){
        img.classList.remove('d-none');
        img.classList.add('w3-animate-top');
    }
    if(window.scrollY == 0){
        img.classList.add('d-none');
    }
}

