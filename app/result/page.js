import Link from 'next/link';
import styles from './page.module.css';
import Header from '../component/Header';
import { FiShare } from 'react-icons/fi';

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
    <div className={styles.middle}>
      <div className={styles.middleTitle}>
        <h3>옥소 활동에 따라 정치성향은 <br/>계속 바뀔 수 있어요!</h3>
        <span>매일 옥소의 질문에 응답하면 <br/>지형도의 위치가 움직여요</span>
        <img src='/img/indicator.jpeg'></img>
      </div>
      <div className={styles.middleSubTitle}>
        <span>지형도에서 나의 위치 확인하기</span>
        <span>· 위에 있을수록 법과 제도 등 시스템을, 아래에 있을수록 개인의 자유를 중요하게 생각해요</span>
      </div>
    </div>
    <div className={styles.bottom}>
      <div className={styles.bottomTitle}>
        <h3>다른 결과보기</h3>
        <span>옥소는 모든 정치성향이 모여있는 <br/>정치 커뮤니티예요</span>
        <img src='/img/characters.jpeg'></img>
      </div>
      <div className={styles.boxWrap}>
        <div className={styles.box}><span>다른 테스트 하러가기</span></div>
        <div className={styles.sharebox}><FiShare/></div>
      </div>
      <Link href={'/'}  style={{ textDecoration: "none" }} className={styles.retry}>
        <span>처음부터 다시하기</span>
      </Link>
    </div>
    <div className={styles.footer}>
      <span>Powered by</span>
      <img src='/img/oxopolitics-logo.jpg'></img>
    </div>
    </div>
  )
}