import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A2() {
  const pageNum = 2;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a2.png' title='교육에 대한 내 생각에 더 가까운 것은?'/>
    <SurveyButton first='교육의 공공성을 강화해야 해요' second='교육은 개인의 선택과 책임이죠' src={pageNum + 1}/>
    </div>
  )
}