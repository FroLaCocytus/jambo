import React from "react";
import styles from './LoginPage.module.css'
import { ReactComponent as Logo } from '../../img/logo.svg';

import { useNavigate  } from 'react-router-dom';


const LoginPage = () => {

    const navigate = useNavigate();


    return (
        <div className={styles.container}>
            <div className={styles.left_side}>
                <Logo className={styles.logo_svg}/>    
            </div>
            <div className={styles.right_side}>
                <form className={styles.form}>
                    <div className={styles.form_text}>Аутентификация</div>
                    <div className={styles.form_input_box_login} >
                      <input className={styles.form_input} type="text" placeholder="Логин..." />
                    </div>
                    <div className={styles.form_input_box_password} >
                      <input className={styles.form_input} type="password" placeholder="Пароль..." />
                    </div>
                    <div className={styles.form_small_text}>
                        <div>Первый раз? </div>
                        <div onClick={() => {navigate('/registration')}} className={styles.form_small_text_registration}>Зарегистрируйтесь!</div>
                    </div>
                </form>  
                <div className={styles.form_button}>Войти</div>

            </div>
        </div>
    );

};

export default LoginPage;
