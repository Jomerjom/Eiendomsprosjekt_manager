
let something = "2018-02-01"
something = something.split("-")
console.log(something)
month = something[1]
console.log(month)

year = something[0]
console.log(year)


function konverterTilKvartal(year, måned) {

    // Beregn kvartalet
    let kvartal;
    if (måned >= 1 && måned <= 3) {
        kvartal = "Q1";
    } else if (måned >= 4 && måned <= 6) {
        kvartal = "Q2";
    } else if (måned >= 7 && måned <= 9) {
        kvartal = "Q3";
    } else {
        kvartal = "Q4";
    }

    // Returner resultatet
    return kvartal + " " + year;
}

console.log(konverterTilKvartal(year, month))
