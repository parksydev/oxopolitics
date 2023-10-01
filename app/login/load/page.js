'use client'

import styles from './page.module.css';
import Header from '@/app/component/Header';

export default function Load() {

    const delay = function() {
        window.location.href = '/survey/a1'; 
    }

    setTimeout(delay, 2000);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.loaderWrap}>
                <span className={styles.loader}></span>
                <span className={styles.loaderText}>준비중...</span>
            </div>
        </div>
    )
}