import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A2() {
  const pageNum = 6;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a6.png' title='노인 일자리 창출에 대한 내 생각에 더 가까운 것은?'/>
    <SurveyButton first='정부 주도로 만들어져야 안정적으로 운영돼요' second='시장에서 자연스럽게 만들도록 놔둬야 해요' src={pageNum + 1}/>
    </div>
  )
}