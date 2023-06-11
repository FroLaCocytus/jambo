//База
import React from "react";
import styles from './Profile.module.css'
import { useNavigate  } from 'react-router-dom';

//Всё для навбара
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { client_buttons } from "../../nav_button";

const Profile = () => {
    
    const navigate = useNavigate();

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
                        <div className={styles.title_text}>Профиль пользователя</div>
                    </div>
                </div>
                <form className={styles.form}>
                    <input className={styles.form_input} type="text" placeholder="Имя" />
                    <input className={styles.form_input} type="text" placeholder="Телефон" />
                    <input className={styles.form_input} type="text" placeholder="Email" />
                    <input className={styles.form_input} type="text" placeholder="День рождения" />
                </form>  
                <div className={styles.buttons_box}>
                    <div className={styles.confirm_button}>Подтвердить</div>
                    <div onClick={() => {navigate('/')}} className={styles.logout_button}>Выйти</div>
                </div>

            </div>
        </div>
    );

};

export default Profile;