import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routesAtom } from "./Atoms.tsx";

export default function App() {
  const routes = useAtomValue(routesAtom);
  const router = useMemo(() => createBrowserRouter(routes), [routes]);
  return <RouterProvider router={router} />;
}