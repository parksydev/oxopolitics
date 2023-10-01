import styles from './component.module.css';

export default function SurveyMain(props) {
  return (
    <>
    <div className={styles.survey}>
      <img className={styles.surveyImg} src={ props.src }></img>
      <span className={styles.surveyTitle}>{ props.title }</span>
    </div>
    </>
  )
}