// 2. Würfeln
// generiere zahl zwischen 1 und 6 (bei 6 soll meldung erscheinen zum nochmal würfeln)
let randomWuerfelZahl = Math.floor(Math.random() * 7) + 1;
console.log(randomWuerfelZahl);

if (randomWuerfelZahl == 6) {
    console.log(
        "Hurra!! Da Sie die sechs gewürfelt haben dürfen Sie ein zweites mal würfeln!!"
    );
}
