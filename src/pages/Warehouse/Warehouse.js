//База
import React, {useState, useContext, useEffect} from "react";
import styles from './Warehouse.module.css'

//Всё для навбара
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { merchandiser_buttons } from "../../nav_button";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { getAllMerchandise } from "../../http/merchandiseAPI";
import ListMerchandises from "../../components/ListMerchandises/ListMerchandises";
import ModalAddMerchandise from "../../components/ModalAddMerchandise/ModalAddMerchandise";
import ModalAlert from "../../components/ModalAlert/ModalAlert";


const Warehouse = observer(() => {
    const flagOutput = true 
    
    const {merchandise} = useContext(Context)

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Модалка с уведомлениями
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalStatus, setModalStatus] = useState(true);

    const handleShowAlertModal = (message, status) => {
        setModalMessage(message); 
        setModalStatus(status);
        setShowModal(true); 
    };

    useEffect(()=>{
        getAllMerchandise().then(data => {
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
                            <ListMerchandises handleShowAlertModal={handleShowAlertModal}/>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <ModalAddMerchandise setIsModalOpen={setIsModalOpen} handleShowAlertModal={handleShowAlertModal}/>
            )}
            <ModalAlert isOpen={showModal} message={modalMessage} onClose={() => setShowModal(false)} status={modalStatus}/>
        </div>
    );

});

export default Warehouse;