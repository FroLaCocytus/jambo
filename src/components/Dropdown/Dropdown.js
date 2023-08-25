import React, {useState} from 'react';
import styles from './Dropdown.module.css'
import { observer } from 'mobx-react-lite';

const Dropdown = observer(({role, setRole, options}) => {

    if (role == null) {
        role = "Выберите роль"
    }
    const [isHidden, setIsHidden] = useState(false);
    const [isColor, setIsColor] = useState(false)



    const handleChooseRole = (role) => {
        setRole(role)
    }

    const handleSelect = (flag) => {
    setIsHidden(!flag);
    console.log(flag)
    };

  return (
    <div className={styles.container}>

        <div className={`${role === "Выберите роль" ? styles.dropdownFull : styles.dropdown} ${isColor ? styles.colorWhite : styles.color}`}  onClick={(e) => {
            setIsColor(!isColor)
            handleSelect(isHidden)
        }}>
            {role}
        </div>

        <div className={isHidden ? styles.select_true : styles.select_false}>
        {options.map((option) => (
            <div className={styles.option} onClick={(e) => {
                setIsColor(!isColor)
                handleChooseRole(option)
                handleSelect(isHidden)
            }}>{option}</div>
        ))}
        </div>
      {/*<select className={role ? styles.select_true : styles.select_false} value={role} onChange={(e) => handleSelect(e.target.value)}>*/}
      {/*  <option  hidden value="">Роль</option>*/}
      {/*  {options.map((option) => (*/}
      {/*    <option className={styles.option} key={option} value={option}>{option}</option>*/}
      {/*  ))}*/}
      {/*</select>*/}

    </div>
  );
});

export default Dropdown;