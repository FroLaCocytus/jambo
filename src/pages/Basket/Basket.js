//База
import React from "react";
import styles from './Basket.module.css'

//Всё для навбара
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { client_buttons } from "../../nav_button";

const Basket = () => {
    
    const dish_count = 3;

    const wordСase = (value, words) => {
        value = Math.abs(value) % 100; 
        var num = value % 10;
        if(value > 10 && value < 20) return words[2]; 
        if(num > 1 && num < 5) return words[1];
        if(num === 1) return words[0]; 
        return words[2];
    }

    return (
        <div className={styles.container}>
            <div className={styles.left_side}>
                <NavBar>
                    <NavButton data={client_buttons}/>
                </NavBar>
            </div>
            <div className={styles.right_side}>
                <div className={styles.title}>
                    <div className={styles.title_left}>
                        <div className={styles.title_text}>Корзина</div>
                        <div className={styles.title_description}>
                            {dish_count} {wordСase(dish_count, ["товар", "товара", "товаров"])}
                        </div>
                    </div>
                </div>
                <div className={styles.buttons_box}>
                    <div onClick={()=>{console.log('Оформить')}} className={styles.order_button}>Оформить заказ</div>
                    <div onClick={()=>{console.log('Отменить')}} className={styles.cancel_button}>Отменить заказ</div>
                </div>
            </div>
        </div>
    );

};

export default Basket;