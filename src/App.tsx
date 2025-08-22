import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routesAtom } from "./Atoms.tsx";
import refreshAnimals from "./refreshAnimals.tsx";

export default function App() {
    refreshAnimals();
  const routes = useAtomValue(routesAtom);
  const router = useMemo(() => createBrowserRouter(routes), [routes]);
  return <RouterProvider router={router} />;
}