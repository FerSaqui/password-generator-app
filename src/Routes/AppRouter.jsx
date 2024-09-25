import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { PasswordGeneratorApp } from "../components/PasswordGeneratorApp";
import { ValidatePasswordSecurity } from "../components/ValidatePasswordSecurity";
import { AppTheme } from "../themes/AppTheme";

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
    return (
        <>
            <AppTheme>
                <RouterProvider router={browserRouter}/>
            </AppTheme>
        </>
    );
}