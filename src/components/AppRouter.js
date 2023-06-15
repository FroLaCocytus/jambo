import React, { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../index";
import { clientRoutes, publicRoutes} from "../routes";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context);

    console.log(user)
    return (
        <Routes>
            {user.isAuth && user.role === "client" && clientRoutes.map(({ path, Element }) => (
                <Route key={path} path={path} element={Element} />
            ))}

            {!user.isAuth && publicRoutes.map(({ path, Element }) => (
                <Route key={path} path={path} element={Element} />
            ))}
            {user.isAuth && user.role === "client" && <Route path="*" element={<Navigate to="/menu" replace />} />}
            {!user.isAuth && <Route path="*" element={<Navigate to="/" replace />} />}
        </Routes>
    );

});

export default AppRouter;

