import React from "react";
import styles from './NavBar.module.css'
import { ReactComponent as Logo } from '../../img/logo.svg';


const NavBar = ({ children }) => {
    return (
        <div className={styles.bar}>
            <div className={styles.logo_box}>
               <Logo className={styles.logo_svg}/>
            </div>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );

};

export default NavBar;