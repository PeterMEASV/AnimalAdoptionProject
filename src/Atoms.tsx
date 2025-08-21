import {atom} from "jotai";
import {Outlet, type RouteObject} from "react-router";
import Home from "./Home.tsx";
import CreateAnimal from "./CreateAnimal.tsx";
import List from "./List.tsx";
import Pet from "./Pet.tsx";

export interface pet{
    id :string,
    name :string,
    bread :string,
    image :string,
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

export const petsAtom = atom<pet[]>([
    {
        id: "25",
        name: "Pikachu",
        bread: "Electric Mouse",
        image: "https://i.imgur.com/RKe0ivQ.jpg",
        sold: false
    },
    {
        id: "104",
        name: "Cubone",
        bread: "Bone idk",
        image: "https://cdn.discordapp.com/attachments/1241068328735215676/1408160675905146971/latest.png?ex=68a8bb53&is=68a769d3&hm=f849fea74dc77a750fc289fb6345bc948149bce69c9e3101a6e20d5aa49fb14c&",
        sold: false
    }
])

export const selectedPetAtom = atom<pet | null>(null)
