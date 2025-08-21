import {useNavigate} from "react-router";
import {useSetAtom, useAtomValue} from "jotai";
import {selectedPetAtom, type pet, petsAtom} from "./Atoms.tsx";

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
            <div className="flex flex-col items-center">
                <h1>List</h1>
                {pets.map((pet) => (
                    <div key={pet.id} className="card bg-base-100 w-96 shadow-sm mb-4">
                        <figure>
                            <img src={pet.image} alt={pet.name}/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{pet.name}</h2>
                            <p>{pet.bread}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => handleRentClick(pet)}>View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default List;