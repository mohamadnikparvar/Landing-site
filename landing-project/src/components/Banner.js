import React from 'react';
import styles from "./Banner.module.css"
import banner from "../images/Banner.jpg"
const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="Banner"/>
            <div className={styles.textContainer}>
            <h1>Landing Site</h1>
            <p>The best <span>phones</span> all over the world</p>
            </div>
        </div>
    );
};

export default Banner;