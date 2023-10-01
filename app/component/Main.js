import styles from './component.module.css';
import Link from 'next/link';
import { BsPencil } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

export default function Main() {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.mainTitleWrap}>
        <span>옥소폴리틱스</span>
        <h3>정치성향 테스트</h3>
      </div>
      <div className={styles.mainMiddle}>
        <div className={styles.mainAnimalsWrap}>
          <img className={styles.mainAnimals} src='/img/home-animals.png'/>
        </div>
        <div className={styles.mainScale}>
          <span>진보</span>
          <div className={styles.mainBar}></div>
          <span>중도</span>
          <div className={styles.mainBar}></div>
          <span>보수</span>
        </div>
      </div>
      <div className={styles.mainTime}>
        <div className={styles.mainTimeWrap}>
          <BsPencil className={styles.mainIcon}/>
          <span>15문항</span>
        </div>
        <div className={styles.mainTimeWrap}>
          <BiTimeFive className={styles.mainIcon}/>
          <span>2분 30초</span>
        </div>
      </div>
      <div className={styles.mainButtonWrap}>
        <Link href={'/login'} style={{ textDecoration: "none" }}>
          <button className={styles.mainButton}>
            <h4>테스트 하기</h4>
            <span>19,710명이 참여했어요!!</span>
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}