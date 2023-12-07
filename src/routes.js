import Basket from "./pages/Basket/Basket"
import Menu from "./pages/Menu/Menu"
import StartPage from "./pages/StartPage/StartPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import Registration from "./pages/Registration/Registration"
import Profile from "./pages/Profile/Profile"
import Restaurant from "./pages/Restaurant/Restaurant"
import Documents from "./pages/Documents/Documents"
import Staff from "./pages/Staff/Staff"
import Warehouse from "./pages/Warehouse/Warehouse"
import CashierPage from "./pages/CashierPage/CashierPage"


import { BASKET_ROUTE, LOGIN_ROUTE, MENU_ROUTE, REGISTRATION_ROUTE, START_ROUTE, PROFILE_ROUTE, RESTAURANT_ROUTE, 
    DOCUMENT_ROUTE, STAFF_ROUTE, WAREHOUSE_ROUTE, CASHIER_ROUTE } from "./utils/consts"

export const publicRoutes = [
    {
        path: START_ROUTE,
        Element: <StartPage />
    },
    {
        path: LOGIN_ROUTE,
        Element: <LoginPage />
    },
    {
        path: REGISTRATION_ROUTE,
        Element: <Registration />
    }
]

export const clientRoutes = [
    {
        path: MENU_ROUTE,
        Element: <Menu />
    },
    {
        path: BASKET_ROUTE,
        Element: <Basket />
    },
    {
        path: PROFILE_ROUTE,
        Element: <Profile />
    },
    {
        path: RESTAURANT_ROUTE,
        Element: <Restaurant />
    }
]


export const accountantRoutes = [
    {
        path: DOCUMENT_ROUTE,
        Element: <Documents />
    },
    {
        path: STAFF_ROUTE,
        Element: <Staff />
    }
]


export const merchandiserRoutes = [
    {
        path: WAREHOUSE_ROUTE,
        Element: <Warehouse />
    }
]

export const cashierRoutes = [
    {
        path: CASHIER_ROUTE,
        Element: <CashierPage />
    }
]