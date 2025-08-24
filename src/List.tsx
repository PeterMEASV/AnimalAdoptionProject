import {useNavigate} from "react-router";
import {useSetAtom, useAtomValue} from "jotai";
import {selectedPetAtom, type pet, petsAtom} from "./Atoms.tsx";
import {useEffect} from "react";
import getPets from "./api.tsx";
import refreshAnimals from "./refreshAnimals.tsx";


function List() {

    const navigate = useNavigate();
    const setSelectedPet = useSetAtom(selectedPetAtom);
    const pets = useAtomValue(petsAtom);

    const handleRentClick = (petData: pet) => {
        setSelectedPet(petData);
        navigate(`/pet/${petData.id}`);
    };

    return (
        <>
            <h1>List</h1>
            <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-6">
                {pets.map((pet) => (
                    <div key={pet.id} className="card bg-base-100 w-96 shadow-sm mb-4">
                        <figure>
                            <img src={pet.imgurl} alt={pet.name}/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{pet.name}</h2>
                            <p>{pet.breed}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => handleRentClick(pet)}>View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}
export default List;