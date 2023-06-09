import React from "react";
import styles from './StartPage.module.css'
import { ReactComponent as Logo } from '../../img/logo.svg';
import { useNavigate  } from 'react-router-dom';

const StartPage = () => {
    
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <Logo className={styles.logo_svg}/>    
            <div className={styles.welcometext}>Добро пожаловать!</div>
            <div className={styles.buttons}>
                <div onClick={() => {navigate('/login')}} className={styles.login_button}>Войти</div>
                <div onClick={() => {navigate('/registration')}} className={styles.register_button}>Зарегистрироваться</div>
            </div>            
        </div>
    );

};

export default StartPage;