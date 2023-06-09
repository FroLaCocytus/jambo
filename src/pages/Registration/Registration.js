import React from "react";
import styles from './Registration.module.css'
import { ReactComponent as Logo } from '../../img/logo.svg';

import { useNavigate  } from 'react-router-dom';


const Registration = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.left_side}>
                <Logo className={styles.logo_svg}/>    
            </div>
            <div className={styles.right_side}>
                <form className={styles.form}>
                    <div className={styles.form_text}>Регистрация</div>
                    <div className={styles.form_input_box_login} >
                      <input className={styles.form_input} type="text" placeholder="Введите логин..." />
                    </div>
                    <div className={styles.form_input_box_password} >
                      <input className={styles.form_input} type="password" placeholder="Введите пароль..." />
                    </div>
                    <div className={styles.form_input_box_password} >
                      <input className={styles.form_input} type="password" placeholder="Повторите пароль..." />
                    </div>
                    <div className={styles.form_small_text}>
                        <div>Уже зарегистрированы?</div>
                        <div onClick={() => {navigate('/login')}} className={styles.form_small_text_registration}>Войти</div>
                    </div>
                </form>  
                <div className={styles.form_button}>Зарегистрироваться</div>

            </div>
        </div>
    );

};

export default Registration;
