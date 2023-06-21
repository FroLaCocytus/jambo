import React, { useContext } from 'react';
import styles from './ListDocument.module.css'
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

const ListDocument = observer(() => {

    const {documentStore} = useContext(Context)
    const arrayDocument = documentStore.documents

    return (
        <div className={styles.container}>
            {arrayDocument.map(item => (
                <div className={styles.row} key={item.id}>
                    <div className={styles.info_box}>
                        <div className={styles.row_left}>
                            <div className={styles.row_text_left}>{item.title}</div>
                        </div>
                        <div className={styles.row_right}>
                            <div className={styles.row_text_right}>{item.date}</div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                </div>
            ))}
        </div>
    );
});

export default ListDocument;