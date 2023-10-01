import styles from './page.module.css';
import Header from '../component/Header';

export default function Result() {
  return (
    <div className={styles.container}>
    <Header />
    <div className={styles.top}>
      <div className={styles.topTitle}>
        <span>분석 결과 당신은</span>
        <h3>중도진보주의</h3>
        <img src='/img/violet.jpg' className={styles.violet}></img>
      </div>
      <div className={styles.topSubTitle}>
        <ul>
          <li>⋅ 다양성이 존중되는 세상을 꿈꿔요</li>
          <li>⋅ 정부는 다양한 구성원의 행복 보장을 위해 힘써야 한다고 생각해요</li>
          <li>⋅ 다양한 개인의 권리를 위해 시스템과 제도가 필요하다고 여겨요</li>
          <li>⋅ 성소수자, 환경주의, 다문화 등 다양한 사람과 문화에 관심이 많아요</li>
          <li>⋅ 공정한 경쟁을 위해서는 타고난 기회의 차이를 줄여야 한다고 생각해요</li>
          <li>⋅ 사회 복지와 더불어 유연한 규제 안에서의 시장 경제 발전을 지지해요</li>
        </ul>
      </div>
    </div>
    <div className={styles.middle}></div>
    <div className={styles.bottom}></div>
    </div>
  )
}