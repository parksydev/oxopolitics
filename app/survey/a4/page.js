import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A4() {
  const pageNum = 4;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a4.png' title='앞으로 우리나라는 국방 예산을?'/>
    <SurveyButton first='늘려가야 해요' second='줄여가야 해요' src={pageNum + 1}/>
    </div>
  )
}