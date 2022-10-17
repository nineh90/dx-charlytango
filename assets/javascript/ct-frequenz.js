let ctFrequenz = [
    {
        'frequenz' : '26.300',
        'band' : 'lsb',
        'country' : 'CT New Zealand'
    },{
        'frequenz' : '26.395',
        'band' : 'usb',
        'country' : 'CT USA'
    },{
        'frequenz' : '26.395',
        'band' : 'usb',
        'country' : 'CT Namibia'
    },{
        'frequenz' : '26.395',
        'band' : 'usb',
        'country' : 'CT England'
    },{
        'frequenz' : '26.925',
        'band' : 'fm',
        'country' : 'CT Call Frequenz'
    },{
        'frequenz' : '26.265',
        'band' : 'fm',
        'country' : 'CT Call Freq.Rees'
    },{
        'frequenz' : '26.315',
        'band' : 'fm',
        'country' : 'CT Europa'
    },{
        'frequenz' : '26.385',
        'band' : 'fm',
        'country' : 'Club Call Frequenz (Hauptq)'
    },{
        'frequenz' : '26.385',
        'band' : 'fm',
        'country' : 'CT England'
    },{
        'frequenz' : '26.555',
        'band' : 'usb',
        'country' : 'CT Europa,Int.'
    },{
        'frequenz' : '26.395',
        'band' : 'usb',
        'country' : 'CT 312CT-DX ped.Molidavia'
    },{
        'frequenz' : '26.585',
        'band' : 'usb',
        'country' : 'CT 312CT-DX ped.Molidavia'
    },{
        'frequenz' : '26.765',
        'band' : 'usb',
        'country' : 'CT Deutsche Welle'
    },{
        'frequenz' : '26.765',
        'band' : 'usb',
        'country' : 'CT USA'
    },{
        'frequenz' : '26.765',
        'band' : 'usb',
        'country' : 'CT brasil'
    },{
        'frequenz' : '26.765',
        'band' : 'usb',
        'country' : 'CT Canada'
    },
]

function initFrequenzList(){
    setTimeout(showHeadLineFqz, 1500);
    renderFrequenzList();
}

function renderFrequenzList(){
    let frequenzList = document.getElementById('frequenzList');
    for (let i = 0; i < ctFrequenz.length; i++) {
        const frequenz = ctFrequenz[i]['frequenz'];
        const band = ctFrequenz[i]['band'];
        const country = ctFrequenz[i]['country'];
        frequenzList.innerHTML += `<tr>
                                    <td>${frequenz}</td>
                                    <td>${band.toLocaleUpperCase()}</td>
                                    <td>${country.toLocaleUpperCase()}</td>
                                </tr>`;
        
    }  
}

function showHeadLineFqz(){
    let headline = document.getElementById('headLine');
    if(headline){
        headline.innerHtml = `DEINE MAMA`;
    } else {
        showHeadLineFqz();
    }
}