//import './Navbar.module.css';
import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar_wrapper}>
            <div className={styles.item}>
                <NavLink to="japaneese" className={navData => navData.isActive ? styles.active : styles.unactive}>
                    Japaneese
                </NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="feedbackForm" className={navData => navData.isActive ? styles.active : styles.unactive}>
                    Feedback Form
                </NavLink>
            </div>

        </div>
    );
}

export default Navbar;
