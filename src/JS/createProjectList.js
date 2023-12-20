import { fetchData } from "./fetch_json.js";

const projectList = document.getElementById("projectList");

export const createProjectList = () => {
    fetchData().then((data) => {
        for (let i = 0; i < data.projects.length; i++) {
            let property = data.projects[i];
            projectList.innerHTML += `
            <div id="projectIdName" class="flex items-center flex-row justify-start text-left bg-[#FFFFFF] border-[#DBDCDB] border-2 rounded-sm p-2 m-2 hover:bg-[#3C3E3E] hover:text-[#F5F7EF]">
                <p class="text-sm mx-1">${property.id}.</p>
                <p class="text-sm">${property.navn}</p>
            </div>
            `;
        }
    });
}