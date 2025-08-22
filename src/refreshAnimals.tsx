import {useAtomValue, useSetAtom} from "jotai";
import {petsAtom} from "./Atoms.tsx";
import {useEffect} from "react";
import getPets from "./api.tsx";

function refreshAnimals() {
    const setPets = useSetAtom(petsAtom);
    const pets = useAtomValue(petsAtom);

    useEffect(() => {
        getPets().then(data => {
            setPets(data);
        });
    }, []);
    console.log(pets);
}
export default refreshAnimals;