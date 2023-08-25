import React from "react";
import styles from "./Card.module.css";

const Card = ({ icon, text }) => {
    return (
        <div className={styles.card}>
            <i className={styles.icon}>{icon}</i>
            <p className={styles.body}>{text}</p>
        </div>
    );
};

export default Card;
