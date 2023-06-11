import React from "react";
import styles from './NavButton.module.css'
import { useNavigate  } from 'react-router-dom';


const NavButton = (props) => {
    const buttonArray = props.data;
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {buttonArray.map((item, index) => (
                <div onClick={() => {navigate(item.route)}} className={styles.button_box} key={index}>
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