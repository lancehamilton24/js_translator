const spanish = {
    "merry": "feliz", 
    "christmas": "navidad", 
    "and": "y", 
    "happy": "feliz", 
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

const spanishTranslation = document.getElementById("spanish");
spanishTranslation.onclick = function translatorSpanish () {
    const inputBox = document.getElementById("inputBox").value
    if ("merry" === inputBox) {
        printToDom(spanish.merry, 'returnText')
    }
    if ("christmas" === inputBox) {
        printToDom(spanish.christmas, 'returnText')
    }
    if ("and" === inputBox) {
        printToDom(spanish.and, 'returnText')
    }
    if ("happy" === inputBox) {
        printToDom(spanish.happy, 'returnText')
    }
    if ("new" === inputBox) {
        printToDom(spanish.new, 'returnText')
    }
    if ("year" === inputBox) {
        printToDom(spanish.year, 'returnText')
    }
}

const frenchTranslation = document.getElementById("french");
frenchTranslation.onclick = function translatorFrench () {
    const inputBox = document.getElementById("inputBox").value
    if ("merry" === inputBox) {
        printToDom(french.merry, 'returnText')
    }
    if ("christmas" === inputBox) {
        printToDom(french.christmas, 'returnText')
    }
    if ("and" === inputBox) {
        printToDom(french.and, 'returnText')
    }
    if ("happy" === inputBox) {
        printToDom(french.happy, 'returnText')
    }
    if ("new" === inputBox) {
        printToDom(french.new, 'returnText')
    }
    if ("year" === inputBox) {
        printToDom(french.year, 'returnText')
    }
}

const germanTranslation = document.getElementById("german");
germanTranslation.onclick = function translatorGerman () {
    const inputBox = document.getElementById("inputBox").value
    if ("merry" === inputBox) {
        printToDom(german.merry, 'returnText')
    }
    if ("christmas" === inputBox) {
        printToDom(german.christmas, 'returnText')
    }
    if ("and" === inputBox) {
        printToDom(german.and, 'returnText')
    }
    if ("happy" === inputBox) {
        printToDom(german.happy, 'returnText')
    }
    if ("new" === inputBox) {
        printToDom(german.new, 'returnText')
    }
    if ("year" === inputBox) {
        printToDom(german.year, 'returnText')
    }
}


