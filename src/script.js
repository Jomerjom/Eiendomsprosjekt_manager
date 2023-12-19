// import { fetchData } from "./JS/fetch_json.js";
// fetchData().then((data) => {
//     console.log(data);
// });

let sampleArray = 
    {
        navn: "prosjekt5",
        bilde: "sample path",
        sted: "Trondheim",
        prosjektfase: "Ferdigstilt",
        typeProsjekt: "Nybygg",
        byggestart: "2018-06-01",
        inflyttning: "2023-11-17",
        bruttoareal: "650",
        kostnadsramme: "100000000",
        kontrahert_entrepernør: "Skanska",
        miljøtiltak: ["Energimerking", "Passivhus", "BREEAM", "Miljøfyrtårn", "Svanemerket", "Grønn Byggallia"],
        beskrivelse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nullam euismod, nisl eget aliquamultricies, nunc nisl ultricies nunc, eget aliquam"
    };

const { addProject } = require("./JS/write_json.js");
addProject(sampleArray);