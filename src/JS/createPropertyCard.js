import { fetchData } from "./fetch_json.js";

const propertyCard = document.getElementById("propertyCard");

export const createPropertyCard = (index) => {
    fetchData().then((data) => {
        let property = data.projects[index];
        propertyCard.innerHTML = `
        <div id="propertyCard_Title" class="flex items-center flex-col justify-center text-center pb-8 text-[#2B5F46]">
            <h1 class="text-5xl">${property.navn}</h1>
            <h2 class="text-4xl">${property.sted}</h2>
        </div>
        <div id="propertyCard__image" class="flex">
            <img src="${property.bilde}" alt="Bilde av ${property.navn}">
        </div>
        <div id="propertyCard__text" class="flex m-5 justify-between">
            <div id="propertyCard_desc" class="flex text-lg m-5 w-3/6">
                <p>${property.beskrivelse}</p>
            </div>
            <div id="propertyCard_keyInfo" class="bg-[#FFFFFF] text-xl flex p-5 h-auto border-[#DBDCDB] border-2">
                <ul>
                    <li><b>NØKKELDATA</b></li>
                    <li><b>Prosjekt ID:</b> ${property.id}</li>
                    <li><b>Type prosjekt:</b> ${property.typeProsjekt}</li>
                    <li><b>Prosjektfase:</b> ${property.prosjektfase}</li>
                    <li><b>Byggestart:</b> ${property.byggestart}</li>
                    <li><b>Innflytning:</b> ${property.inflyttning}</li>
                    <li><b>Bruttoareal:</b> ${property.bruttoareal} m<sup>2</sup></li>
                    <li><b>Kostnadsramme:</b> ${property.kostnadsramme} kr</li>
                    <li><b>Kontrahert entreprenør:</b> ${property.kontrahert_entrepernør}</li>
                    <li><b>Miljøtiltak:</b> ${property.miljøtiltak}</li>
                </ul>
            </div>
        </div>
        `;
    });
}