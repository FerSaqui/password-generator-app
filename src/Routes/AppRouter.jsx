import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { PasswordGeneratorApp } from "../components/PasswordGeneratorApp";
import { ValidatePasswordSecurity } from "../components/ValidatePasswordSecurity";

const routes = [
    {
        path: "/generate",
        element: <PasswordGeneratorApp />
    },
    {
        path: "/validate",
        element: <ValidatePasswordSecurity />
    },
    {
        path: "/*",
        element: <Navigate to={"/generate"}/>
    }
];

const browserRouter = createBrowserRouter(routes);

export const AppRouter = () => {
    return <RouterProvider router={browserRouter}/>
}