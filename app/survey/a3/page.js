import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A3() {
  const pageNum = 3;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a3.png' title='규제에 대한 내 생각에 더 가까운 것은?'/>
    <SurveyButton first='일부 규제는 시장의 공공성을 유지하기 위해 필요해요' second='대부분의 규제는 경제 발전과 개인의 자유를 침해해요' src={pageNum + 1}/>
    </div>
  )
}