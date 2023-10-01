import styles from './component.module.css'

export default function SurveyBar(props) {
  return (
    <>
    <div className={styles.surveyWrap}>
      <div className={styles.surveyNumWrap}>
        <span>{ props.num }</span>
      </div>
      <div className={styles.surveyBarWrap}>
        <div className={styles.surveyBar} style={{ width: props.width }}></div>
      </div>
    </div>
    </>
  )
}