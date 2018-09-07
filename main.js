let spanish = {
    "merry":"feliz", "christmas":"navidad", "and":"y", "happy":"feliz", "new":"nuevo", "year":"año"
};

let french = {
    "merry":"joyeux", "christmas":"noël", "and":"et", "happy":"content", "new":"nouveau", "year":"an"
};

let german = {
    "merry":"fröhlich", "christmas":"weihnachten", "and":"und", "happy":"glücklich", "new":"neu", "year":"jahr"
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;

};
