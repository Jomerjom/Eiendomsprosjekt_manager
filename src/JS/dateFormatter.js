export const konverterTilKvartal = (str) => {
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