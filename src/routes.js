import Basket from "./pages/Basket/Basket"
import Menu from "./pages/Menu/Menu"
import StartPage from "./pages/StartPage/StartPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import Registration from "./pages/Registration/Registration"
import Profile from "./pages/Profile/Profile"
import Restaurant from "./pages/Restaurant/Restaurant"


import { BASKET_ROUTE, LOGIN_ROUTE, MENU_ROUTE, REGISTRATION_ROUTE, START_ROUTE, PROFILE_ROUTE, RESTAURANT_ROUTE } from "./utils/consts"

export const authRoutes = [


]


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
    },
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