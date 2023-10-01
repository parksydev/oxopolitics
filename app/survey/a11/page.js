import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A11() {
  const pageNum = 11;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a11.png' title='낙태에 대한 내 생각에 더 가까운 것은?'/>
    <SurveyButton first='개인의 문제이므로 스스로 선택할 수 있어야 해요' second='사회•윤리적 문제이므로 법적으로 규제해야 해요' src={pageNum + 1}/>
    </div>
  )
}