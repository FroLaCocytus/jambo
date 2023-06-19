//База
import React, { useContext, useState, useEffect } from "react";
import styles from './Profile.module.css'
import { useNavigate  } from 'react-router-dom';

//Всё для навбара
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { client_buttons } from "../../nav_button";
import { Context } from '../../index'
import { observer } from "mobx-react-lite";
import { getUserInfo, updateUserInfo } from "../../http/userAPI";

const Profile = observer(() => {
    
    const navigate = useNavigate();
    const {user} = useContext(Context)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(()=>{
        getUserInfo()
        .then(data => {
            if (data.name != null) setName(data.name)
            if (data.email != null) setEmail(data.email)
            if (data.phone_number != null) setPhoneNumber(data.phone_number)
            if (data.birthday != null) setBirthday(data.birthday)
        }).catch(e => {
            alert(e.response.data)
        })
    }, [])


    const confirm = async () => {
        updateUserInfo(name, email, phoneNumber, birthday)
        .then(data => {
            if (data.name != null) setName(data.name)
            if (data.email != null) setEmail(data.email)
            if (data.phone_number != null) setPhoneNumber(data.phone_number)
            if (data.birthday != null) setBirthday(data.birthday)
            alert("Успешно!")
        }).catch(e => {
            alert(e.response.data)
        })
    }

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setLogin({})
        user.setRole({})
        localStorage.removeItem('token')
        localStorage.removeItem('selectedProducts')
        navigate('/')
      }

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
                    <input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={styles.form_input}
                        type="text"
                        placeholder="Имя" 
                    />
                    <input 
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        className={styles.form_input} 
                        type="text" 
                        placeholder="Телефон" 
                    />
                    <input 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={styles.form_input} 
                        type="text" 
                        placeholder="Email" 
                    />
                    <input 
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                        className={styles.form_input} 
                        type="text" 
                        placeholder="День рождения" 
                    />
                </form>  
                <div className={styles.buttons_box}>
                    <div onClick={confirm} className={styles.confirm_button}>Подтвердить</div>
                    <div onClick={logOut} className={styles.logout_button}>Выйти</div>
                </div>

            </div>
        </div>
    );

});

export default Profile;