import {Api} from "../Api.ts";
import {ActivityApi} from "./ActivityAPI.tsx";
import translatingDTOtoPet from "./translatingDTOtoPet.tsx";
import {type pet, petsAtom} from "./Atoms.tsx";
import {useAtom} from "jotai";
import {toast} from "react-toastify";

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

export async function updatePets(pet: pet, setPets: (p: pet[]) => void, pets: pet[])
{
    const updateSuccess = () => toast.success("Pet updated successfully.");
    const updateFail = () => toast.error("Failed to update pet.");
    try
    {
        const response = await ActivityApi.updatePet.petUpdatePet({
            id: pet.id,
            name: pet.name,
            breed: pet.breed,
            imgurl: pet.imgurl,
            sold: pet.sold,
        })

        const updatedPet = translatingDTOtoPet(response.data);

        setPets(pets.map(p => (p.id === pet.id ? updatedPet : p)));
        updateSuccess();
        console.log("Updated situation: " + JSON.stringify(updatedPet));

    }
    catch (error)
    {
        console.error(error);
        updateFail();
    }
}