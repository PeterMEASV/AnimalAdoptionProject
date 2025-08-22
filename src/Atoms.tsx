import {atom} from "jotai";
import {Outlet, type RouteObject} from "react-router";
import Home from "./Home.tsx";
import CreateAnimal from "./CreateAnimal.tsx";
import List from "./List.tsx";
import Pet from "./Pet.tsx";

export interface pet{
    breed :string,
    id :string,
    imgurl :string,
    name :string,
    sold :boolean

}

export const routesAtom = atom<RouteObject[]>([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'create',
                element: <CreateAnimal />
            },
            {
                path: 'list',
                element: <List />
            },
            {
                path: 'pet/:petID',
                element: <Pet />
            }
        ]

    },
    ]);

export const petsAtom = atom<pet[]>([])

export const selectedPetAtom = atom<pet | null>(null)
