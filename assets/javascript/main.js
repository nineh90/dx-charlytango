let headLineText;

// window.addEventListener('scroll', fixBanner);

function initCtToday(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `CharlyTango Heute`;
            clearInterval(intervall)
            }
       }); 
}

function initInMemorian(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `In Gedenken`;
            clearInterval(intervall)
            }
       });
}

function initPrBetriebsart(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `PR-Betriebsart`;
            clearInterval(intervall)
            }
       });
}

function initPrAufCB(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `PR auf CB`;
            clearInterval(intervall)
            }
       });
}

function initNewMember(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Kontakt &<br> neues Mitglied werden`;
            clearInterval(intervall)
            }
       });
}  

function initQSL(){
    let intervall = setInterval(function(){
    let headline = document.getElementById('headLine');
    if (headline){
        headline.innerHTML = `CharlyTango QSL-Karten`;
        clearInterval(intervall)
        }
   });
}

function initFreieFunknetze(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Freie Funknetze`;
            clearInterval(intervall)
            }
       });
}

function initCbHistory(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `CB-Geschichte`;
            clearInterval(intervall)
            }
       });
}

function initFreenet(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Freenet Bandplan`;
            clearInterval(intervall)
            }
       });
}

function initPmrBandplan(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `PMR Bandplan`;
            clearInterval(intervall)
            }
       });
}

function initEinsatzgebiete(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `CB-Funk Einsatzgebiete`;
            clearInterval(intervall)
            }
       });
}

function cbBetriebsarten(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `CB-Funk Betriebsarten`;
            clearInterval(intervall)
            }
       });
}

function initCbShortCuts(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Abkürzungen im CB-Funk`;
            clearInterval(intervall)
            }
       });
}

function initCbSpeech(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `CB-Funk Sprache`;
            clearInterval(intervall)
            }
       });
}

function initCbRegeln(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Regeln CB-Funk Betrieb`;
            clearInterval(intervall)
            }
       });
}

function initCbEmergency(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Durchführung eines Notrufs`;
            clearInterval(intervall)
            }
       });
}

function initHeadlineHW(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Hochfrequenzwellen`;
            clearInterval(intervall)
            }
       });
}

function initHfStoerungen(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Störungen`;
            clearInterval(intervall)
            }
       });
}

function initTeamspeakInstHelp(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `TS 3 Installations Hilfe`;
            clearInterval(intervall)
            }
       });
}

function initGwInterFace(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `GW-Interface`;
            clearInterval(intervall)
            }
       });
}

function initPmrLpd(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `PMR / LPD und Freenet Belegung`;
            clearInterval(intervall)
            }
       });
}

function initPrHistory(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Die Entstehung von Paket Radio`;
            clearInterval(intervall)
            }
       });
}

function initWhatIsPMR(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Was ist PMR`;
            clearInterval(intervall)
            }
       });
}

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 9000);
//   console.log('carousel')    
// }


// let slider;
// let currentSlide = 0;
function loadHeader(){
    // let intervall = setInterval(function(){
    //     slider = document.getElementsByClassName("image-silder")[0];
    //     if (slider){
    //         slider.children[0].classList.add("bounce-in-top");
    //         clearInterval(intervall)
    //         createSlider(slider);
    //     }
    // });
    setTimeout(imgScaleOut, 7000);
}

function imgScaleOut(){
    let image = document.getElementById('silderImg');
        image.classList.remove('bounce-in-top');
        image.classList.add('scale-out-center');
    setTimeout(secondImgSRC, 2500);
}

function secondImgSRC(){
    let image = document.getElementById('silderImg');
    image.src = './assets/img/antenne1.png';
    image.classList.remove('scale-out-center');
    image.classList.add('scale-in-center');
    setTimeout(slideOutLeft, 7000);
}

function slideOutLeft(){
    let image = document.getElementById('silderImg');
    image.classList.remove('scale-in-center');
    image.classList.add('slide-out-left');
    setTimeout(thirdImgSRC,2500);
}

function thirdImgSRC(){
    let image = document.getElementById('silderImg');
    image.src = './assets/img/antenne3.png';
    image.classList.add('scale-in-center');
    image.classList.remove('slide-out-left');
    setTimeout(slideOutImage, 7000);
}

function slideOutImage(){
    let image = document.getElementById('silderImg');
    image.classList.remove('scale-in-center');
    image.classList.add('slide-out-left');
    setTimeout(firstImgSRC,2500);
}

function firstImgSRC(){
    let image = document.getElementById('silderImg');
    image.src = './assets/img/antenne2.png';
    image.classList.remove('slide-out-left');
    image.classList.add('bounce-in-top');
    
    setTimeout(imgScaleOut, 7000);
}

function createSlider(slider) {    
        setInterval(function(){
            let currentAnimated = slider.getElementsByClassName("bounce-in-top")[0];
            currentSlide++;
            if (currentSlide >= slider.children.length) {
                currentSlide = 0;
            }
            currentAnimated.classList.remove("bounce-in-top");
            slider.children[currentSlide].classList.add("bounce-in-top");  

        },5000);
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

// function fixBanner(){
//     let img = document.getElementById('navImg');
//     if (img){
//         img.classList.remove('d-none');
//         img.classList.add('w3-animate-top');
//     }
//     if(window.scrollY == 0){
//         img.classList.add('d-none');
//     }
// }

