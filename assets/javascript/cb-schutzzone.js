const CITYPROTECTIONZONE = [
    'Aachen','Euskirchen','Ludwigshafen','Rottal-Inn','Ahrweiler','Flensburg','Märkisch-Oderland','Rottweil','Altötting','Frankenthal',
    'Memmingen','Saarbrücken','Aurich','Frankfurt/Oder','Merzig-Wadern','Saarlouis','Bad Dürkheim','Freiburg i. Br.','Miesbach','Saar-Pfalz-Kreis',
    'Bad Tölz-Wolfratshausen','Freudenstadt','Mühldorf a. Inn','Schleswig-Flensburg','Baden-Baden','Freyung-Grafenau','Neunkirchen',
    'Schwarzwald-Baar-Kreis','Barnim','Garmisch-Partenkirchen','Neustadt a. d. Weinstraße','Sigmaringen','Bautzen','Germersheim','Niederschlesische Oberlausitz',
    'Speyer','Berchtesgadener Land','Görlitz','Nordfriesland','Spree-Neiße','Bernkastel-Wittlich','Grafschaft Bentheim','Oberallgäu',
    'St. Ingbert','Biberach','Greifswald','Oberspreewald-Lausitz','St. Wendel','Birkenfeld/Nahe','Heinsberg','Oder-Spree','Südl. Weinstraße',
    'Bitburg-Prüm','Kaiserslautern','Ortenaukreis','Südwestpfalz','Bodenseekreis','Karlsruhe','Ostallgäu','Traunstein','Borken','Kaufbeuren',
    'Ostholstein','Trier (-Saarburg)','Breisgau-Hochschwarzwald','Kempten','Ostvorpommern','Tuttlingen','Calw','Kleve','Passau','Uckermark',
    'Cochem-Zell','Konstanz','Pforzheim','Uecker-Randow','Cottbus','Kusel','Pirmasens','Unterallgäu','Daun','Landau i. d. Pfalz','Rastatt',
    'Viersen','Donnersbergkreis','Leer','Ravensburg','Völklingen','Emden','Lindau','Rendsburg-Eckernförde','Waldshut','Emmendingen','Löbau-Zittau',
    'Rhein-Pfalz-Kreis','Weilheim-Schongau','Emsland','Lörrach','Rosenheim','Zollernalbkreis','Zweibrücken'
]

function initCbProtektionZone(){
    let radioProtectionZoneList = document.getElementById('radioProtectionZone');
    for (let i = 0; i < CITYPROTECTIONZONE.length; i++) {
        const CITY = CITYPROTECTIONZONE[i];
        radioProtectionZoneList.innerHTML += `<div>${CITY}</div>`;
        
    }


}