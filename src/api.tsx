import {Api} from "../Api.ts";

async function getPets() {
    const url = "https://api-divine-grass-2111.fly.dev/GetPets";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
        console.log(JSON.stringify(result));
    } catch (error) {
        if (error instanceof Error)
        console.error(error.message);
    }
}
export default getPets;