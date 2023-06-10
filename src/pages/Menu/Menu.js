import React from "react";
import styles from './Menu.module.css'
import { client_buttons } from "../../bar_buttons";

import NavBar from "../../components/NavBar/NavBar";

import imageMenu from '../../img/menu.png';
import imageProfile from '../../img/profile.png';
import imageRestoraunt from '../../img/restoraunt.png';
import imageBasket from '../../img/basket.png';


const Menu = () => {
   
    return (
        <div className={styles.container}>
            <div className={styles.left_side}>
                <NavBar>
                    <div className={styles.button_box}>
                        <div className={styles.img_box}>
                            <img className={styles.img} src={imageMenu} />
                        </div>
                        <div className={styles.text}>Меню</div>
                    </div>
                    <div className={styles.button_box}>
                        <div className={styles.img_box}>
                            <img className={styles.img} src={imageProfile} />
                        </div>
                        <div className={styles.text}>Профиль</div>
                    </div>
                    <div className={styles.button_box}>
                        <div className={styles.img_box}>
                            <img className={styles.img} src={imageRestoraunt} />
                        </div>
                        <div className={styles.text}>О нас</div>
                    </div>
                    <div className={styles.button_box}>
                        <div className={styles.img_box}>
                            <img className={styles.img} src={imageBasket} />
                        </div>
                        <div className={styles.text}>Корзина</div>
                    </div>
                </NavBar>
            </div>
            <div className={styles.right_side}>

            </div>
        </div>
    );

};

export default Menu;