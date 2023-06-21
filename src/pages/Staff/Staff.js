//База
import React, {useState} from "react";
import styles from './Staff.module.css'

//Всё для навбара
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { accountant_buttons } from "../../nav_button";
import Dropdown from "../../components/Dropdown/Dropdown";
import { observer } from "mobx-react-lite";
import { registration } from "../../http/userAPI";


const Staff = observer(() => {
    const options = ["merchandiser", "cashier", "junior chef", "courier"];

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState(null);

    const flagOutput = true;

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
          alertMessage = alertMessage + "Пароли не совпадают\n"
          incorrectCount += 1
        }
        if (role === null){
          alertMessage = alertMessage + "Роль не выбрана"
          incorrectCount += 1
        }
        if (incorrectCount > 0) {
          alert(alertMessage)
          return
        }
        await registration(login, password, role)
        .then(data => {
          alert("Успешно")
        })
        .catch(e => {
          alert(e.response.data)
        })
      }

    return (
        
        <div className={styles.container}>
            <div className={styles.left_side}>
                <NavBar>
                    <NavButton data={accountant_buttons} flagOutput={flagOutput}/>
                </NavBar>
            </div>
            <div className={styles.right_side}>
                <div className={styles.title}>
                    <div className={styles.title_left}>
                        <div className={styles.title_text}>Добавить сотрудника</div>
                    </div>
                </div>
                <div className={styles.form_box}>
                    <form className={styles.form}>
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
                        <div className={styles.dropdown_box}>
                            <Dropdown role={role} setRole={setRole} options={options}/>
                        </div>
                    </form>  
                    <div className={styles.button_box}>
                        <div onClick={register} className={styles.button}>Зарегистрировать</div>
                    </div>
                </div>
            </div>
        </div>
    );

});

export default Staff;