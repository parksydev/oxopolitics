'use client'

import styles from './page.module.css';
import Header from '@/app/component/Header';

export default function Load() {

    const delay = function() {
        window.location.href = '/result'; 
    }

    setTimeout(delay, 3500);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.loaderWrap}>
                <span className={styles.loader}></span>
                <span className={styles.loaderText}>결과 분석중...</span>
            </div>
        </div>
    )
}