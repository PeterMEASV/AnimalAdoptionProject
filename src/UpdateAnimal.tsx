import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {useAtom} from "jotai";
import {petsAtom} from "./Atoms.tsx";
import {updatePets} from "./api.tsx";
import {toast} from "react-toastify";

function UpdateAnimal() {
    const navigate = useNavigate();
    const {petID} = useParams();
    const [pets, setPets] = useAtom(petsAtom);
    const petToUpdate = pets.find(p => p.id === petID);

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [imgurl, setImgurl] = useState('');

    useEffect(() => {
        if (petToUpdate) {
            setName(petToUpdate.name);
            setBreed(petToUpdate.breed);
            setImgurl(petToUpdate.imgurl);
        }
    }, [petToUpdate]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!petToUpdate) {
            alert("error: Pet doesnt exist.");
            return;
        }

        const updatedPet = {
            ...petToUpdate,
            name,
            breed,
            imgurl
        };

        await updatePets(updatedPet, setPets, pets);
        navigate(`/pet/${petID}`);
    };

    if (!petToUpdate) {
        return <div className="text-center"><h1>Pet not found</h1></div>;
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold my-4">Update {petToUpdate.name}</h1>
            <form onSubmit={handleSubmit} className="card bg-base-100 w-full max-w-lg shadow-xl p-8">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                           className="input input-bordered" required/>
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Breed</span>
                    </label>
                    <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)}
                           className="input input-bordered" required/>
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" value={imgurl} onChange={(e) => setImgurl(e.target.value)}
                           className="input input-bordered" required/>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateAnimal;