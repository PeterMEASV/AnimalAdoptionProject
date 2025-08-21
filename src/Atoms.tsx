import {atom} from "jotai";
import {Outlet, type RouteObject} from "react-router";
import Home from "./Home.tsx";
import CreateAnimal from "./CreateAnimal.tsx";
import List from "./List.tsx";
import Pet from "./Pet.tsx";

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