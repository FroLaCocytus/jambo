import React, { useContext } from 'react';
import styles from './ListMerchandises.module.css'
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

const ListMerchandises = observer(() => {

    const {merchandise} = useContext(Context)
    const arrayMerchandise = merchandise.merchandises

    return (
        <div className={styles.container}>
            {arrayMerchandise.map(item => (
                <div className={styles.row} key={item.id}>
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
        </div>
    );
});

export default ListMerchandises;