import {useState} from "react";
import {useNavigate} from "react-router";
import {useSetAtom} from "jotai";
import {petsAtom} from "./Atoms.tsx";

function CreateAnimal() {
    const navigate = useNavigate();
    const setPets = useSetAtom(petsAtom);

    const [name, setName] = useState('');
    const [bread, setBread] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !bread || !image) {
            alert("Please fill out all fields.");
            return;
        }

        const newPet = {
            id: Date.now().toString(),
            name,
            bread,
            image,
            sold: false
        };

        setPets(prevPets => [...prevPets, newPet]);
        navigate('/list');
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
                        value={bread}
                        onChange={(e) => setBread(e.target.value)}
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
                        value={image}
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
