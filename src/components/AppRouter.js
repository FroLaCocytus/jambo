import React, { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../index";
import { clientRoutes, accountantRoutes, publicRoutes, merchandiserRoutes} from "../routes";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context);

    return (
        <Routes>

                {clientRoutes.map(({ path, Element }) => (
                <Route key={path} path={path} element={Element} />
            ))}

            {accountantRoutes.map(({ path, Element }) => (
                <Route key={path} path={path} element={Element} />
            ))}

            {merchandiserRoutes.map(({ path, Element }) => (
                <Route key={path} path={path} element={Element} />
            ))}

            {publicRoutes.map(({ path, Element }) => (
                <Route key={path} path={path} element={Element} />
            ))}
            {/*{user.isAuth && user.role === "client" && <Route path="*" element={<Navigate to="/menu" replace />} />}*/}
            {/*{user.isAuth && user.role === "accountant" && <Route path="*" element={<Navigate to="/accountant/document" replace />} />}*/}
            {/*{user.isAuth && user.role === "merchandiser" && <Route path="*" element={<Navigate to="merchandiser/warehouse" replace />} />}*/}

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );

});

export default AppRouter;

