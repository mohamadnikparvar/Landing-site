import React from 'react';
import styles from "./Logos.module.css"
import samsung from "../images/samsung.jpg"
import xiaomi from "../images/xiaomi1.png"
import apple from "../images/apple.png"

const Logos = () => {
    return (
        <div className={styles.container}>
            <p>Who Supports Us?</p>
            <div>
                <img src={samsung} alt="logo"/>
                <img src={xiaomi} alt="logo"/>
                <img src={apple} alt="logo"/>
            </div>
        </div>
    );
};

export default Logos;