function openCtMenu(){
    submenu.classList.remove('d-none');
    menuContent.innerHTML = `
                                <nav class="d-flex column txt-center">
                                    <a class="bg-green">CT - Hauptmenü</a>
                                    <a href="#">Über CharlyTango</a>
                                    <a href="#">CharlyTango Heute</a>
                                    <a href="#">In Gedanken</a>
                                    <a href="#">Neuanmeldung</a>
                                    <a href="#">Mitgliederliste</a>
                                    <a href="#">Neue Mitglieder</a>
                                    <a href="#">QSL-Karten</a>
                                    <a href="#">Bilder Galerie</a>
                                    <a href="#">CT-Frequenzen</a>
                                    <a href="#">CT-Downloads</a>
                                    <a href="#">Prefix - Liste</a>
                                    <a href="#">Gästebuch</a>
                                </nav>     
                            `;
} 

function openTeamSpeakMenu(){
    submenu.classList.remove('d-none');
    menuContent.innerHTML = `
                            <nav class="d-flex column txt-center">
                                <a class="bg-green">Teamspeak 3</a>
                                <a href="#">TS-3 Download</a>
                                <a href="#">TS-3 Installationshilfe</a>
                                <a href="#">TS-3 GW Installationshilfe</a>
                                <a href="#">TS-3 Gateway Commander</a>
                                <a href="#">TS-3 Schnellconect</a>
                                <a href="#">Bllick auf TS-3 Server</a>
                            </nav>
                            `;

}

function openGwMenu(){
    submenu.classList.remove('d-none');
    menuContent.innerHTML = `
                            <nav class="d-flex column txt-center">
                                <a class="bg-green">GW-Technik</a>
                                <a href="#">Einfaches Interface</a>
                                <a href="#">Soundkarteninterface</a>
                                <a href="#">Mikrofonbelegung CB</a>
                                <a href="#">Mikrofonbelegung PMR</a>
                                <a href="#">Anschluss an PC</a>
                            </nav>
                            `;
}

function openWeatherInfo(){
    submenu.classList.remove('d-none');
    menuContent.innerHTML = `
                            <nav class="d-flex column txt-center">
                                <a class="bg-green">Wetter Info</a>
                                <a href="#">Blitzradar</a>
                                <a href="#">Wetterwarnung</a>
                                <a href="#">Blitzortung</a>
                            </nav>    
                            `;
}

function openRadioRanchMenu(){
    submenu.classList.remove('d-none');
    menuContent.innerHTML = `<nav class="d-flex column txt-center">
                                <a class="bg-green">Funkbereich</a>
                                <a href="#">Was sind freie Funknetze</a>
                                <a href="#">Geschichte CB-Funk</a>
                                <a href="#">Bandplan CB 11m</a>
                                <a href="#">Bandplan Freenet 149MhZ</a>
                                <a href="#">Bandplan PMR 446MhZ</a>
                                <a href="#">CB Einsatzgebiete</a>
                                <a href="#">CB Betriebsart</a>
                                <a href="#">Abkürzungen im CB</a>
                                <a href="#">CB-Sprache</a>
                                <a href="#">Regeln</a>
                                <a href="#">Notruf</a>
                                <a href="#">CB-Funk SWR</a>
                                <a href="#">Buchstabier-Alphabet</a>
                            </nav>`;
}

function openGeneralInfoMenu(){
    submenu.classList.remove('d-none');
    menuContent.innerHTML = `
                            <nav class="d-flex column txt-center">
                                <a class="bg-green">Allgemeines</a>
                                <a href="#">Bundesnetzagentur</a>
                                <a href="#">GW Anmeldung BNetzA</a>
                                <a href="#">TeamViewer</a>
                                <a href="#">AFU-Prüfung</a>
                                <a href="#">CB-Funk Schutzzone</a>
                                <a href="#">Wellenausbreitung</a>
                                <a href="#">HF-Störungen</a>
                                <a href="#">Locator - Bestimmung</a>
                                <a href="#">Locator - Datenbank</a>
                                <a href="#">Locatorberechnung</a>
                            </nav>
                            `;
}

function openPrMenu(){
    submenu.classList.remove('d-none');
    menuContent.innerHTML = `
                            <nav class="d-flex column txt-center">
                                <a class="bg-green">PR-Technik</a>
                                <a href="#">Geschichte PR</a>
                                <a href="#">Was ist PR</a>
                                <a href="#">PR Betriebsart</a>
                                <a href="#">PR auf CB-Funk</a>
                                <a href="#">PR-Download</a>
                            </nav>
                            `;
}


function closeSubMenu(){
    submenu.classList.add('d-none');
}