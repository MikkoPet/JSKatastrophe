function cleanString(s) {

    s.split(/\r?\n|\r|\n/g).join('');

    let sArr = s.split('');

    for (let i = 0; i < s.length; i++) {
        if (sArr[i] === "#") {
            let kill = i - 1;

            while (sArr[kill] === '#') {
                kill--;
            }
            sArr.splice(kill, 1);
            i--;
        }
    }

    return sArr.join('').replaceAll('#', '');
}

console.log(cleanString('abjd####jfk#gfh#jds###d#dsd####dasdaskhj###dhkjs####df##s##d##831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##'));