"use client" ;

import styles from "./test.module.scss";
import { motion } from "framer-motion";

export const Test = () => {
    return (
        <>
        <motion.circle   
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className={styles.test} />
        <div className={styles.test}>
            <h1>Test</h1>
        </div></>
    )
    }
