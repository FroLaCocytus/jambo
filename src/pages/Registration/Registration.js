import React, { useState } from "react";
import styles from './Registration.module.css'
import { ReactComponent as Logo } from '../../img/logo.svg';

import { useNavigate  } from 'react-router-dom';
import { registration } from "../../http/userAPI";
import { observer } from "mobx-react-lite";

const Registration = observer(() => {

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const register = async () => {

      let alertMessage = "Некорректные данные:\n";
      let incorrectCount = 0;
      const regexLogin = /^[a-zA-Z][a-zA-Z0-9]{3,14}$/
      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,14}$/

      if (!regexLogin.test(login)){
        alertMessage = alertMessage + "Некорректный логин (от 4 до 15 символов, только буквы и цифры)\n"
        incorrectCount += 1
      }
      if (!regexPassword.test(password)){
        alertMessage = alertMessage + "Некорректный пароль (от 6 до 15 символов, должен содержать хотябы одну заглавную и прописную букву, а также цифру)\n"
        incorrectCount += 1
      }
      if (password !== confirmPassword){
        alertMessage = alertMessage + "Пароли не совпадают"
        incorrectCount += 1
      }

      if (incorrectCount > 0) {
        alert(alertMessage)
        return
      }

      await registration(login, password, "client")
      .then(data => {
        alert('Успешно!')
        navigate('/')
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
                    <div className={styles.form_text}>Регистрация</div>
                    <div className={styles.form_input_box_login} >
                      <input 
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        className={styles.form_input} 
                        type="text" 
                        placeholder="Введите логин..." 
                      />
                    </div>
                    <div className={styles.form_input_box_password} >
                      <input 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className={styles.form_input} 
                        type="password" 
                        placeholder="Введите пароль..." 
                      />
                    </div>
                    <div className={styles.form_input_box_password} >
                      <input 
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        className={styles.form_input} 
                        type="password" 
                        placeholder="Повторите пароль..." 
                      />
                    </div>
                    <div className={styles.form_small_text}>
                        <div>Уже зарегистрированы?</div>
                        <div onClick={() => {navigate('/login')}} className={styles.form_small_text_registration}>Войти</div>
                    </div>
                </form>  
                <div onClick={register} className={styles.form_button}>Зарегистрироваться</div>
            </div>
        </div>
    );

});

export default Registration;
