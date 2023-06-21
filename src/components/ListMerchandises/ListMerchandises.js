import React, { useContext, useState } from 'react';
import styles from './ListMerchandises.module.css'
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";
import ModalMerchandiseInfo from "../../components/ModalMerchandiseInfo/ModalMerchandiseInfo";


const ListMerchandises = observer(() => {

    const {merchandise} = useContext(Context)
    const arrayMerchandise = merchandise.merchandises
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handlerRowClick = (item) => {
        setSelectedItem(item)
        setIsModalInfoOpen(true)
    }

    return (
        <div className={styles.container}>
            {arrayMerchandise.map(item => (
                <div className={styles.row} key={item.id} onClick={() => {handlerRowClick(item)}}>
                    <div className={styles.info_box}>
                        <div className={styles.row_left}>
                            <div className={styles.row_text_left}>{item.name}</div>
                        </div>
                        <div className={styles.row_right}>
                            <div className={styles.row_text_right}>{item.count}</div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                </div>
            ))}
            {isModalInfoOpen && (
                <ModalMerchandiseInfo setIsModalOpen={setIsModalInfoOpen} selectedItem={selectedItem}/>
            )}
        </div>
    );
});

export default ListMerchandises;