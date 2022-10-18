const ALPHABET = [
    {
        'letter' : 'A',
        'german' : 'Anton',
        'international' : 'Alpha'
    },{
        'letter' : 'B',
        'german' : 'berta',
        'international' : 'Bravo'
    },{
        'letter' : 'c',
        'german' : 'Cäsar',
        'international' : 'Charlie'
    },{
        'letter' : 'D',
        'german' : 'Dora',
        'international' : 'Delta'
    },{
        'letter' : 'E',
        'german' : 'Emil',
        'international' : 'Echo'
    },{
        'letter' : 'F',
        'german' : 'Friedrich',
        'international' : 'Foxtrott'
    },{
        'letter' : 'G',
        'german' : 'Gustav',
        'international' : 'Golf'
    },{
        'letter' : 'H',
        'german' : 'Heinrich',
        'international' : 'Hotel'
    },{
        'letter' : 'I',
        'german' : 'Ida',
        'international' : 'India'
    },{
        'letter' : 'J',
        'german' : 'Julius',
        'international' : 'Juliett'
    },{
        'letter' : 'K',
        'german' : 'Karl',
        'international' : 'Kilo'
    },{
        'letter' : 'L',
        'german' : 'Ludwig',
        'international' : 'Lima'
    },{
        'letter' : 'M',
        'german' : 'Martha',
        'international' : 'Mike'
    },{
        'letter' : 'N',
        'german' : 'Nordpol',
        'international' : 'November'
    },{
        'letter' : 'O',
        'german' : 'Otto',
        'international' : 'Oscar'
    },{
        'letter' : 'P',
        'german' : 'Paul',
        'international' : 'Papa'
    },{
        'letter' : 'Q',
        'german' : 'Quelle',
        'international' : 'Quebec'
    },{
        'letter' : 'R',
        'german' : 'Richard',
        'international' : 'Romeo'
    },{
        'letter' : 'S',
        'german' : 'Siegfried',
        'international' : 'Sierra'
    },{
        'letter' : 'T',
        'german' : 'Theodor',
        'international' : 'Tango'
    },{
        'letter' : 'U',
        'german' : 'Ulrich',
        'international' : 'Uniform'
    },{
        'letter' : 'V',
        'german' : 'Viktor',
        'international' : 'Victor'
    },{
        'letter' : 'W',
        'german' : 'Wilhelm',
        'international' : 'Whisky'
    },{
        'letter' : 'X',
        'german' : 'Xanthippe',
        'international' : 'X-Ray'
    },{
        'letter' : 'Y',
        'german' : 'Ypsilon',
        'international' : 'Yankee'
    },{
        'letter' : 'Z',
        'german' : 'Zacharias',
        'international' : 'Zulu'
    },
]

function initAlphabet(){
    let spellingAlphabet = document.getElementById('spellingAlphabet');
    for (let i = 0; i < ALPHABET.length; i++) {
        const letter = ALPHABET[i]['letter'];
        const german = ALPHABET[i]['german'];
        const international = ALPHABET[i]['international'];
        spellingAlphabet.innerHTML += `<tr>
                                            <td>${letter.toUpperCase()}</td>
                                            <td>${german.toUpperCase()}</td>
                                            <td>${international.toUpperCase()}</td>
                                        </tr>`;
        
    }
    console.log(ALPHABET);
}