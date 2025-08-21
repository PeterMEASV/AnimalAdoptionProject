import {useNavigate, useParams} from "react-router";
import {useAtom} from "jotai";
import {petsAtom} from "./Atoms.tsx";

function Pet() {
    const navigate = useNavigate();
    const {petID} = useParams();
    const [pets, setPets] = useAtom(petsAtom);

    const pet = pets.find(p => p.id === petID);

    const handleToggleSold = () => {
        if (!pet) return;
        setPets(pets.map(p => p.id === petID ? {...p, sold: !p.sold} : p));
    };

    const handleDelete = () => {
        setPets(pets.filter(p => p.id !== petID));
        navigate('/list');
    };

    if (!pet) {
        return <div className="text-center"><h1>Pet not found</h1></div>;
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <h1>Pet Details</h1>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img src={pet.image} alt={pet.name}/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{pet.name}</h2>
                        <p>Breed: {pet.bread}</p>
                        <p>ID: {pet.id}</p>
                        <p>{pet.sold ? "Status: Adopted" : "Status: Available"}</p>
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-secondary" onClick={handleToggleSold}>
                                {pet.sold ? "Mark as Available" : "Mark as Adopted"}
                            </button>
                            <button className="btn btn-error" onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pet;