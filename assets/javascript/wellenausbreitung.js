const WAVETABLE = [
    {
        'frequencyRanges' : '3 – 30 kHz', 
        'waveRange' : 'Myriameter', 
        'otherRange' : 'Längstwelle', 
        'shortcut' : 'VLF', 
        'englishMeaning' : 'very low frequency' 
    },{
        'frequencyRanges' : '30 –300 kHz', 
        'waveRange' : 'Kilometer', 
        'otherRange' : 'Langwelle', 
        'shortcut' : 'LF', 
        'englishMeaning' : 'low frequency' 
    },{
        'frequencyRanges' : '300 – 3000 kHz', 
        'waveRange' : 'Hektometer', 
        'otherRange' : 'Mittelwelle', 
        'shortcut' : 'MF', 
        'englishMeaning' : 'medium frequency' 
    },{
        'frequencyRanges' : '30 – 300 MHz', 
        'waveRange' : 'Meter', 
        'otherRange' : 'Ultrakurzwelle', 
        'shortcut' : 'VHF', 
        'englishMeaning' : 'very high frequency' 
    },{
        'frequencyRanges' : '300 – 3000 MHz', 
        'waveRange' : 'Dezimeter', 
        'otherRange' : '', 
        'shortcut' : 'UHF', 
        'englishMeaning' : 'ultra high frequency' 
    },{
        'frequencyRanges' : '3 – 30 GHz', 
        'waveRange' : 'Zentimeter', 
        'otherRange' : '', 
        'shortcut' : 'SHF', 
        'englishMeaning' : 'super high frequency' 
    },{
        'frequencyRanges' : '30 – 300 GHz', 
        'waveRange' : 'Millimeter', 
        'otherRange' : '', 
        'shortcut' : 'EHF', 
        'englishMeaning' : 'extremely high frequency' 
    },{
        'frequencyRanges' : '300 – 3000 GHz', 
        'waveRange' : 'Dezimillimeter', 
        'otherRange' : '', 
        'shortcut' : '', 
        'englishMeaning' : '' 
    }
]

function initWavePropagation(){
    let waveTable = document.getElementById('waveList');
    for (let i = 0; i < WAVETABLE.length; i++) {
        const frequencyRanges = WAVETABLE[i]['frequencyRanges'];
        const waveRange = WAVETABLE[i]['waveRange'];
        const otherRange = WAVETABLE[i]['otherRange'];
        const shortcut = WAVETABLE[i]['shortcut'];
        const englishMeaning = WAVETABLE[i]['englishMeaning'];
        waveTable.innerHTML +=`<tr>
        <td>${frequencyRanges}</td>
        <td>${waveRange.toUpperCase()}</td>
        <td>${otherRange.toUpperCase()}</td>
        <td>${shortcut}</td>
        <td>${englishMeaning.toUpperCase()}</td>
    </tr>`;
        
    }
console.log(WAVETABLE)
}