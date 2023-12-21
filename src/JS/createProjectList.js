import { createPropertyCard } from "./createPropertyCard.js";
import { fetchData } from "./fetch_json.js";

const projectList = document.getElementById("projectList");

/**
 * Updates the appearance of all project buttons in the projectList container.
 * Resets the styling to the default state for each button.
 *
 * @function updateProjectListButton
 * @returns {void}
 */
const updateProjectListButton = () => {
    // Iterate over each button in the projectList container
    for (let i = 0; i < projectList.children.length; i++) {
        let button = projectList.children[i];

        // Reset the styling of the button to the default state
        button.className = "flex items-center flex-row justify-start text-left bg-[#FFFFFF] border-[#DBDCDB] border-2 rounded-sm p-2 m-2 hover:bg-[#3C3E3E] hover:text-[#F5F7EF] min-w-full active:scale-95 transition duration-150 ease-in-out";
    }
};



/**
 * Creates a list of project buttons based on data fetched using the fetchData function.
 * Each button represents a project with its ID and name.
 * Clicking on a button triggers the creation of a property card and updates the appearance of the clicked button.
 *
 * @function createProjectList
 * @async
 * @returns {void}
 */
export const createProjectList = () => {
    // Fetch data asynchronously
    fetchData().then((data) => {
        // Iterate over each project in the fetched data
        for (let i = 0; i < data.projects.length; i++) {
            let property = data.projects[i];

            // Create a button element for the project
            const button = document.createElement("button");
            button.id = `project${property.id}${property.navn}`;
            button.className = "flex items-center flex-row justify-start text-left bg-[#FFFFFF] border-[#DBDCDB] border-2 rounded-sm p-2 m-2 hover:bg-[#3C3E3E] hover:text-[#F5F7EF] min-w-full active:scale-95 transition duration-150 ease-in-out";
            button.innerHTML = `
                <p class="text-sm mx-1">${property.id}.</p>
                <p class="text-sm">${property.navn}</p>
            `;

            // Add a click event listener to the button
            button.addEventListener("click", () => {
                // Create a property card for the clicked project
                createPropertyCard(i);

                // Update the appearance of the project list button
                updateProjectListButton();

                // Change the button's class to reflect the click state
                button.className = "flex items-center flex-row justify-start text-left bg-[#3C3E3E] text-[#F5F7EF] border-[#DBDCDB] border-2 rounded-sm p-2 m-2 min-w-full";
            });

            // Append the button to the projectList container
            projectList.appendChild(button);
        }

        // Set the appearance of the first button in the list
        let firstButton = projectList.children[0];
        firstButton.className = "flex items-center flex-row justify-start text-left bg-[#3C3E3E] text-[#F5F7EF] border-[#DBDCDB] border-2 rounded-sm p-2 m-2 min-w-full";
    });
}
