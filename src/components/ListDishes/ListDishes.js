import React, { useState } from "react";
import styles from './ListDishes.module.css'


const ListDishes = (props) => {

    const dishesArray = props.data;

    const [selectedButtons, setSelectedButtons] = useState(Array(dishesArray.length).fill(false));

    const addDish = (index) => {
      const updatedSelectedButtons = [...selectedButtons];
      updatedSelectedButtons[index] = !updatedSelectedButtons[index];
      if (updatedSelectedButtons[index] === true) alert(`Позиция ${index + 1} успешно добавлена`);
      if (updatedSelectedButtons[index] === false) alert(`Позиция ${index + 1} удалена из корзины`);


      setSelectedButtons(updatedSelectedButtons);
    }



    return (
        <div className={styles.container}>
            {dishesArray.map((item, index) => (
            <div className={styles.dish_card} key={index}>
                <div className={styles.img_box}>
                    <img className={styles.img} src={item.link} />
                </div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.description}>{item.description}</div>
                <div className={styles.bottom_card}>
                    <div className={styles.price}>{item.price} $</div>
                    <div className={styles.button_box}>


                        <div
                            onClick={() => addDish(index)}
                            className={`${selectedButtons[index] ? styles.button_true : styles.button_false}`}
                        >
                            {selectedButtons[index] ? 'В корзине' : 'Выбрать'}
                        </div>



                    </div>
                </div>
            </div>
            ))}
        </div>
    );

};

export default ListDishes;