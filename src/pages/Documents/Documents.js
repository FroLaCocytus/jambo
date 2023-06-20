//База
import React from "react";
import styles from './Documents.module.css'

//Всё для навбара
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { accountant_buttons } from "../../nav_button";
import { observer } from "mobx-react-lite";

const Documents = observer(() => {
    const flagOutput = true 

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
                        <div className={styles.title_text}>Документы</div>
                    </div>
                    <div className={styles.title_right}>
                        <div className={styles.button_upload}>Загрузить документ</div>
                    </div>
                </div>
                <div className={styles.data_box}>
                    <div className={styles.table}>
                        <div className={styles.table_top}>
                            <div className={styles.table_top_left}>
                                <div className={styles.table_text_left}>Имя документа</div>
                            </div>
                            <div className={styles.table_top_right}>
                                <div className={styles.table_text_right}>Дата добавления</div>
                            </div>
                        </div>
                        <div className={styles.table_bottom}></div>
                    </div>
                </div>
            </div>

        </div>
    );

});

export default Documents;