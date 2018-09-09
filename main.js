const spanish = {
    "merry": "alegre", 
    "christmas": "navidad", 
    "and": "y", 
    "happy": "contento", 
    "new": "nuevo", 
    "year": "año"
}

const french = {
    "merry": "joyeux", 
    "christmas": "noël", 
    "and": "et", 
    "happy": "content", 
    "new": "nouveau", 
    "year": "an"
}

const german = {
    "merry": "fröhlich", 
    "christmas": "weihnachten", 
    "and": "und", 
    "happy": "glücklich", 
    "new": "neu", 
    "year": "jahr"
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;

};


const spanishTranslate = () => {
    const inputValue = document.getElementById('inputBox').value
    const inputWords = inputValue.split(" ");
    const spanishTranslatedString = spanishStringBuilder (inputWords);
    printToDom(spanishTranslatedString, 'returnText');
}

const spanishStringBuilder = (inputWords) => {
    let newString = '';
    for(let i=0; i<inputWords.length;i++) {
        let spanishWord = spanish[inputWords[i]];
        newString += `<p>${spanishWord}</p>`

    };
    return newString
}
const spanishButton = document.getElementById('spanishButton');
    spanishButton.addEventListener("click", spanishTranslate);


const frenchTranslate = () => {
    const inputValue = document.getElementById('inputBox').value
    const inputWords = inputValue.split(" ");
    const frenchTranslatedString = frenchStringBuilder(inputWords);
    printToDom(frenchTranslatedString, 'returnText');
    }
    
const frenchStringBuilder = (inputWords) => {
    let newString = '';
    for(let i=0; i<inputWords.length;i++) {
        let frenchWord = french[inputWords[i]];
        newString += `<p>${frenchWord}</p>`
    
        };
        return newString
    };
const frenchButton = document.getElementById('frenchButton');
    frenchButton.addEventListener("click", frenchTranslate);


const germanTranslate = () => {
    const inputValue = document.getElementById('inputBox').value
    const inputWords = inputValue.split(" ");
    const germanTranslatedString = germanStringBuilder(inputWords);
    printToDom(germanTranslatedString, 'returnText');
    }
        
const germanStringBuilder = (inputWords) => {
    let newString = '';
    for(let i=0; i<inputWords.length;i++) {
        let germanWord = german[inputWords[i]];
        newString += `<p>${germanWord}</p>`
        
        };
        return newString
    };
const germanButton = document.getElementById('germanButton');
    germanButton.addEventListener("click", germanTranslate);



