import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Element }) => (
                <Route key={path} path={path} element={Element} />
            ))}   
        </Routes>
    );

};

export default AppRouter;

