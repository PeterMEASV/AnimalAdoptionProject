import { useState } from "react";
import { useNavigate } from "react-router";
import { useSetAtom, useAtomValue } from "jotai";
import { petsAtom, type pet } from "./Atoms.tsx";
import { Api } from "../Api.ts";

const ActivityApi = new Api({ baseURL: "https://api-divine-grass-2111.fly.dev" });

function CreateAnimal() {
    const navigate = useNavigate();
    const setPets = useSetAtom(petsAtom);
    const pets = useAtomValue(petsAtom); // get current pets

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [imgurl, setImage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !breed || !imgurl) {
            alert("Please fill out all fields.");
            return;
        }

        try {
            // Call the API
            const response = await ActivityApi.createPet.petCreatePet({
                name,
                breed,
                imgurl,
            });

            const createdPet = response.data as pet;

            // Update petsAtom
            setPets([...pets, createdPet]);

            // Navigate after success
            navigate('/list');
        } catch (error) {
            console.error(error);
            alert("Failed to create pet.");
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold my-4">Create a New Pet Listing</h1>
            <form onSubmit={handleSubmit} className="card bg-base-100 w-full max-w-lg shadow-xl p-8">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pet Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter pet name"
                        className="input input-bordered"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Breed</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter pet breed"
                        className="input input-bordered"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter image URL"
                        className="input input-bordered"
                        value={imgurl}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Create Pet</button>
                </div>
            </form>
        </div>
    );
}
export default CreateAnimal;
