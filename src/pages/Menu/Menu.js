//База
import React, { useContext, useEffect } from "react";
import styles from './Menu.module.css'

//Всё для навбара
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { client_buttons } from "../../nav_button";

//Свгшки стрелочек
import { ReactComponent as LeftArrow } from '../../img/arrow_left.svg';
import { ReactComponent as RightArrow } from '../../img/arrow_right.svg';

//Всё для списка блюд
import ListDishes from "../../components/ListDishes/ListDishes";
import { dishes } from "../../dishes";
import { fetchProducts } from "../../http/productAPI";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";


const Menu = observer(() => {
    
    const {product} = useContext(Context)

    useEffect(()=>{
        fetchProducts().then(data => {
            console.log(data)
            product.setProducts(data)
            console.log(product.products[0].id)   
        })
        
    }, [])


    const wordСase = (value, words) => {
        value = Math.abs(value) % 100; 
        var num = value % 10;
        if(value > 10 && value < 20) return words[2]; 
        if(num > 1 && num < 5) return words[1];
        if(num === 1) return words[0]; 
        return words[2];
    }

    const dish_count = 3;
    const page_number = 1;
    
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
                        <div className={styles.title_text}>Меню ресторана</div>
                        <div className={styles.title_description}>{dish_count} {wordСase(dish_count, ["блюдо", "блюда", "блюд"])}</div>
                    </div>
                    <div className={styles.title_right}>
                        <div className={styles.pagination}>
                            <LeftArrow className={styles.left_arrow}/>
                            <div className={styles.page}>{page_number}</div>
                            <RightArrow className={styles.right_arrow}/>
                        </div>
                    </div>
                </div>
                <div className={styles.list}>
                  <ListDishes/>
                </div>
            </div>
        </div>
    );

});

export default Menu;