import Header from "../component/Header";
import styles from './page.module.css';
import Link from "next/link";

export default function Login() {

  const imgLink = {
    github: '/img/github-icon.png',
    instagram: '/img/instagram-icon.png',
    microsoft: '/img/microsoft-icon.png',
  };

  return (
    <div className={styles.container}>
    <Header />
    <div className={styles.loginWrap}>
      <div className={styles.titleWrap}>
        <div className={styles.title}>
          <span>옥소폴리틱스</span>
          <h3>시작하기</h3>
        </div>
        <div className={styles.backgroundWrap}>
          <img src="/img/login-background.png" className={styles.background}/>
        </div>
      </div>
      <div className={styles.boxWrap}>
        <button className={styles.mainButton}>
          <img src={imgLink.github} className={styles.icon} />
          GitHub 계정으로 시작하기
        </button>
        <Link href={'/login/instagram'} style={{ textDecoration: "none" }}>
        <button className={styles.mainButton}>
          <img src={imgLink.instagram} className={styles.icon} />
          Instagram 계정으로 시작하기
        </button>
        </Link>
        <button className={styles.mainButton}>
          <img src={imgLink.microsoft} className={styles.icon} />
          Microsoft 계정으로 시작하기
        </button>
      </div>
    </div>
    </div>
  )
}