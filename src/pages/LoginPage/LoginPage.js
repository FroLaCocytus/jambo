import React, { useContext, useEffect, useState } from "react";
import styles from './LoginPage.module.css'
import { ReactComponent as Logo } from '../../img/logo.svg';

import { useNavigate  } from 'react-router-dom';
import { Context } from "../../index";
import { loginAPI } from "../../http/userAPI";
import { observer } from "mobx-react-lite";



const LoginPage = observer(() => {

    const navigate = useNavigate();
    const {user} = useContext(Context);

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const signin = async () => {
        await loginAPI(login, password)
        .then(data => {
            user.setUser(true)
            user.setIsAuth(true)
            user.setLogin(data.login)
            user.setRole(data.role)
            navigate('/menu')
        })
        .catch(e => {
        alert(e.response.data)
        })
        
    }


    return (
        <div className={styles.container}>
            <div className={styles.left_side}>
                <Logo className={styles.logo_svg}/>    
            </div>
            <div className={styles.right_side}>
                <form className={styles.form}>
                    <div className={styles.form_text}>Аутентификация</div>
                    <div className={styles.form_input_box_login} >
                        <input 
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                            className={styles.form_input} 
                            type="text" 
                            placeholder="Логин..." 
                        />
                    </div>
                    <div className={styles.form_input_box_password} >
                        <input 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={styles.form_input} 
                            type="password" 
                            placeholder="Пароль..." 
                        />
                    </div>
                    <div className={styles.form_small_text}>
                        <div>Первый раз? </div>
                        <div onClick={() => {navigate('/registration')}} className={styles.form_small_text_registration}>Зарегистрируйтесь</div>
                    </div>
                </form>  
                <div onClick={signin} className={styles.form_button}>Войти</div>

            </div>
        </div>
    );

});

export default LoginPage;
