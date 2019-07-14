function balikString (kata) {
    var tempKata = ''
    for (var i = kata.length -1; i>=0;  i--) {
        tempKata += kata[i]
        
    } return tempKata
}

console.log (balikString('Hello World'));
