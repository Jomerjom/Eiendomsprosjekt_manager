import { createPropertyCard } from "./createPropertyCard.js";
import { fetchData } from "./fetch_json.js";

const projectList = document.getElementById("projectList");

const updateProjectListButton = () => {
    for (let i = 0; i < projectList.children.length; i++) {
        let button = projectList.children[i];
        button.className = "flex items-center flex-row justify-start text-left bg-[#FFFFFF] border-[#DBDCDB] border-2 rounded-sm p-2 m-2 hover:bg-[#3C3E3E] hover:text-[#F5F7EF] min-w-full active:scale-95 transition duration-150 ease-in-out";
    }
};


export const createProjectList = () => {
    fetchData().then((data) => {
        for (let i = 0; i < data.projects.length; i++) {
            let property = data.projects[i];
            const button = document.createElement("button");
            button.id = `project${property.id}${property.navn}`;
            button.className = "flex items-center flex-row justify-start text-left bg-[#FFFFFF] border-[#DBDCDB] border-2 rounded-sm p-2 m-2 hover:bg-[#3C3E3E] hover:text-[#F5F7EF] min-w-full active:scale-95 transition duration-150 ease-in-out";
            button.innerHTML = `
                <p class="text-sm mx-1">${property.id}.</p>
                <p class="text-sm">${property.navn}</p>
            `;
            button.addEventListener("click", () => {
                createPropertyCard(i);
                updateProjectListButton();
                button.className = "flex items-center flex-row justify-start text-left bg-[#3C3E3E] text-[#F5F7EF] border-[#DBDCDB] border-2 rounded-sm p-2 m-2 min-w-full";
            });
            projectList.appendChild(button);
        }
        let firstButton = projectList.children[0];
        firstButton.className = "flex items-center flex-row justify-start text-left bg-[#3C3E3E] text-[#F5F7EF] border-[#DBDCDB] border-2 rounded-sm p-2 m-2 min-w-full";
    });
}