import { fetchData } from "./JS/fetch_json.module.js";
fetchData().then((data) => {
    console.log(data);
});