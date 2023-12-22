
// let something = "2018-02-01"
// something = something.split("-")
// console.log(something)
// month = something[1]
// console.log(month)

// year = something[0]
// console.log(year)


// function konverterTilKvartal(year, måned) {

//     // Beregn kvartalet
//     let kvartal;
//     if (måned >= 1 && måned <= 3) {
//         kvartal = "Q1";
//     } else if (måned >= 4 && måned <= 6) {
//         kvartal = "Q2";
//     } else if (måned >= 7 && måned <= 9) {
//         kvartal = "Q3";
//     } else {
//         kvartal = "Q4";
//     }

//     // Returner resultatet
//     return kvartal + " " + year;
// }

// console.log(konverterTilKvartal(year, month))
let kodehode = "2023-12-22"

function konverterTilKvartal(str) {
    let splitString = str.split("-")
    let month = splitString[1]
    let year = splitString[0]
    let kvartal;

    if (month >= 1 && month <= 3) {
        kvartal = "Q1";
    } else if (month >= 4 && month <= 6) {
        kvartal = "Q2";
    } else if (month >= 7 && month <= 9) {
        kvartal = "Q3";
    } else {
        kvartal = "Q4";
    }

    // Returner resultatet
    return kvartal + " " + year;
}

console.log(konverterTilKvartal(kodehode))