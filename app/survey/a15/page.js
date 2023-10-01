import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A15() {
  const pageNum = 15;
  const width = 100;

  return (
    <div style={{ position: "relative", height: "100vh" }}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a15.png' title='언론이 더 우선적으로 지켜야 할 가치는?'/>
    <SurveyButton first='신뢰할 수 있는 정보를 편견과 왜곡 없이 전달하는 거예요' second='권력에 대한 감시 및 다양한 목소리를 대변하는 거예요' src={ pageNum + 1 }/>
    </div>
  )
}