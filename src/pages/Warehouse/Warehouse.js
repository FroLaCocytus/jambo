//База
import React, {useState, useContext, useEffect} from "react";
import styles from './Warehouse.module.css'

//Всё для навбара
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { merchandiser_buttons } from "../../nav_button";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { fetchMerchandise } from "../../http/merchandiseAPI";
import ListMerchandises from "../../components/ListMerchandises/ListMerchandises";
import ModalAddMerchandise from "../../components/ModalAddMerchandise/ModalAddMerchandise";


const Warehouse = observer(() => {
    const flagOutput = true 
    
    const {merchandise} = useContext(Context)

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(()=>{
        fetchMerchandise().then(data => {
            merchandise.setMerchandises(data)
        })
        
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.left_side}>
                <NavBar>
                    <NavButton data={merchandiser_buttons} flagOutput={flagOutput}/>
                </NavBar>
            </div>
            <div className={styles.right_side}>
                <div className={styles.title}>
                    <div className={styles.title_left}>
                        <div className={styles.title_text}>Склад</div>
                    </div>
                    <div className={styles.title_right}>
                        <div onClick={()=>{setIsModalOpen(true)}} className={styles.button_upload}>Добавить товар</div>
                    </div>
                </div>
                <div className={styles.data_box}>
                    <div className={styles.table}>
                        <div className={styles.table_top}>
                            <div className={styles.table_top_left}>
                                <div className={styles.table_text_left}>Название</div>
                            </div>
                            <div className={styles.table_top_right}>
                                <div className={styles.table_text_right}>Количество</div>
                            </div>
                        </div>
                        <div className={styles.table_bottom}>
                            <ListMerchandises/>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <ModalAddMerchandise setIsModalOpen={setIsModalOpen}/>
            )}
        </div>
    );

});

export default Warehouse;