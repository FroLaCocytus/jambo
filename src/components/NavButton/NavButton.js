import React from "react";
import styles from './NavButton.module.css'


const NavButton = (props) => {
    const buttonArray = props.data;
    return (
        <div className={styles.container}>
            {buttonArray.map((item, index) => (
                <div className={styles.button_box} key={index}>
                    <div className={styles.img_box}>
                        <img className={styles.img} src={item.link} />
                    </div>
                    <div className={styles.text}>{item.text}</div>
                </div>
            ))}
        </div>
    );

};

export default NavButton;