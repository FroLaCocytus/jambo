import imageMenu from './img/menu.png';
import imageProfile from './img/profile.png';
import imageRestaurant from './img/restaurant.png';
import imageBasket from './img/basket.png';

export const client_buttons = [

    {
        text: "Меню",
        link: imageMenu,
        route: '/menu'
    },
    {
        text: "Профиль",
        link: imageProfile,
        route: '/profile'
    },
    {
        text: "О нас",
        link: imageRestaurant,
        route: '/restaurant'
    },
    {
        text: "Корзина",
        link: imageBasket,
        route: '/basket'
    }
]

export const merchandiser_buttons = [

    {
        text: "Склад",
        link: imageMenu,
        route: '/warehouse'
    }
]