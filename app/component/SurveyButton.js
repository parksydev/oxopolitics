import Link from 'next/link';
import styles from './component.module.css';

export default function SurveyButton(props) {
  let link = props.src;

  if (link === 16) {
    link = '/result';
  } else {
    link = `/survey/a${props.src}`;
  }

  return (
    <>
    <div className={styles.surveyButtonWrap}>
      <Link href={ link } style={{ textDecoration: "none" }}>
        <button className={styles.surveyButton}>{ props.first }</button>
      </Link>
      <Link href={ link } style={{ textDecoration: "none" }}>
        <button className={styles.surveyButton}>글쎄요</button>
      </Link>
      <Link href={ link } style={{ textDecoration: "none" }}>
        <button className={styles.surveyButton}>{ props.second }</button>
      </Link>
    </div>
    </>
  )
}