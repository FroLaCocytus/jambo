import React, {useState, useContext} from "react";
import styles from './ModalAddMerchandise.module.css'
import { observer } from 'mobx-react-lite';
import { ReactComponent as CrossSVG } from '../../img/cross.svg';
import { addMerchandise } from "../../http/merchandiseAPI";
import { Context } from "../../index";
import { fetchMerchandise } from "../../http/merchandiseAPI";

const ModalAddMerchandise = observer(({setIsModalOpen}) => {

  const {merchandise} = useContext(Context)

  const [count, setCount] = useState("");
  const [name, setName] = useState("");


// Работа с товарами
const handlerAdd = async () => {
    const regexName = /^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я0-9]{0,24}$/
    const regexCount = /^[1-9]\d{0,2}$/

    if (!regexName.test(name) || !regexCount.test(count)) {
        alert("Некорректные данные")
        return
    }
    await addMerchandise(name, count)
    .then(data => {
        alert(`Товар ${data.name} успешно добавлен`)
        setName("")
        setCount("")
    })
    .catch(e => {
        alert(e.response.data)
    })
    fetchMerchandise().then(data => {
        merchandise.setMerchandises(data)
    })

  };

  return (
    <div className={styles.modal}>
    <div className={styles.modal_content}>
        <div className={styles.modal_title}>
            <div className={styles.modal_title_box}>
                <div className={styles.modal_title_text}>Добавление товара</div>
                <div className={styles.modal_title_img_box}>
                    <CrossSVG className={styles.modal_title_img} onClick={()=>{setIsModalOpen(false)}}/>
                </div>
            </div>
            <div className={styles.line_big}></div>
        </div>
        
        <div className={styles.modal_input_box}>
            <div className={styles.modal_box_text}>Название</div>
            <input value={name} onChange={e => setName(e.target.value)} className={styles.modal_box_input}></input>
        </div>
        <div className={styles.modal_input_box}>
            <div className={styles.modal_box_text}>Количество</div>
            <input value={count} onChange={e => setCount(e.target.value)} className={styles.modal_box_input}></input>
        </div>

        <div className={styles.modal_buttons_box}>
            <button className={styles.modal_button} onClick={handlerAdd}>Добавить</button>
        </div>
    </div>
    </div>
  );
});

export default ModalAddMerchandise;