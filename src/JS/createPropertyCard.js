import { fetchData } from "./fetch_json.js";
import { numberFormatterKM } from "./numberFormatter.js";
import { konverterTilKvartal } from "./dateFormatter.js";

const propertyCard = document.getElementById("propertyCard");

/**
 * Creates a property card based on the project data at the specified index.
 * Updates the content of the propertyCard container with information about the selected project.
 *
 * @function createPropertyCard
 * @param {number} index - The index of the project in the data to display on the property card.
 * @returns {void}
 */
export const createPropertyCard = (index) => {
    // Fetch data asynchronously
    fetchData().then((data) => {
        // Get the project information at the specified index
        let property = data.projects[index];

        // Update the content of the propertyCard container with project information
        propertyCard.innerHTML = `
        <div id="propertyCard_Title" class="flex items-center flex-col justify-center text-center pb-8 text-[#2B5F46]">
            <h1 class="text-5xl pb-2">${property.navn}</h1>
            <h2 class="text-4xl">${property.sted}</h2>
        </div>
        <div id="propertyCard__image" class="flex w-full max-h-[41rem]">
            <img class="object-cover w-full h-full" src="${property.bilde}" alt="Bilde av ${property.navn}">
        </div>
        <div id="propertyCard__text" class="flex flex-col-reverse desktop:flex-row m-5 justify-between">
            <div id="propertyCard_desc" class="flex text-lg my-5 desktop:w-3/6 desktop:m-5">
                <p>${property.beskrivelse}</p>
            </div>
            <div id="propertyCard_keyInfo" class="bg-[#FFFFFF] text-xl flex p-5 h-auto border-[#DBDCDB] border-2 max-w-lg">
                <ul>
                    <li><b>NØKKELDATA</b></li>
                    <li><b>Prosjekt ID:</b> ${property.id}</li>
                    <li><b>Type prosjekt:</b> ${property.typeProsjekt}</li>
                    <li><b>Prosjektfase:</b> ${property.prosjektfase}</li>
                    <li><b>Byggestart:</b> ${konverterTilKvartal(property.byggestart)}</li>
                    <li><b>Innflytning:</b> ${konverterTilKvartal(property.inflyttning)}</li>
                    <li><b>Bruttoareal:</b> ${property.bruttoareal} m<sup>2</sup></li>
                    <li><b>Kostnadsramme:</b> ${numberFormatterKM(property.kostnadsramme)}</li>
                    <li><b>Kontrahert entreprenør:</b> ${property.kontrahert_entrepernør}</li>
                    <li><b>Miljøtiltak:</b> ${property.miljøtiltak}</li>
                </ul>
            </div>
        </div>
        `;
    });
}